import fs from 'fs';

function getFaq() {
  const html = fs.readFileSync('fetched-page.html', 'utf-8');
  const index = html.indexOf('faq-section');
  if (index !== -1) {
    console.log("=== FAQ SECTION HTML ===\n");
    console.log(html.substring(index - 100, index + 2500));
  } else {
    // Let's search for "COMO VOU BAIXAR" to see if it's there
    const alternativeIndex = html.indexOf('COMO VOU BAIXAR');
    if (alternativeIndex !== -1) {
      console.log("=== FAQ REGION ALTERNATIVE ===\n");
      console.log(html.substring(alternativeIndex - 200, alternativeIndex + 1500));
    } else {
      console.log("FAQ region not found!");
    }
  }
}

getFaq();
