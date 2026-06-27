import fs from 'fs';

function checkImageUsage() {
  const html = fs.readFileSync('fetched-page.html', 'utf-8');
  console.log("Checking base64 image positions...");

  let index = 0;
  let occurrence = 0;
  while (true) {
    index = html.indexOf('data:image', index);
    if (index === -1) break;
    occurrence++;
    console.log(`\nOccurrence ${occurrence} at character position ${index}:`);
    console.log(html.substring(index - 200, index + 300).slice(0, 400).replace(/\r?\n/g, ' '));
    index += 10; // move past
  }
}

checkImageUsage();
