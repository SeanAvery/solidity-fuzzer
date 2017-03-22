import Promise from 'bluebird';
import Eth from 'ethjs';
import solc from 'solc';

const fs = Promise.promisifyAll(require('fs'));

export let sources = [];

export function compile() {
  return new Promise((resolve, reject) => {
    Promise.resolve(getContractFiles())
    .map((file) => {
       return getContractData(file);
    }).then(() => {
      solcCompile();
    }).catch((error) => {
      reject(error);
    })
  });
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
    });
  });
}

export function getContractData(file) {
  return new Promise((resolve, reject) => {
    fs.readFileAsync(`${process.cwd()}/EVM/contracts/${file}`, 'utf8')
    .then((data) => {
      // console.log('data', data);
      sources.push(data.toString());
      // console.log('sources 1 ', sources)
      resolve(data);
    }).catch((error) => {
      reject(error);
    });
  });
}

export function solcCompile() {
  console.log('sources', sources)
  sources.forEach((code) => {
    console.log('code');
  })

}

compile();
