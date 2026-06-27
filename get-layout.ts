import fs from 'fs';

function extractLayout() {
  const html = fs.readFileSync('fetched-page.html', 'utf-8');
  console.log("Extracting CSS classes and style hints...");

  // Search for background color definitions
  const bgColors = html.match(/background-color:\s*#[a-f0-9]{3,6}/gi);
  console.log("Background Colors mentioned in styles:", Array.from(new Set(bgColors || [])));

  // Search for text colors
  const textColors = html.match(/color:\s*#[a-f0-9]{3,6}/gi);
  console.log("Text Colors mentioned in styles:", Array.from(new Set(textColors || [])).slice(0, 10));

  // Search for fonts
  const fonts = html.match(/font-family:[^;]+/gi);
  console.log("Fonts mentioned in styles:", Array.from(new Set(fonts || [])).slice(0, 5));

  // Let's inspect some of the DOM nodes around the body or main element
  const sections: string[] = [];
  const sectionRegex = /<section[^>]*class="([^"]+)"/gi;
  let match;
  while ((match = sectionRegex.exec(html)) !== null) {
    sections.push(match[1]);
  }
  console.log("\nSection classes found:", Array.from(new Set(sections)).slice(0, 10));

  // Let's print some outer structure around the main heading
  const index = html.indexOf('APITOU O FIM DO PRIMEIRO TEMPO');
  if (index !== -1) {
    console.log("\nContext around main heading:");
    console.log(html.substring(index - 300, index + 300).replace(/<[^>]*>/g, ' ').trim().replace(/\s+/g, ' '));
  }
}

extractLayout();
