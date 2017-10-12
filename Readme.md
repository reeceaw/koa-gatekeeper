# koa-gatekeeper
Gatekeeper for Koa is your man-on-the-door for your Koa server - Choose who you let in and who you keep out.

## Installation

Gatekeeper for Koa is a [Koa](https://github.com/koajs/koa) middleware available through [NPM](https://www.npmjs.com/):

```bash
$ npm install koa-gatekeeper
```

## API
```js
const gateKeeper = require('koa-gatekeeper');
```
`gateKeeper` is used to manage incoming requests, whitelisting and blacklisting them based on specified criteria. Two functions are exposed once `gateKeeper` has been imported: `whitelist()` and `blacklist()`.

### gateKeeper.whitelist([options])
`whitelist()` uses the criteria specified in the `options` argument to allow requests through. IP addresses and hostnames within the `options` argument will be allowed.

#### options
`whitelist()` takes a required `options` object containing the following keys:

##### ips - *['127.0.0.1', '127.0.0.2']*
Array of strings - determines the IP addresses of requests to be allowed through.

##### hostnames - *['localhost', 'google.com']*
Array of strings - determines the hostnames of requests to be allowed through.

##### redirectUrl - *'/error'*
String - determines the URL to redirect to if the request IP or hostname doesn't match those specified in `ips` or `hostnames` respectively.

### gateKeeper.blacklist([options])
`blacklist()` uses the criteria specified in the `options` argument to stop requests coming through and redirect them. IP addresses and hostnames within the `options` argument will be redirected.

#### options
`blacklist()` takes a required `options` object containing the following keys:

##### ips - *['127.0.0.1', '127.0.0.2']*
Array of strings - determines the IP addresses of requests to be redirected.

##### hostnames - *['localhost', 'google.com']*
Array of strings - determines the hostnames of requests to be redirected.

##### redirectUrl - *'/error'*
String - determines the URL to redirect to if the request IP or hostname matches those specified in `ips` or `hostnames` respectively.

## Examples
### gateKeeper.whitelist([options])
This example shows how `gateKeeper.whitelist()` can be used with Koa:

```js
const gateKeeper = require('koa-gatekeeper');
const Koa = require('koa');
const koaRouter = require('koa-router');

const app = new Koa();
const router = new koaRouter();

router.get('/home', ctx => {
  ctx.body = 'Homepage';
});

app
  .use(gateKeeper.white({
    ips: [
      '127.0.0.1'
    ],
    hostnames: [
      'localhost'
    ],
    redirectUrl: 'https://google.com'
  }))
  .use(router.routes())
  .listen(3000);
```
If the requests IP address **is not** `127.0.0.1` and the requests hostname **is not** `localhost`, the request will be redirected to `https://google.com`.

### gateKeeper.blacklist([options])
This example shows how `gateKeeper.whitelist()` can be used with Koa:

```js
const gateKeeper = require('koa-gatekeeper');
const Koa = require('koa');
const koaRouter = require('koa-router');

const app = new Koa();
const router = new koaRouter();

router.get('/home', ctx => {
  ctx.body = 'Homepage';
});

app
  .use(gateKeeper.blacklist({
    ips: [
      '127.0.0.1'
    ],
    hostnames: [
      'localhost'
    ],
    redirectUrl: 'https://google.com'
  }))
  .use(router.routes())
  .listen(3000);
```
If the requests IP address **is** `127.0.0.1` or the requests hostname **is** `localhost`, the request will be redirected to `https://google.com`.

## License 
[MIT](https://github.com/reeceaw/koa-gatekeeper/blob/master/LICENSE)
