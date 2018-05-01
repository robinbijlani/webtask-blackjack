# webtask-blackjack

This is a very simple text-based Blackjack implementation leveraging [Webtask.io](https://webtask.io). 

## Game Logic

The game uses one standard deck of 52 cards, and the options available for the player are to hit or stand. The dealer will stand on 17.

## Requirements

* npm - [https://www.npmjs.com/](https://www.npmjs.com/)
* A Webtask.io account - [https://webtask.io/](https://webtask.io/)
* The Webtask CLI - [https://webtask.io/cli](https://webtask.io/cli)

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


