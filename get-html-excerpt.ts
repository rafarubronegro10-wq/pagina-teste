import fs from 'fs';

function extractHtmlExcerpts() {
  const html = fs.readFileSync('fetched-page.html', 'utf-8');
  console.log("Analyzing HTML structure and Tailwind classes...");

  // Let's write a regex or simple parser to extract key segments
  // 1. Let's find the top bar (header or navigation)
  const navIndex = html.indexOf('<nav');
  if (navIndex !== -1) {
    const navEnd = html.indexOf('</nav>', navIndex) + 6;
    console.log("\n=== NAV / HEADER ===\n", html.substring(navIndex, navEnd));
  } else {
    // Let's search for "Início" or "Dúvidas" to see the container
    const duvidasIndex = html.indexOf('Dúvidas');
    if (duvidasIndex !== -1) {
      console.log("\n=== HEADER REGION ===\n", html.substring(duvidasIndex - 300, duvidasIndex + 400));
    }
  }

  // 2. Let's find the main panel header and the container wrapping it
  const headingIndex = html.indexOf('APITOU O FIM DO PRIMEIRO TEMPO');
  if (headingIndex !== -1) {
    // Look backwards for the start of the section/div container
    const startOfDiv = html.lastIndexOf('<div', headingIndex);
    const outerDiv = html.lastIndexOf('<div', startOfDiv - 1);
    console.log("\n=== HERO CONTAINER STRUCTURE ===\n", html.substring(outerDiv, headingIndex + 800));
  }

  // 3. Let's find the pricing section
  const priceIndex = html.indexOf('APENAS R$ 7,90');
  if (priceIndex !== -1) {
    console.log("\n=== PRICING REGION ===\n", html.substring(priceIndex - 200, priceIndex + 400));
  }

  // 4. Let's find the reviews container
  const reviewsIndex = html.indexOf('Opinião de quem já comprou');
  if (reviewsIndex !== -1) {
    const wrapper = html.lastIndexOf('<div', reviewsIndex);
    console.log("\n=== REVIEWS CONTAINER ===\n", html.substring(wrapper - 100, reviewsIndex + 1200));
  }
}

extractHtmlExcerpts();
