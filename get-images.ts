import fs from 'fs';

function extractImages() {
  const html = fs.readFileSync('fetched-page.html', 'utf-8');
  console.log("Extracting standard image URLs...");

  const imgRegex = /<img[^>]+src="([^">]+)"/gi;
  let match;
  const urls: string[] = [];
  while ((match = imgRegex.exec(html)) !== null) {
    const src = match[1];
    if (!src.startsWith('data:')) {
      urls.push(src);
    }
  }

  // Also search for any background-image styles in style tags or style attributes
  const bgRegex = /url\(['"]?([^'")]+)['"]?\)/gi;
  while ((match = bgRegex.exec(html)) !== null) {
    const src = match[1];
    if (!src.startsWith('data:') && !urls.includes(src)) {
      urls.push(src);
    }
  }

  console.log("=== WEB IMAGE ASSETS FOUND ===");
  console.log(Array.from(new Set(urls)).join('\n'));
}

extractImages();
