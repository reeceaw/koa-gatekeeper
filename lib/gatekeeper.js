/*!
 * koa-gatekeeper
 * Copyright(c) 2017 Reece Arratoonian-Walker
 * MIT Licensed
 */

'use strict';

/**
 * Dependencies.
 */

const whitelist = require('./whitelist');
const blacklist = require('./blacklist');

/**
 * Export functions.
 */

module.exports = {
  whitelist,
  blacklist
};