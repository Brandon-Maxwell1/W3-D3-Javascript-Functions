/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (x, y) => {
  if(x > y){
    return (x)
  }
    else if(y > x){
      return (y); 
    }
      else { 
       return ('Thanks Lane')
      }
    
  }
  console.log(maxOfTwoNumbers(10, 10));



/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (x, y, z) => {
  if(x > y && x > z){
    return (x)
  }
    else if(y > x && y > z){
      return (y); 
    }
    else if(z > x && z > y){
      return (z); 
    }
      else { 
       return ('Thanks Omar')
      }
    
  }
  console.log(maxOfThree(10, 10, 11));

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/

isCharacterAVowel = (ifVowel) => {
  if(ifVowel === 'a'|| ifVowel === 'A'){
    return true
  }
  else if(ifVowel === 'e' || ifVowel=== 'E'){
    return true
  }
  else if(ifVowel === 'i' || ifVowel=== 'I'){
    return true
  }
  else if(ifVowel === 'o' || ifVowel=== 'O'){
    return true
  }
  else if(ifVowel === 'u' || ifVowel=== 'U'){
    return true
  }
  else{
    return false
  }
  
};
console.log(isCharacterAVowel("L"));

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. 
For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

sumArray = (arr) => {
  let total = 0;
  for(let i=0; i<arr.length; i++){
total += arr[i];
  }
return total;
};
console.log(sumArray([1,2,3,4]))

multiArray = (multi) => {
  let total = 1;
  for(let i=0; i<multi.length; i++){
total += multi[i];
  }
return total;
};
console.log(multiArray([1,2,3,4]))



/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
numArguments=(a,b) =>{
  return (numArguments.length)

}
console.log('we argue over ' + numArguments([1,2,3,4], 5));



/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (str) => {
 let string = "";
 for(let i=str.length-1; i >=0; i--)
 {
   string += str[i]}
 return string
};
console.log(reverseString('Friday'));



/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (array) => {
  let wordLength = 0;
 for (let i=0; i<array.length; i++){
   if(array[i].length>wordLength)
   wordLength=array[i].length
 }
return wordLength;
};
console.log(findLongestWord(['house', 'red', 'catepillar']))


/*
8. Write a function filterLongWords that takes an array of words and a 
number i and returns the array of words that are longer than 
i characters long.
*/
filterLongWords = (array, x) => {
  let longArray=[]
for(let i=0; i<array.length; i++){
  if(array[i].length>x)
  longArray.push(array[i]);
}
return longArray
};
console.log(filterLongWords(['Remember', 'Forget', 'Retainer', 'Duplicate'],7))
