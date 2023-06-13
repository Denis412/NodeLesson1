const isPrime = require("./helpers/isPrime");

const M = 1;
const N = 100;

for (let i = M; i <= N; i++) if (isPrime(i)) console.log(i);
