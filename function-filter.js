var arr = [1, 2, 3, 4, 5];

var positiveArr = arr.filter(function(number) {
  return number > 2;
});

console.log( positiveArr );

console.log( '----------------------------');

function arrFilter (arr, cb){
var newArr = [];
for (var i = 0; i < ar.length; i++)
    if (cb(arr[i]))
        newArr[newArr.length] = arr[i];
    return newArr
}

var newAarrFil = arrFilter (arr, function(number){
    return number > 2;
});

console.log(newAarrFil)
