import fs from 'fs';
import path from 'path';

function extractBase64() {
  const html = fs.readFileSync('fetched-page.html', 'utf-8');
  console.log("Extracting base64 images from HTML...");

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Find all src="data:image/...;base64,..."
  const regex = /src="data:(image\/[a-zA-Z+]+);base64,([^"]+)"/gi;
  let match;
  let count = 0;

  while ((match = regex.exec(html)) !== null) {
    count++;
    const mimeType = match[1];
    const base64Data = match[2];
    const ext = mimeType.split('/')[1] || 'png';
    const filename = `asset-${count}.${ext}`;
    const filePath = path.join(publicDir, filename);

    console.log(`Asset ${count}: Type=${mimeType}, Length=${base64Data.length} chars, Saving as ${filename}`);
    fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
  }

  console.log(`Extracted ${count} base64 assets to /public/!`);
}

extractBase64();
