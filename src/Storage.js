const Promise = require('bluebird').Promise;
let store;

module.exports = {
  init: (storage) =>
    store = storage,

  getStoredData: () =>
    new Promise((resolve, reject) =>
      store.get((err, data) => {
        if (err) return reject(err);
        resolve(data || {});
      })
  ),

  storeData: (data) =>
    new Promise((resolve, reject) =>
      store.set(data, {force: 1}, err => {
        if (err) return reject(err);
        resolve();
      })
  )
};