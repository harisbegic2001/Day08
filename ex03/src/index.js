//Write code below this line
var myGlobalVariable = 10;
function function1() {
  notGlobalVariable = 5;
}

function1();
function2();
//Write code above this line
function function2() {
  var result = "";
  if (typeof myGlobalVariable != "undefined") {
    result += "myGlobalVariable: " + myGlobalVariable;
  }
  if (typeof notGlobalVariable != "undefined") {
    result += " notGlobalVariable: " + notGlobalVariable;
  }
  console.log(result);
}

module.exports = {
  function1,
  function2,
};
