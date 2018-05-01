const Promise = require("bluebird").Promise;
let store;

module.exports = {
  init: storage => (store = storage),

  get: () =>
    new Promise((resolve, reject) =>
      store.get((err, data) => {
        if (err) return reject(err);
        resolve(data || {});
      })
    ),

  set: data =>
    new Promise((resolve, reject) =>
      store.set(data, { force: 1 }, err => {
        if (err) return reject(err);
        resolve();
      })
    )
};
