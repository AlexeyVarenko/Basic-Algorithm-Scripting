/*Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.*/


function titleCase(str) {
    let result=str.toLowerCase().split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
    return result;
  }
  
  titleCase("I'm a little tea pot");