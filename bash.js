
var commands = require('./commands');

commands['prompt']();

process.stdin.on('data', function (data) {

  var userInput = data.toString().trim().split(' ');
  var userCommand = userInput[0];
  var args = userInput.slice(1);

  commands[userCommand](args);

  setTimeout(commands['prompt'], 100);
});
