import fs from 'fs';

function getFullBody() {
  const html = fs.readFileSync('fetched-page.html', 'utf-8');
  const mainStart = html.indexOf('<main');
  const faqStart = html.indexOf('id="faq-section"');

  if (mainStart !== -1 && faqStart !== -1) {
    console.log("=== MAIN BODY HTML (UP TO FAQ) ===\n");
    console.log(html.substring(mainStart, faqStart).slice(0, 15000)); // print first 15KB of body
  } else {
    console.log("Main or FAQ start positions not found!");
  }
}

getFullBody();
