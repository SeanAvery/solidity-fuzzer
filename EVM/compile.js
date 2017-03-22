import Promise from 'bluebird';
import Eth from 'ethjs';

const fs = Promise.promisifyAll(require('fs'));

export function compile() {
  return new Promise((resolve, reject) => {
    Promise.resolve(getContractFiles())
    .map((file) => {
      getContracts(file);
    }).then(() => {
      
    })
  })
}

export function getContractFiles() {
  return new Promise((resolve, reject) => {
    let files = [];
    console.log('cwd', process.cwd());
    fs.readdirAsync(`${process.cwd()}/EVM/contracts`)
    .map((file) => {
      files.push(file)
    }).then(() => {
      resolve(files);
    }).catch((error) => {
      reject(error);
    })
  })
}

export function getContracts(file) {
  return new Promise((resolve, reject) => {
    fs.readFileAsync(`${process.cwd()}/contracts/${file}`, 'utf8')
    .then((data) => {
      console.log('data', data);
    })
  })
}

compile();
