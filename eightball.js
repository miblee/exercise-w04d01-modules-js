var random = require('./random.js');

function shake(){
  var answers = [null, 'yes', 'no', 'maybe', 'ask me later'];
  var idx = random(4);
  console.log(idx)
  console.log(answers[idx]);
}


module.exports = {
  shake: shake
}
