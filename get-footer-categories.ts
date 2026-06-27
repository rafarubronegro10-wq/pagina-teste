import fs from 'fs';

function getFooterCategories() {
  const html = fs.readFileSync('fetched-page.html', 'utf-8');
  const index = html.indexOf('Decorações de Sala de Aula');
  if (index !== -1) {
    console.log("=== CATEGORIES HTML ===\n");
    console.log(html.substring(index - 500, index + 1000));
  } else {
    console.log("Categories region not found!");
  }
}

getFooterCategories();
