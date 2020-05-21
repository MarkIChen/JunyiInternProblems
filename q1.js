/* jshint esversion: 6 */

function reverseA(input) {
  var ans = "";

  for(char of input) {
    ans = char + ans;
  }

  return ans;
}

function reverseB(input) {
  let stringArr = input.split(' ');
  let ans = "";

  for(let i = 0;i < stringArr.length; i++) {
    ans += (reverseA(stringArr[i]) + " ");
  }
  return ans;
}

console.log(reverseA('junyiacademy'));

console.log(reverseB('flipped class room is important'));
