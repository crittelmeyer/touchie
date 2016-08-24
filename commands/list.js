module.exports = (() => {

  'use strict';

  const Command = require('cmnd').Command;

  class ListCommand extends Command {
    constructor() {
      super('list');
    }

    help() {
      return {
        description: 'Display list of videos',
        args: [],
        flags: {},
        vflags: {}
      };
    }

    run(options, callback) {
      console.log('listing!')
      // Run code here.
      // To throw an error, use: callback(new Error(msg))
      // To optionally return a result, use: callback(null, result)

      callback(null);
    }
  }

  return ListCommand;
})();
