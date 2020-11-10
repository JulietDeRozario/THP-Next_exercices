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

// Merge Sort Implentation (Recursion)
const mergeSort  = (unsortedArray) => {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

// Merge the two arrays: left and right
const merge = (left, right) => {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    comp += 1;

    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// Heap sort
const heapSort = (arr) => {
  let len = arr.length, end = len-1;

  heapify(arr, len);
  
  while(end > 0){
    swap(arr, end--, 0);
    siftDown(arr, 0, end);
  }
  return arr;
}


const heapify = (arr, len) => {
   // break the array into root + two sides, to create tree (heap)
  let mid = Math.floor((len-2)/2);
  while(mid >= 0){
    siftDown(arr, mid--, len-1);    
  }
}

const siftDown = (arr, start, end) => {
  let root = start,
      child = root*2 + 1,
      toSwap = root;
  while(child <= end){
      comp += 1;
      if(arr[toSwap] < arr[child]){
        swap(arr, toSwap, child);
      }
      if(child+1 <= end && arr[toSwap] < arr[child+1]){
        swap(arr, toSwap, child+1)
      }
      if(toSwap != root){
        swap(arr, root, toSwap);
        root = toSwap;
      }
      else{
        return; 
      }
      toSwap = root;
      child = root*2+1
  }
}

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Shell sort
const shellSort = (arr) => {
  let increment = arr.length / 2;
  while (increment > 0) {
    for (i = increment; i < arr.length; i++) {
      let j = i;
      let temp = arr[i];

      while (j >= increment && arr[j-increment] > temp) {
        comp += 1;
        arr[j] = arr[j-increment];
        j = j - increment;
      }

      arr[j] = temp;
    }
  
    if (increment == 2) {
      increment = 1;
    } else {
      increment = parseInt(increment*5 / 11);
    }
  }
return arr;
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
  console.log("___________________________");
  console.log(insertionSort(copy));
  copy = arrayData.slice();
  console.log("___________________________");
  console.log(selectionSort(copy));
  copy = arrayData.slice();
  console.log("___________________________");
  console.log(quickSort(copy));
  console.log(`The quick sort algo used ${comp} comps.`);
  copy = arrayData.slice();
  console.log("___________________________");
  comp = 0;
  console.log(mergeSort(copy));
  console.log(`The merge sort algo used ${comp} comps.`);
  console.log("___________________________");
  copy = arrayData.slice();
  comp = 0;
  console.log(heapSort(copy));
  console.log(`The heap sort algo used ${comp} comps.`);
  console.log("___________________________");
  copy = arrayData.slice();
  comp = 0;
  console.log(shellSort(copy));
  console.log(`The shell sort algo used ${comp} comps.`);
})
