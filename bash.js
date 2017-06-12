process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if (cmd === "pwd") pwd();
  if (cmd === "date") date();

  process.stdout.write('prompt > ');
});

var pwd = function() {
  console.log(process.cwd(), "testpwd")
}

var date = function() {
  console.log(Date())
}
