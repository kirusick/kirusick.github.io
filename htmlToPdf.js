const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Get the absolute path to the HTML file
    const htmlPath = path.resolve(__dirname, 'index.html');
    const htmlUrl = `file://${htmlPath}`;

    // Navigate to the HTML file
    await page.goto(htmlUrl, { waitUntil: 'networkidle0' });

    // Generate PDF
    await page.pdf({
      path: 'cv.pdf',
      format: 'A4',
      printBackground: true,
      scale: 0.65,
      margin: {
        // top: '20mm',
        // bottom: '20mm',
        right: '10mm',
        left: '10mm'
      }
    });

    await browser.close();
    console.log('PDF generated successfully: cv.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
})();