const mathCatMarks = [22, 23, 17, 25, "22", 25, 18, 23, 23, 17, 19,17,22,"23","24"];

const newList = new Set(mathCatMarks); // create an array/set of unique elements

console.log(newList);
console.log(newList.has(27));
newList.add(22);
console.log(newList);

// Write a function aggregateScores(scoreArray) that takes an array of mixed data types (e.g., [10, "10", 20]). Use a Set to track unique stringified versions of the scores. Return an object where the keys are the scores and the values are how many times each appeared. {"22": 4, "17":2,"23":3} {"22":1}

function aggregateScores(scoreArray) {
  const uniqueScores = new Set();
  let output = {};
  for (let index = 0; index < scoreArray.length; index++) {
    let currentScore = scoreArray[index];
    if (typeof currentScore == "number") {
      currentScore = currentScore.toString();
    }
    uniqueScores.add(currentScore);
    // console.log(Object.keys(output).includes(currentScore));
    if (Object.keys(output).includes(currentScore)) {
      output[currentScore] = output[currentScore] + 1;
    } else {
      output[currentScore] = 1;
    }
  }
  return output;
}

console.log(aggregateScores(mathCatMarks));
// codility , hackerrank, 