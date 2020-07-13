var a = 12;
var b = 8;

function addTwoValues(a,b){
  var result = a + b;
  return result
}
var mySubstraction= function(a,b){
  var result = a-b;
  return result;
}

//llamar funcion
var myResult = addTwoValues(a,b);
var resultSub= mySubstraction(a,b);

console.log(myResult);
console.log(resultSub);