var arr = [1, 2, 3, 4, 5]
var arr = [{a:1},{a:2},{a:3},{a:4},{a:5}]

var result = arr.reduce(function(sum, current) {
  return sum + current.a;
}, 0);

console.log( result );

console.log('--------------------------------');

function arrReduce (arr,cb){
var sum = 0;
for (var i = 0; i < arr.length; i++)
    sum += arr[i].a;
return sum;
}
console.log(arrReduce(arr));

// при использование данного метода нет необходимости в callback? я честно так запутался с этим

// var newAarrReduce = arrReduce (arr, function(sum, current){
//     return sum + current;
// }, 0);

// console.log(newAarrReduce);