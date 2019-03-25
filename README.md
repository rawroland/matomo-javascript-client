# Matomo javascript client

[![npm package](https://nodei.co/npm/matomo-javascript-client.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/matomo-javascript-client/)
 
[![Build status](https://img.shields.io/travis/rawroland/matomo-javascript-client.svg?style=flat-square)](https://travis-ci.org/rawroland/matomo-javascript-client)
[![Coverage](https://img.shields.io/codecov/c/github/rawroland/matomo-javascript-client.svg?style=flat-square)](https://codecov.io/github/rawroland/matomo-javascript-client?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/rawroland/proverbial-backend-nodejs/badge.svg?targetFile=package.json&style=flat-square)](https://snyk.io/test/github/rawroland/proverbial-backend-nodejs?targetFile=package.json)

A matomo javascript client which can be used both in nodejs and browsers.

## Example
```javascript
import MatomoClient from 'matomo-javascript-client';

const client = new MatomoClient('your-piwik-domain.example/piwik.php', 1);
client.track({
  actionName: 'push_it',
  url: 'https://example.com',
  uniqueUserId: '3b99e3e0759811e8',
  randomString: '905e6838-4c8e-11e9-8646-d663bd873d93',
  apiVersion: '1' 
});
```
More examples of usage can be found in the [tests](tests).

## Installation
```shell
npm install -save matomo-javascript-client
```
