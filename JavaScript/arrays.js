// Array

var namesFirst = ['James', 'John', 'Michael'];


// constructor array 

var namesSecond = new Array('James','John', 'Michael');
var stringArray = new Array();
stringArray[0] = "one";
stringArray[1] = "two";
stringArray[2] = "three";
stringArray[3] = "four";

//accesar a los elementos del array

var name1 = namesFirst[0];
var name2 = namesFirst[1];
var name3 = namesFirst[2];

console.log(name1);
console.log(name2);
console.log(name3);

// Propiedades del array

var arrayLength = namesFirst.length;

console.log(arrayLength);
//metodos de los arrays
//push
namesFirst.push('Chris');
console.log(namesFirst);
//pop
namesFirst.pop();
console.log(namesFirst);
//join
var result = namesFirst.join('0'); // 0 is the separator
console.log(result);
//splice
var nameArray = namesFirst.splice(1,1,'jane','Amanda','Andrea');
console.log(namesFirst);
//filter
var result = namesFirst.filter(name => name.length > 4);
console.log(result);
//every -> true si todos los elementos satisfacen la acción
function isUnderAge(age){
    return age < 18;
  }
  
  var ageArray = [10,14,8,20,34,15];
  
  console.log(ageArray.every(isUnderAge));

  //foreach

var numberArray = [2,5,7,10];

var multiplyResult = [];

numberArray.forEach(function(element){
  var result = element *2;
  multiplyResult.push(result);
});

console.log(multiplyResult);