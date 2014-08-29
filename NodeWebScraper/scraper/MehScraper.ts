/// <reference path="../typings/node.d.ts"/>
/// <reference path="../twitter/TwitWrapper.ts"/>
/// <reference path="WebScraper.ts"/>

var fs = require('fs');
var cheerio = require('cheerio');
var rl = require('readline');

import scraper = require('./WebScraper');
import twitWrapper = require('./../twitter/TwitWrapper');

export module Scraper {

    export class MehScraper extends scraper.Scraper.WebScraper {

        private _lastResult;

        constructor() {
            super('https://meh.com/');
        }

        public doWork(response, html) {

            var $ = cheerio.load(html);
            var item = $('section.features > h2').text();
            var price = $('.buy-button > span').text();

            var result = new MehResult(item, price);

            if (!result.equals(this._lastResult)) {
                // if it is different, change the last result and get ready to send message
                this._lastResult = result;

                var TwitWrapper = twitWrapper.Twitter.TwitWrapper;
                // TODO: Make user to be messaged by twitter configurable by default in the application like the keys
                var wrapper = new TwitWrapper('mtgibbs21');
                var message = this.getTargetUrl() + ' ' + result.getPrice() + ' : ' + result.getItem();
                wrapper.tweet(message);
            }
        }

        public onFinish(args) { }
    }

    class MehResult {
        private _item: string;
        private _price: string;

        constructor(item, price) {
            this._item = item.trim();
            this._price = price.trim();
        }

        public equals(other: MehResult) {
            return !!other && this._item === other.getItem() && this._price === other.getPrice();
        }

        public getItem(): string {
            return this._item;
        }

        public getPrice(): string {
            return this._price;
        }
    }
}

exports.MehScraper = Scraper.MehScraper;