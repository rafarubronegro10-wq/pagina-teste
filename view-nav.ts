import fs from 'fs';

function viewNav() {
  const html = fs.readFileSync('fetched-page.html', 'utf-8');
  const index = html.indexOf('grid grid-cols-4');
  if (index !== -1) {
    console.log("=== NAVIGATION BAR HTML ===\n");
    console.log(html.substring(index - 100, index + 1500));
  } else {
    console.log("Navigation bar container not found!");
  }
}

viewNav();
