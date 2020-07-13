
//Creando una promesa
var isGoodWeather = false;

//promesa

var bookDelivery = new Promise(
  function (resolve,reject){
    if(isGoodWeather){
      var book = {
          title: 'Animal Farm',
          author: 'Oliver Twist'
      };
      resolve(book); //se cumplio promesa
    }else{
      var reason = new Error('The weather is very bad, book not delivered');
      reject(reason); // no se cumplio
    }
  }

);

// consuming promise

var checkBookStatus = function(){
  bookDelivery
    .then(function(fulfilled){
                    // log report if book is delivered
                    console.log(fulfilled);
                    })
                    .catch(function(error){
                        console.log(error.message);
                    });
};

checkBookStatus();
