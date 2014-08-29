/// <reference path="node.d.ts" />

interface TwitOptions {
    consumer_key: string;
    consumer_secret: string;
    access_token: string;
    access_token_secret: string;
}

declare class Twit {
    post(type: string, config: any, callback: any);
}