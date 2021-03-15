//Only change code below this line
var sum = 0;
function addThree() {
  sum = sum + 3;
  console.log(sum);
}

function addFive() {
  sum = sum + 5;
  console.log(sum);
}
addFive();
addThree();

//Only change code above this line
module.exports = {
  addThree,
  addFive,
};
