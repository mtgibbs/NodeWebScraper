/// <reference path="../typings/node.d.ts"/>
/// <reference path="../typings/request.d.ts"/>
import request = require('request');

export module Scraper {
    export class WebScraper {

        private _targetUrl : string;

        constructor(url) {
            this._targetUrl = url
        }

        public scrape() {
            var req = request(this._targetUrl, (error, response, html) => {
                if (!error) {
                    this.doWork(response, html);
                }
            });
            //req.on('end', this.onFinish());
        }

        public onFinish(args) {
            throw new Error('Supposed to be abstract.  Not implemented in base class.');
        }

        public doWork(response, html) {
            throw new Error('Supposed to be abstract.  Not implemented in base class.');
        }
    }
}

exports.WebScraper = Scraper.WebScraper; 