var WebScraper = require('./scraper/CowboomScraper');
var boom = new WebScraper('ps4');
console.log(JSON.stringify(boom));
boom.scrape();

//var prompts = rl.createInterface(process.stdin, process.stdout);
//prompts.question('', function () {
//    process.exit();
//});