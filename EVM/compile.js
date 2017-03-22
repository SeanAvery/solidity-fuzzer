import Promise from 'bluebird';
import Eth from 'ethjs';
import fs from 'fs';

Promise.delay(0)
.then(() => {
  return getContractFiles();
}).map((file) => {
  console.log('file');
}).catch((error) => {
  console.log(error);
})

// utility functions

function getContractFiles() {
  return new Promise((resolve, reject) => {
    let files = [];
    fs.readdir('./contracts')
    .map((file) => {
      console.log(file);
      files.push(file)
    })
  })
}
