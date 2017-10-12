/*!
 * koa-gatekeeper
 * Copyright(c) 2017 Reece Arratoonian-Walker
 * MIT Licensed
 */

'use strict';

/**
 * @param {Object} options
 * @return {Function}
 * @api public
 */

module.exports = ({ ips, hostnames, redirectUrl }) => {
  return (ctx, next) => {
    if (ips.includes(ctx.ip) || hostnames.includes(ctx.hostname)) {
      ctx.redirect(redirectUrl);
    } else {
      next();
    }
  };
};
