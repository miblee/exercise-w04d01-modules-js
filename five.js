function five(){
  return '5'
}

five.upHigh = function(){
  console.log('⁵')
}

five.downLow = function(){
  console.log('₅')
}

five.tooSlow = function(){
  function slow(){
    console.log(5)
  };
  setTimeout(slow, 500);
}

five.roman = function(){
  console.log('V')
}

five.morseCode = function(){
  console.log('.....')
}

five.negative = function(){
  console.log('-5')
}


five.loud = function(){
  console.log('FIVE')
}

five.smooth = function(){
  console.log('S')
}

module.exports = five;

// module.exports = {
//   upHigh: upHigh,
//   downLow: downLow,
//   tooSlow: tooSlow,
//   roman: roman,
//   morseCode: morseCode,
//   negative: negative,
//   loud: loud,
//   smooth: smooth
// }
