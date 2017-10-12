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

const chalk = require('chalk');

/**
 * Module exports.
 * @public
 */

module.exports = {
  info: (message) => {
    console.log(chalk.bgBlue('INFO') + chalk.blue(` ${message}`));
  },
  warn: (message) => {
    console.log(chalk.bgYellow('WARN') + chalk.yellow(` ${message}`));
  },
  error: (message) => {
    console.log(chalk.bgRed('ERROR') + chalk.red(` ${message}`));
  }
};
