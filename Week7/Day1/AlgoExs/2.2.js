const computePowerRec = (n, p) => {
  if(p == 1){
    return n;
  }else if( p <= 0){
    return 0;
  }else {
    return n * computePowerRec(n, p-1);
  }
}

console.log(computePowerRec(10, 6));
