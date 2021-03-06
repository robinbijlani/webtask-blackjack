# webtask-blackjack

This is a very simple text-based Blackjack implementation leveraging [Webtask.io](https://webtask.io). 

You can check out a demo at this URL:
[https://wt-94c7490d7ac08da4818a46c96cca2c6e-0.sandbox.auth0-extend.com/webtask-blackjack](https://wt-94c7490d7ac08da4818a46c96cca2c6e-0.sandbox.auth0-extend.com/webtask-blackjack)

## Game Logic

The game uses one standard deck of 52 cards, and the options available for the player are to hit or stand. The dealer will stand on 17.

## Requirements

* npm - [https://www.npmjs.com/](https://www.npmjs.com/)
* A Webtask.io account - [https://webtask.io/](https://webtask.io/)
* The Webtask CLI - [https://webtask.io/cli](https://webtask.io/cli)

## Running Tests
To run the unit tests, you will first need to install the dev dependencies:
```
npm i
```

To execute the tests and see coverage:
```
npm test
```

## Deploying

### Install the Webtask CLI
```
npm install wt-cli -g
```

### Initialize the Webtask CLI 
You will be prompted to enter and verify your email address or phone number.

```
wt init
```

### Create the Webtask
You will be presented with the URL you can use to access the webtask.

```
wt create index.js --bundle
```

### See the logs
```
wt logs
```


