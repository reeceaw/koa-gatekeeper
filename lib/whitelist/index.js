/*!
 * koa-gatekeeper
 * Copyright(c) 2017 Reece Arratoonian-Walker
 * MIT Licensed
 */

'use strict';

/**
 * @param {Object} options - Object containing options for whitelisting.
 * @param {string[]} options.ips[] - Array of IP addresses to whitelist.
 * @param {string[]} option.hostnames[] - Array of hostnames to whitelist.
 * @param {string} options.redirectUrl - URL to redirect non-whitelisted requests to.
 * @return {Function}
 * @api public
 */

module.exports = ({ ips = [], hostnames = [], redirectUrl }) => {
  return (ctx, next) => {
    if (ips || hostnames !== []) {
      if (ips.includes(ctx.ip) || hostnames.includes(ctx.hostname)) {
        next();
      } else {
        ctx.redirect(redirectUrl);
      }
    } else {
      next();
    }
  };
}
