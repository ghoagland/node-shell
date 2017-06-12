
var fs = require('fs');

module.exports = {

  prompt: function() {
    process.stdout.write('prompt > ');
  },

  pwd: function() {
    console.log(process.cwd())
  },

  date: function() {
    console.log(Date())
  },

  ls: function() {
    fs.readdir('.', function(err, files){
      if (err) throw err;
      files.forEach(function(file){
        process.stdout.write(file.toString() + '\n');
      })
    })
  },

  echo: function(arr){
    process.stdout.write(arr.join(' ') + '\n')
  }

}


