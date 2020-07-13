// objeto

var football = {
                color: 'Blue',
                size: '30cm',
                texture: '',
                pressure: '',
                positionX: 0,
                positionY:0,
                kick: function(x,y){
                  this.positionX=x;
                  this.positionY=y;
                },
                throw: function(x,y){
                  return ;
                },
                inflate: function(){
                  return ;
                },
                deFlate: function(){
                  
                }  
};

// constructor de objeto

var football = new Object();
  football.color = 'Blue';
  football.throw = function(x,y){
                    return ;
  }
  
//Asignar propiedades al objeto
  var color = football.color;
  var size = football.size;
console.log(color);
