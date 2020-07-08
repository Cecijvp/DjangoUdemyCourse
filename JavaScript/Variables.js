
//Declaración de variable

var age;
var dateOfBirth;
age = 15;
console.log(age);

var myScope= 'This is my global scope';
var myScopeTest= function(){
  var myScope= 'This is my local variable';
  console.log(myScope);
}
myScopeTest();