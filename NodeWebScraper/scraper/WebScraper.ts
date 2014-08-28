/// <reference path="../typings/node.d.ts"/>
/// <reference path="../typings/request.d.ts"/>
import request = require('request');

export module Scraper {

    export class WebScraper {
        private _requestOptions: request.Options;

        constructor(targetUrl: string);
        constructor(options: request.Options);
        constructor(arg: any) {

            switch (typeof arg) {
                case 'string':
                    this._requestOptions = { uri: arg };
                    break;
                default:
                    this._requestOptions = arg;
            }
        }

        public getTargetUrl(): string {
            return this._requestOptions.uri;
        }

        public scrape() {
            var req = request(this._requestOptions.uri, this._requestOptions, (error, response, html) => {
                if (!error) {
                    this.doWork(response, html);
                }
            });

            req.on('end', this.onFinish);
        }

        public onFinish(args?: any) {
            throw new Error('Supposed to be abstract.  Not implemented in base class.');
        }

        public doWork(response, html) {
            throw new Error('Supposed to be abstract.  Not implemented in base class.');
        }
    }
}

exports.WebScraper = Scraper.WebScraper; 