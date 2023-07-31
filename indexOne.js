const fileSystem = require('fs');

fileSystem.writeFile(
  'demoOne.txt',
  'this is file system modified',
  function (error) {
    if (error) {
      console.log('failed written');
      console.log(error);
    } else {
      console.log('written is successful');
    }
  }
);
