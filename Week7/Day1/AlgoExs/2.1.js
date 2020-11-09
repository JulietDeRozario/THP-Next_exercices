const factorialize = (num) => {
  if(num < 0){
    return -1;
  }else if(num == 0){ 
    return 1;
  }else {
    return (num * factorialize(num - 1));
  }
}

let num = prompt("Quel nombre veux-tu factoriser ?");
console.log("résultat: " + factorialize(num));