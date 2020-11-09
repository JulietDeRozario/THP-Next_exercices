const computeSquareRoot = (a, x = 1) => {
  let y = (x + a / x) / 2;
  if (x === y) { 
      return x;
  }
  return computeSquareRoot(a, y);   
}

console.log(computeSquareRoot(16));