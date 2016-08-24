module.exports = (() => {

  'use strict';

  const Command = require('cmnd').Command;

  class RunCommand extends Command {
    constructor() {
      super('run');
    }

    help() {
      return {
        description: 'Run touchie and start accepting input',
        args: [],
        flags: {},
        vflags: {}
      };
    }

    run(options, callback) {
      console.log('running!')
      // Run code here.
      // To throw an error, use: callback(new Error(msg))
      // To optionally return a result, use: callback(null, result)

      callback(null);
    }
  }

  return RunCommand;
})();
