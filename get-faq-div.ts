import fs from 'fs';

function getFaqDiv() {
  const html = fs.readFileSync('fetched-page.html', 'utf-8');
  // Search for id="faq-section"
  const index = html.indexOf('id="faq-section"');
  if (index !== -1) {
    console.log("=== FAQ DIV HTML ===\n");
    console.log(html.substring(index - 100, index + 2500));
  } else {
    // Try alternative cases
    const index2 = html.indexOf('faq-section"');
    if (index2 !== -1) {
      console.log("=== FAQ DIV ALT HTML ===\n");
      console.log(html.substring(index2 - 100, index2 + 2500));
    } else {
      console.log("FAQ div not found!");
    }
  }
}

getFaqDiv();
