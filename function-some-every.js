var arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

console.log( arr.every(isPositive) ); // false, не все положительные
console.log( arr.some(isPositive) ); // true, есть хоть одно положительное


console.log ('--------------------------------');

function arrEvery (arr, cb){
  for (var i = 0; i < arr.length; i++)
    if (!cb(arr[i]))
      return false;   
  return true;
}

var newAarrEvery = arrEvery (arr, function(number){
  return number > 0;
});
console.log(newAarrEvery);


function arrSome (arr, cb){
  for (var i = 0; i < arr.length; i++)
    if (cb(arr[i]))
      return true;   
  return false;
}

var newAarrSome = arrSome (arr, function(number){
  return number > 0;
});
console.log(newAarrSome);