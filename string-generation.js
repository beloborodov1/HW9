function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function randomString (stringLength,ABC){
    var currentABC = ABC || 'abcdefghijklmnopqrstuvwxyz';
    var temp = '';

    for (var i = 0; i < stringLength; i++)
        temp += currentABC[random (0,currentABC.length - 1)];
    
    return temp;
}

function generationWords(wordsLength,minCharsAmount,maxCharAmount,ABC){
    var min = minCharsAmount || 1,
        max = maxCharAmount || min + 9,
        currentABC = ABC || 'abcdefghijklmnopqrstuvwxyz',
        obj = {};

    for (var i = 0; i < wordsLength; i++){
        var chars = random(min, max);
        console.log (chars)
        var temp = randomString(chars,currentABC);
        var createdArray = [temp];
        obj[chars] = obj[chars] ? obj [chars].concat(createdArray) : createdArray;
    }

    for (key in obj)
        console.log(obj[key].length + ' word(s) of ' + key + 'characters');

return obj;
}


console.log(generationWords(
    parseInt(prompt ('Pls input wordsLength')),
    parseInt(prompt ('Pls input minCharsAmount')),
    parseInt(prompt ('Pls input maxCharAmount'),)))