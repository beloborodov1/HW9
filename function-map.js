var arr = [1,2,3,4,5];

var newArr = arr.map(function(num){
    return num * num;
});

console.log(arr, newArr)

console.log('------------------------------');

 function map (arr,callback){
    var newArr = [];
    for(var i = 0; i < arr.length; i ++)    
    newArr [newArr.length] = callback(arr[i])
    return newArr
 }

 
var newAarrMap = map (arr, function(num){
    return num * num    
});

console.log (arr,newAarrMap);