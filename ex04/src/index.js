//Only change code below this line
function localScope(){
    var myVariable = "I am here!"
    console.log(myVariable)
}

//Only change code above this line
// myVariable is not defined outside of localScope
if(typeof myVariable != "undefined"){
    console.log('outside localScope', myVariable)
}
else{
    console.log('outside localscope UNDEFINED!!!')
}
localScope();
module.exports = localScope;
