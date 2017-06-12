
var commands = require('./commands');

commands['prompt']();

process.stdin.on('data', function (data) {

  var userCommand = data.toString().trim().split(' ');
  commands[userCommand[0]](userCommand.slice(1));

  setTimeout(commands['prompt'], 0);
});




