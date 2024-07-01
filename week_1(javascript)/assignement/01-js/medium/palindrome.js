/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();


  str=str.replace(/[^a-z]/g,'');
  let n = str.length;
  

  for(let i=0;i<n;i++)
  {
    if(str[i]!==str[n-1-i])
    {
      return false;
    }
  }



  
  return true;
}

module.exports = isPalindrome;
