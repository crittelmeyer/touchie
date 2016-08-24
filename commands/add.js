module.exports = (() => {
  'use strict';

  const Command = require('cmnd').Command;

  class AddCommand extends Command {
    constructor() {
      super('add');
    }

    help() {
      return {
        description: 'Add new video at [index] to list',
        args: ['index', 'URL'],
        flags: {},
        vflags: {}
      };
    }

    run(options, callback) {
      console.log('adding!', options.args)

      var fs = require('fs');
      var youtubedl = require('youtube-dl');
      var dir = './videos';
      var db = './videos.json';

      if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
      }

      var video = youtubedl(options.args[1], //'http://www.youtube.com/watch?v=90AiXO1pAiA'
        // Optional arguments passed to youtube-dl.
        ['--format=18'],
        // Additional options can be given for calling `child_process.execFile()`.
        { cwd: __dirname }
      );

      video.on('error', function error(err) {
        callback(new Error(err));
      });

      // Will be called when the download starts.
      video.on('info', function(info) {
        console.log('Download started');
        console.log('filename: ' + info.filename);
        console.log('size: ' + info.size);
      });

      video.pipe(fs.createWriteStream(`videos/${options.args[0]}.mp4`));

      var videos;
      if (fs.existsSync(db)){
        videos = JSON.parse(fs.readFileSync(db));
      } else {
        videos = {};
      }

      // replace videos[options.args[0]] = options.args[]

      fs.writeFileSync(db, JSON.stringify(videos));

      video.on('end', function() {
        console.log('finished downloading!');
        callback(null); // To optionally return a result, use: callback(null, result)
      });
    }
  }

  return AddCommand;
})();
