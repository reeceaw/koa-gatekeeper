/*!
 * koa-gatekeeper
 * Copyright(c) 2017 Reece Arratoonian-Walker
 * MIT Licensed
 */

'use strict';

/**
 * Dependencies.
 * @private
 */

const logger = require('../utils/logger');

/**
 * @param {Object} options - Object containing options for blacklisting.
 * @param {string[]} options.ips[] - Array of IP addresses to blacklist.
 * @param {string[]} option.hostnames[] - Array of hostnames to blacklist.
 * @param {string} options.redirectUrl - URL to redirect blacklisted requests to.
 * @return {Function}
 * @api public
 */

module.exports = ({ ips = [], hostnames = [], redirectUrl }) => {
  return (ctx, next) => {
    if (ips.length > 0 && hostnames.length > 0) {
      if (ips.includes(ctx.ip) || hostnames.includes(ctx.hostname)) {
        ctx.redirect(redirectUrl);
      } else {
        next();
      }
    } else {
      logger.warn('No IPs or hostnames specified - ignoring blacklist.');
      next();
    }
  };
};
