/// <reference path="../typings/node.d.ts"/>
/// <reference path="WebScraper.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var fs = require('fs');
var cheerio = require('cheerio');
var rl = require('readline');

var scraper = require('./WebScraper');

(function (Scraper) {
    var MehScraper = (function (_super) {
        __extends(MehScraper, _super);
        function MehScraper() {
            _super.call(this, 'https://meh.com/');
        }
        MehScraper.prototype.doWork = function (response, html) {
            console.log('Meh.com Results');
            var $ = cheerio.load(html);
            var item = $('section.features > h2').text();
            var price = $('.buy-button > span').text();

            console.log(item + '   :   ' + price);

            console.log('-----------------');
        };

        MehScraper.prototype.onFinish = function (args) {
        };
        return MehScraper;
    })(scraper.Scraper.WebScraper);
    Scraper.MehScraper = MehScraper;
})(exports.Scraper || (exports.Scraper = {}));
var Scraper = exports.Scraper;

exports.MehScraper = Scraper.MehScraper;
//# sourceMappingURL=MehScraper.js.map
