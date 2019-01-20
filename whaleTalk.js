//Need to change to a web version and create a prompt box for words or sentences to be translated to whale

let input = 'Turpentine and turtles';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultsArray = [];
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
 for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
   if (input[inputIndex] === vowels[vowelsIndex]) {
     resultsArray.push(input[inputIndex]);
   }
 }

  if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
    resultsArray.push(input[inputIndex]);
    }
}

console.log(resultsArray.join('').toUpperCase());
