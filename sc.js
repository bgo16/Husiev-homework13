const myArr = [1, 2, 3, true, 3, 5, false, '', 'adaf', 7, null, undefined];

console.log(mid(myArr));

function mid(arr) {
  let count = 0;
  let allNumPlus = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      allNumPlus += arr[i];
      count += 1;
    } else 0;
  }
  return allNumPlus / count;
}

const a = prompt();
const znak = prompt('znak');
const y = prompt();

function doMath(a, znak, y) {
  return eval(a + znak + y);
}

console.log(doMath(a, znak, y));

console.log(createArr(2, 3));

function createArr(l, l2) {
  const arr = Array(l)
    .fill()
    .map(() => Array(l2));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = prompt();
    }
  }
  return arr;
}

const str = prompt();
const char1 = prompt();
const char2 = prompt();

function removeChar(str, char1, char2) {
  const re = new RegExp(`[${char1}${char2}]`, 'g');
  return str.replace(re, '');
}

console.log(removeChar(str, char1, char2));
