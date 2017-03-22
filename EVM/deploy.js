import Promise from 'bluebird';
import Eth from 'ethjs';
import fs from 'fs';

let HttpProvider;
let eth;

export function deploy() {
  return new Promise((resolve, reject) => {
    Promise.resolve(web3Provider())
    .then(() => {

    }).catch((error) => {
      reject(error);
    });
  });
}

export function web3Provider() {
  return new Promise((resolve, reject) => {
    Promise.delay(0)
    .then(() => {
      eth = new Eth(new Eth.HttpProvider('http://localhost:8545'));
      console.log('eth', eth);
    }).catch((error) => {
      reject(error);
    })
  });
}

deploy();
