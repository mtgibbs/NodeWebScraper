/// <reference path="../typings/node.d.ts"/>
/// <reference path="WebScraper.ts"/>

var fs = require('fs');
var cheerio = require('cheerio');
var rl = require('readline');

import scraper = require('./WebScraper');

export module Scraper {

    export class MehScraper extends scraper.Scraper.WebScraper {

        constructor() {
            super('https://meh.com/');
        }

        public doWork(response, html) {

            console.log('Meh.com Results');
            var $ = cheerio.load(html);
            var item = $('section.features > h2').text();
            var price = $('.buy-button > span').text();

            console.log(item + '   :   ' + price);

            console.log('-----------------');
        }

        public onFinish(args) { }
    }
}

exports.MehScraper = Scraper.MehScraper;