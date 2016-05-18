'use strict';

function Car () {
this.manufactured_date = Date.now();
};

//  Make is-a Car
function Make (maker) {
  this.manufacturer = maker;
}
// Set the prototype to Car
Make.prototype = new Car();

//  Chevrolet is-a Make
function Chevrolet (name) {
  this.modelName = name;
}

// Set the prototype to Make with the name of the manufacturer as the argument
Chevrolet.prototype = new Make('GM');

function Camaro (name) {
this.modelName = name;
}
// Set the prototype to appropriate model you created above and set the model name argument
Camaro.prototype = new Chevrolet("Camaro");
var mine = new Camaro();
var yours = new Camaro();
var hers = new Camaro();

function F150 (name){
  this.modelName = name;
}
F150.prototype = new Make('Ford');
console.log('F150', F150);

function Terrain (){
  this.modelName = name;
}
Terrain.prototype = new Make('GMC')
console.log(Terrain);
console.log(Car());
