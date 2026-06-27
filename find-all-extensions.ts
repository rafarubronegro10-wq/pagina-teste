import fs from 'fs';

function findExtensions() {
  const html = fs.readFileSync('fetched-page.html', 'utf-8');
  console.log("Scanning for all image file extensions...");

  // Match URLs ending with image extensions
  const regex = /(https?:\/\/[^\s'"()>]+?\.(webp|png|jpe?g|svg|gif))/gi;
  const matches = html.match(regex);
  const uniqueMatches = Array.from(new Set(matches || []));

  console.log(`Found ${uniqueMatches.length} unique image links:`);
  console.log(uniqueMatches.join('\n'));
}

findExtensions();
