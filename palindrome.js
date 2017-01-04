function isPalindrome(str){
  newStr = [];
  for(var i = 0; i<str.length; i++){
    if(str[i] !== ' '){
      newStr.push(str[i])
    };
  };
  reverseNewStr = [];
  for(var i = newStr.length - 1; i >= 0; i--){
    reverseNewStr.push(newStr[i]);
  };
  // console.log(reverseNewStr);
  if (newStr.join() === reverseNewStr.join()){
    console.log(true);
    return true
  } else {
    console.log(false);
    return false
  }
}


module.exports = {
  isPalindrome: isPalindrome
}
