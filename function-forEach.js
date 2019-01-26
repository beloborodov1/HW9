function fEach (arr, callback){

    for (var i = 0; i < arr.length; i++){
    if (callback){
    callback(arr[i], i, arr);}
    }    
}

fEach ([1,2,3,4,5], function (num,index,arr){console.log( num, index,arr);});

console.log('------------------------------');

var arr = [1,2,3,4,5];
arr.forEach(function(num, i, arr) {
    console.log( num, i, arr);
  });
