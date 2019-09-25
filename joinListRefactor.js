const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

const joinList = function (array) {
  let output = "";
  for (let i = 0; i < array.length; i++) {
    output += ((array[i]) + ", ");
  }
  return output.slice(0, -2);
};

// Test
console.log(`Today I learned about ${joinList(conceptList)}.`);