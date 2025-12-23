/* let some = (a, b) => a + b ;

console.log(some(12, 50)) */

/* let person = {
  greet() {
    console.log("Hello!");
  }
};

let student = Object.create(person); // 👈 on crée un nouvel objet basé sur person
student.name = "Moussa";

student.greet(); // Hello!





function Person(name) {
  this.name = name;
}

// On ajoute une méthode au prototype de Person
Person.prototype.greet = function() {
  console.log("Hi, I'm " + this.name);
};

// On crée deux objets à partir de Person
let p1 = new Person("Moussa");
let p2 = new Person("Aicha");

p1.greet(); // Hi, I'm Moussa
p2.greet(); // Hi, I'm Aicha



console.log(p1.__proto__ === Person.prototype); // true
console.log(p2.__proto__ === Person.prototype); */ // true


/* function Car(make, model) {
    //constructeur 
    this.make = make;
    this.model = model;
}

//Ajout de methode 
Car.prototype.start = function() {
    console.log(`${this.make}, ${this.model} starts`)
}


let car1 = new Car(2020, "toyota");
let car2 = new Car(2023, "changane");

car1.start()
car2.start()

//verifier le lien du prototype
console.log(car1.__proto__ === Car.prototype);
console.log(Car.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null)


function ElectricCar(make, model, battery) {
    Car.call(this, make, model)
    this.battery = battery;
}

ElectricCar.prototype = Object.create(Car.prototype);//heriete des methodes de car
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.charge = function(){
    console.log(`${this.make} ${this.model} is charging`)
}; */

//let ElectricCar = Car.create





/* function ElectricCar(make, model, battery) {
  Car.call(this, make, model); // hérite des propriétés de Car
  this.battery = battery;
}

ElectricCar.prototype = Object.create(Car.prototype); // hérite des méthodes de Car
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.charge = function() {
  console.log(`${this.make} ${this.model} is charging...`);
};

let tesla = new ElectricCar("Tesla", "Model 3", "100kWh");
tesla.start();  // Tesla Model 3 starts...
tesla.charge(); // Tesla Model 3 is charging...
 */



/* let Figure = function(){
    this.getType = function() {
        return this.type ? this.type : "unknown";
    }
};
let figure = new Figure;

let Circle = function(center, radius){
    this.type = "circle";
    this.center = center;
    this.radius = radius;
};
Circle.prototype = figure;

let circle1 = new Circle({x:0, y:0}, 10);
let circle2 = new Circle({x:100, y:100}, 100);


let Triangle = function(v1, v2, v3) {
    this.type = "triangle";
    this.vertices = [ v1, v2, v3];
};
Triangle.prototype = figure;

let triangle1 = new Triangle({x:0, y:0}, {x:50, y:50}, {x:10, y:100});

console.log(circle1.getType());
console.log(triangle1.getType()); */


/* let paints = [
  { title: 'Mona Lisa', artist: 'Leonardo da Vinci', date: 1503 },
  { title: 'The Last Supper', artist: 'Leonardo da Vinci', date: 1495 },
  { title: 'Starry Night', artist: 'Vincent van Gogh', date: 1889 },
  { title: 'The Scream', artist: 'Edvard Munch', date: 1893 },
  { title: 'Guernica', artist: 'Pablo Picasso', date: 1937 },
  { title: 'The Kiss', artist: 'Gustav Klimt', date: 1907 },
  { title: 'Girl With a Pearl Earring', artist: 'Johannes Vermeer', date: 1665 },
  { title: 'The Birth of Venus', artist: 'Sandro Botticelli', date: 1485 },
  { title: 'Las Meninas', artist: 'Diego Velázquez', date: 1656 },
  { title: 'The Creation of Adam', artist: 'Michelangelo', date: 1512 }
];

paints.forEach(element => {
  console.log(`${element.title}, ${element.artist}, ${element.date}`);
}); */


const img1 = new Image("Mona Lisa", "Leonardo da Vinci", 1503);
console.log(img1);
