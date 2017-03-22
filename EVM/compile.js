import Promise from 'bluebird';
import Eth from 'ethjs';
import fs from 'fs';

export function compile() {

}

export function getContractFiles() {
  return new Promise((resolve, reject) => {
    let files = [];
    fs.readdir('./contracts')
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

export function
