async function start() {
  return Promise.resolve('async is working');
}

const unused = 42;

start().then(console.log);

class Util {
  static id = Date.now();
}

console.log('util id:', Util.id);
console.log(unused);

import('lodash').then((_) => {
  console.log('lodash', _.random(0, 42, true));
});
