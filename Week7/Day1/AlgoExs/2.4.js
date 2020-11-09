const primaryNumber = (num, x=2) => {
  if(x === num) return true;
  if(!Number.isInteger(num/x)) {
    return primaryNumber(num, x+1);
  } else {
    return false
  }
}

console.log(primaryNumber(47));