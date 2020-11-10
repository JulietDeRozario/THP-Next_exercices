const fs = require('fs');

// Bubble sort
const bubbleSort = (array) => {
  let comp = 0;

  for(let i = 0; i < array.length - 1; i ++) {
    for(let j = 0; j < array.length - 1 - i; j ++ ) {
      comp += 1;
      if(array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  console.log(`The bubble sort algo used ${comp} comps.`)

  return array
}

// Insertion sort
const insertionSort = (inputArr) => {
  let comp = 0;
  for (let i = 1; i < inputArr.length; i++) {
      // Choosing the first element in our unsorted subarray
      let current = inputArr[i];
      // The last element of our sorted subarray
      let j = i-1; 
      while ((j > -1) && (current < inputArr[j])) {
        comp += 1;
        inputArr[j+1] = inputArr[j];
        j--;
      }
      inputArr[j+1] = current;
  }
  console.log(`The insertion sort algo used ${comp} comps.`);
  return inputArr;
};

// Selection sort
const selectionSort = (array) => {
  let comp = 0;

  for(let i = 0; i < array.length - 1; i ++){
    let min = i;
    for(let j = i + 1; j < array.length; j ++){
      comp += 1;
      if(array[j] < array[min]){
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
  }
  console.log(`The selection sort algo used ${comp} comps.`)
  return array;
}

// Quick sort
let comp = 0;
const quickSort = (array) => {
  if(array.length === 1) return array;
  const middle = array[array.length - 1];
  const leftArr = [];
  const rightArr = [];

  for(let i = 0; i < array.length - 1; i ++){
    comp += 1;
    array[i] < middle ? leftArr.push(array[i]) : rightArr.push(array[i]);
  }

  if(leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), middle, ...quickSort(rightArr)];
  }else if(leftArr.length > 0){
    return [...quickSort(leftArr), middle];
  }else {
    return [middle, ...quickSort(rightArr)];
  }
}

// Reading file
fs.readFile(process.argv[2], 'utf8', (error, data) => {
  if (error){
    console.error(error.message);
    return;
  }
  let arrayData = data.split(' ').map(Number);
  console.log("list.txt : " + arrayData);

  let copy = arrayData.slice();
  console.log(bubbleSort(copy));
  copy = arrayData.slice();
  console.log(insertionSort(copy));
  copy = arrayData.slice();
  console.log(selectionSort(copy));
  copy = arrayData.slice();
  console.log(quickSort(copy));
  console.log(`The quick sort algo used ${comp} comps.`)

})
