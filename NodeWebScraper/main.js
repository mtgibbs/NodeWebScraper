

var scraper = require('./scraper/CowboomScraper');

var CowboomScraper = require('./scraper/CowboomScraper').Scraper.CowboomScraper;

var boom = new CowboomScraper('ps4');
console.log(JSON.stringify(boom));
boom.scrape();

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function () {
    process.exit();
});