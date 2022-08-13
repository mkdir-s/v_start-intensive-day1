
const arr1 = [1, 7, 4, 8, 3, 4, 5];
const arr2 = [4, 2, 7, 9, 3, 1, 3, 6, 4, 3];

function foo(arr) {
  const newArr = arr.slice(-3);
  for(let i=0; i<newArr.length; i++) {
    newArr[i] = newArr[i]*2;
  }
  return newArr;
}

console.log(foo(arr1)); // [6, 8, 10]
console.log(foo(arr2)); // [12, 8, 6]