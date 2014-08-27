var CowboomScraper = require('./scraper/CowboomScraper').Scraper.CowboomScraper;
var MehScraper = require('./scraper/MehScraper').Scraper.MehScraper;

var scrapers = [];
scrapers.push(new CowboomScraper('ps4'));
scrapers.push(new MehScraper());

scrapers.forEach(function (scraper) {
    try {
        setInterval(function () {
            scraper.scrape();
        }, 5000);
    } catch (error) {
        // TODO: Need to find a logging library...
        console.log(error.message);
        console.log('error occured while trying start timer for [' + JSON.stringify(scraper) + ']');
    }
});

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...\r\n\r\n", function () {
    process.exit();
});