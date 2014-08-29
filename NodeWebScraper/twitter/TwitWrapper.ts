/// <reference path="../typings/node.d.ts"/>
/// <reference path="../typings/twit.d.ts"/>

var Twit = require('twit');

export module Twitter {

    export class TwitWrapper {

        private _atUser: string;
        private _twit: Twit;

        constructor(username: string);
        constructor(username: string, twitOptions: TwitOptions);

        constructor(username: string, twitOptions?: TwitOptions) {

            if (typeof twitOptions === 'undefined' || twitOptions == null) {
                twitOptions = require('./../twitter.json');
            }
            this._twit = new Twit(twitOptions);
            this._atUser = username;
        }

        public tweet(message: string) {
            var message = '@' + this._atUser + ' ' + message;
            message = message.substr(0, 140);

            this._twit.post('statuses/update', { status: message }, (err, data, response) => {
                if (!err) {
                    console.log('Message tweeted @' + this._atUser);
                } else {
                    console.log(err);
                }
            });
        }
    }
}

exports.TwitWrapper = Twitter.TwitWrapper; 