import fs from 'fs';

function getFooterEnd() {
  const html = fs.readFileSync('fetched-page.html', 'utf-8');
  const index = html.indexOf('</footer>');
  if (index !== -1) {
    console.log("=== END OF FOOTER ===\n");
    // Show 2500 characters preceding the closing </footer> tag
    console.log(html.substring(index - 2500, index + 10));
  } else {
    console.log("Footer close tag not found!");
  }
}

getFooterEnd();
