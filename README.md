# Matomo javascript 

A matomo javascript client which can be used both in nodejs and browsers.

## Example
```javascript
const client = new MatomoClient('your-piwik-domain.example/piwik.php', '1');
client.track({
  actionName: 'push_it',
  url: 'https://example.com',
  uniqueUserId: '3b99e3e0759811e8',
  random: '905e6838-4c8e-11e9-8646-d663bd873d93',
  apiVersion: '1' 
});
```
More examples of usage can be found in the [tests](tests).

## Installation
```shell
npm install -save matomo-javascript-client
```
