/* jshint esversion: 6 */

function findWord(number) {
  const dividedBy3 = Math.floor(number/3);
  const dividedBy5 = Math.floor(number/5);
  const common = Math.floor(number / 15);

  return  number - (dividedBy3+dividedBy5-2*common);
}

console.log(findWord(20));
