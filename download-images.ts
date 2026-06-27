import fs from 'fs';
import path from 'path';

async function downloadFile(url: string, dest: string) {
  console.log(`Downloading ${url} to ${dest}...`);
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buffer);
    console.log(`Success! Saved ${buffer.length} bytes.`);
  } catch (err: any) {
    console.error(`Error downloading ${url}:`, err.message || err);
  }
}

async function main() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Download panel mockup image
  await downloadFile(
    'https://educaartemateriaisoficial.com.br/wp-content/uploads/2026/06/20-2.webp',
    path.join(publicDir, 'panel.webp')
  );

  // Download background image
  await downloadFile(
    'https://educaartemateriais.com.br/wp-content/uploads/2023/03/fundo-para-o-site.webp',
    path.join(publicDir, 'background.webp')
  );

  // Rename extracted asset-1.jpg to logo.jpg
  const asset1Path = path.join(publicDir, 'asset-1.jpg');
  if (fs.existsSync(asset1Path)) {
    fs.renameSync(asset1Path, path.join(publicDir, 'logo.jpg'));
    console.log("Renamed asset-1.jpg to logo.jpg");
  }

  // Delete asset-2.jpg since it is a duplicate of asset-1
  const asset2Path = path.join(publicDir, 'asset-2.jpg');
  if (fs.existsSync(asset2Path)) {
    fs.unlinkSync(asset2Path);
    console.log("Deleted duplicate asset-2.jpg");
  }
}

main();
