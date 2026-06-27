import fs from 'fs';

function getFooter() {
  const html = fs.readFileSync('fetched-page.html', 'utf-8');
  const index = html.indexOf('<footer');
  if (index !== -1) {
    console.log("=== FOOTER HTML ===\n");
    console.log(html.substring(index, index + 3500));
  } else {
    // Try other keywords in footer
    const altIndex = html.indexOf('CNPJ:');
    if (altIndex !== -1) {
      console.log("=== FOOTER REGION ALT ===\n");
      console.log(html.substring(altIndex - 1500, altIndex + 1000));
    } else {
      console.log("Footer not found!");
    }
  }
}

getFooter();
