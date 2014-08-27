var CowboomScraper = require('./scraper/CowboomScraper').Scraper.CowboomScraper;
var MehScraper = require('./scraper/MehScraper').Scraper.MehScraper;

var boom = new CowboomScraper('ps4');
boom.scrape();

var meh = new MehScraper();
meh.scrape();

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...\r\n\r\n", function () {
    process.exit();
});