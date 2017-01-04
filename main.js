// require things here

var random = require('./random.js');
console.log( random(10) ) // returns random number between 0 and 10


var geometry = require('./geometry.js');
console.log(geometry.area(4, 5)) // returns 20

var eightball = require('./eightball.js');
console.log(eightball.shake()) // yes || no || maybe

var palindrome = require('./palindrome.js');
palindrome.isPalindrome('hello') // false
palindrome.isPalindrome('racecar') // true
palindrome.isPalindrome('a man a plan a canal panama') // true

var pig = require ('./piglatin.js');
pig.toPig('hello world') // 'ellohay orldway'
pig.fromPig('ellohay orldway') // 'hello world'

var five = require('./five.js');
five(); // 5
five.upHigh() // ⁵
five.downLow() // ₅
five.tooSlow() // 5, with a ~500 millisecond delay
five.roman() // V
five.morseCode() // .....
five.negative() // -5
five.loud() // FIVE
five.smooth() // S
