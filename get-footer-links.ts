import fs from 'fs';

function getFooterLinks() {
  const html = fs.readFileSync('fetched-page.html', 'utf-8');
  const index = html.indexOf('<footer');
  if (index !== -1) {
    // Let's skip past the base64 string in the footer
    const secondHalf = html.substring(index + 3000, index + 8000);
    console.log("=== FOOTER LINKS AND TRUST SIGNALS ===\n");
    console.log(secondHalf);
  }
}

getFooterLinks();
