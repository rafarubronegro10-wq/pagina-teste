import fs from 'fs';

function findRootWrapper() {
  const html = fs.readFileSync('fetched-page.html', 'utf-8');
  console.log("Analyzing root wrapper structure...");

  const bodyStart = html.indexOf('<body');
  if (bodyStart !== -1) {
    const bodyExcerpt = html.substring(bodyStart, bodyStart + 1000);
    console.log("=== BODY EXCERPT ===\n", bodyExcerpt);
  }

  // Find the first few divs inside body
  const bodyCloseIndex = html.indexOf('>', bodyStart);
  if (bodyCloseIndex !== -1) {
    const bodyContentExcerpt = html.substring(bodyCloseIndex + 1, bodyCloseIndex + 2000);
    console.log("=== FIRST 2000 CHARACTERS OF BODY CONTENT ===\n", bodyContentExcerpt.replace(/<script[\s\S]*?<\/script>/gi, '').trim().slice(0, 1500));
  }
}

findRootWrapper();
