/// <reference path="../typings/node.d.ts"/>
/// <reference path="WebScraper.ts"/>

var fs = require('fs');
var cheerio = require('cheerio');
var rl = require('readline');

import scraper = require('./WebScraper');

export module Scraper {

    
    

    

    export class SearchItem {
        private _price: string;
        private _name: string;
        private _link: string;

        constructor(name: string, link: string, price: string) {
            this._price = price;
            this._name = name;
            this._link = link;
        }
    }

    export class CowboomScraper extends scraper.Scraper.WebScraper {

        constructor(searchKeywords) {
            var searchParams = encodeURIComponent(searchKeywords);
            var url = 'http://www.cowboom.com/search/results.cfm?keywords=' + searchParams;
            super(url);
        }

        public doWork(response, html) {
            var $ = cheerio.load(html);
            var $productBlocks = $(html).find('.product-block');
            $productBlocks.each((i, productBlock) => {
                var price = $(productBlock).find('div.pricing-grid').text();
                var name = $(productBlock).find('h3.result-h3-grid > a');

                console.log(name);
            });
        }

        public onFinish(args) { }
    }

}

exports.CowboomScraper = Scraper.CowboomScraper;