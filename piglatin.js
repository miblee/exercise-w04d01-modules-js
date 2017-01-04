function toPig(str){
  var newStr = str.split(' ');
  var pigStr = []
  newStr.forEach(function(word){
    var word = word.slice(1,word.length) + word[0]+'ay';
    pigStr.push(word)
  })
  console.log(pigStr.join(' '))
}

function fromPig(str){
  var newStr = str.split(' ');
  var regStr = []
  newStr.forEach(function(word){
    var word = word[word.length-3] + word.slice(0,word.length-3);
    regStr.push(word)
  });
  console.log(regStr.join(' '))
}

module.exports = {
  toPig: toPig,
  fromPig: fromPig
}
