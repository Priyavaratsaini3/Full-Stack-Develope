
arr = [4,5,6]
arr.copyWithin(0,1,2);
const arr2 = arr.slice().copyWithin(0,1,2);
const arr3 = [...arr].copyWithin(0,1,2);
console.log(arr);
console.log(arr2);
