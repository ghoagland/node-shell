
var fs = require('fs');

module.exports = {

  prompt: function(filenames) {
    process.stdout.write('prompt > ');
  },

  pwd: function(filenames) {
    console.log(process.cwd())
  },

  date: function(filenames) {
    console.log(Date())
  },

  ls: function(filenames) {
    fs.readdir('.', function(err, files){
      if (err) throw err;
      files.forEach(function(file){
        process.stdout.write(file.toString() + '\n');
      })
    })
  },

  echo: function(filenames){
    process.stdout.write(filenames.join(' ') + '\n')
  },

  cat: function(filenames) { //assuming 1 argument for now
    fs.readFile((filenames[0]), function(err, file) {
      if (err) throw err;
      process.stdout.write(file);
    })
  },


}


