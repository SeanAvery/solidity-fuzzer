import Promise from 'bluebird';
import Eth from 'ethjs';

const fs = Promise.promisifyAll(require('fs'));
export function compile() {
  return new Promise((resolve, reject) => {
    Promise.resolve(getContractFiles())
    .map((file) => {
      console.log('file', file);
    })
  })
}

export function getContractFiles() {
  return new Promise((resolve, reject) => {
    let files = [];
    Promise.resolve(fs.readdir('/contracts'))
    .map((file) => {
      console.log(file);
      files.push(file)
    }).then(() => {
      resolve(files);
    }).catch((error) => {
      reject(error);
    })
  })
}

export function getContracts() {

}

compile();
