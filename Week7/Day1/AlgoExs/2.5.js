const findSupPrime = (num, x=2) => {
  if(x === num) {
    return num;
  }
  if(!Number.isInteger(num/x)) {
    return findSupPrime(num, x+1);
  } else {
    return findSupPrime(num + 1, 2)
  }
}

console.log(findSupPrime(20));