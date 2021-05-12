function Primes(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
for(let primes = 1; primes < 100/*Change this number*/; primes++) {
isPrime(primes)
if(isPrime(primes) === true) {
  console.log(primes + " is prime")
}
}
