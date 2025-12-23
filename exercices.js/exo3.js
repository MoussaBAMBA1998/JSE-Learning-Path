/* function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

let images= {
    list :[],
    
    //verifie si une image existe deja
    contains(title) {
        return this.list.some(img => img.title === title)
    },

    //add new image
    add(title, artist, date){
        if (!this.contains(title)){
            let newImage = new Image(title, artist, date)
            this.list.push(newImage);
        }else{
            console.log(`${title} is already in the list`);
        }
    },

    //display all images
    show(){
        if (this.list.length === 0){
            console.log(`No images yet`)
        }else{
            this.list.forEach(img => {
                console.log(`${img.title}, ${img.artist} , ${img.date}`)
            })
        }
    },

    clear(){
        this.list = [];
        console.log("All images have been removed.")
    }
}



images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503); // déjà existante

images.show();

images.clear();
images.show(); */



/* const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

console.log(target == source) */


//Question 10
/* let point = {
    x: 100,
    y: 100
}
//Insert line of code here.
point.show = function() {console.log(`${this.x}
    ${this.y}
`)}
point.show(); */

//Question 11
/* let point ={
    x: 100,
    y: 200,
    // Insert line of code here 
    get position() {return `${this.x} ${this.y}` ;}
}
console.log(point.position); */

/* let Point = function(x, y) {
    this.x = x;
    this.y = y;
}

let point = new Point(1, 2)

console.log(`${point.x} ${point.y}`)


point.y = 200; point.color = 'red'; */

/* let user = {
    name : "Ian",
    age: 44
} */


/* function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date
}

let images ={
    list : [],

    contains (title) {
        return this.list.some(img => img.title === title) 
    },

    add(title, artist, date){
        if(!this.contains(title)){
            let newImage = new Image(title, artist, date);
            this.list.push(newImage) ;
        }else{
            console.log(`${title} , is already in the list`)
        }
    },

    show(){
        if(this.list.length === 0){
            console.log("no images yet")
        }else{
            this.list.forEach(img => {
            console.log(`${img.title}, ${img.artist},${img.date}`)
        })
        }
    },

    clear(){
        this.list = [ ];
        console.log("all the images have been removed")
    }
}


images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503); // déjà existante

images.show();

images.clear();
images.show(); */




/* let car = {
    make: 'Dodge',
    model: 'Viper',

}

Object.preventExtensions(car)
delete car.model;
car.make = 'toyota';
car.color = 'red';
//car.model = 'Viper'
console.log(`${car.make}  ${car.model}  ${car.color}`); */


/* let user = {
    name: "Ian",
    age: 44
}

Object.keys(user).forEach(key => {
    console.log(user[key])
}) */


/* for (let i in user){
    console.log(`${i} , ${user[i]}`)
} */




  /*   let point = {
        x: 100,
        y: 200,
        //positionX: this.x = x
        set positionX(x) {this.x = x}
    }

    point.positionX = 0;
    console.log(point.x); */

   /*  let car = {
        make: 'Dodge',
        model:'viper'
    }

    delete car.model;
    car.make = 'Toyota';
    car.color = 'red';
    console.log(`${car.make}  ${car.model}  ${car.color}`) */


    // let getCar = function(make, model) {
    //     return (make, model)
    //}

   /*  let car = getCar('Dodge', 'Viper')
    console.log(`${car.make}  ${car.model}`) */




  /*   let key = 'x';
    let point = {
        x: 100,
        y: 200
    }

console.log(point[key]) */

//number 12
// let point ={
//     x: 100,
//     y: 100,
//     show : function() {console.log(`${this.x} ${this.y}`)}
//     //point.show = function(this) {console.log(`${this.x} ${this.y}`)}
// }
// point.show(); 

//number 19
/* let Point = function (x,y){
    this.x = x
    this.y = y
}
let point = new Point(0 , 0)
let ColorPoint = function(color){
    this.color = color
}

//cpoint = point.prototype;
//cpoint.prototype = point;
//ColorPoint.protoytpe = point;
ColorPoint.prototype = Point;

let cpoint = new ColorPoint('red');
console.log(cpoint.x);
 */

/* class Vehicle {

constructor({id, latitude, longitude}){
    this.id = id;
this.status = "unavailable";
    this.setPosition({latitude, longitude});
};

setPosition({latitude, longitude}) {
    this.time = Date.now();
    this.longitude = longitude;
    this.latitude = latitude;
};

getPosition() {
    return {
        latitude: this.latitude,
        longitude: this.longitude
    };
};
};

let vehicle = new Vehicle( 18213423, 59367628 , "AL1024");
vehicle.setPosition({longitude: 18.193121, latitude: 59.378654});
console.log(vehicle.getPosition()); */




/* let AlmostEmptyClass = class {
    constructor(sth) {
        console.log(sth);
    };

    sayHi () {
        console.log("Hi !")
    };
};

let almostEmptyObject = new AlmostEmptyClass(120);
almostEmptyObject.sayHi(); 

console.log(almostEmptyObject instanceof Object); // -> true
console.log(almostEmptyObject instanceof String); // -> false
let str = new String("test me");
console.log(str instanceof String); // -> true */



/* class Car {
  brand = "Toyota"; // propriété définie en dehors d'une méthode
  year = 2020;

  constructor(color) {
    this.color = color; 
  }
}

let c = new Car("Red");
console.log(c.brand, c.year , c.color); */ // "Toyota"


/* class Vehicle {

status = "unavailable";
#longitude;
#latitude;

constructor({id, latitude, longitude}){
    this.id = id;
    this.setPosition({latitude, longitude});
};

setPosition({latitude, longitude}) {
    this.time = Date.now();
    this.#longitude = longitude;
    this.#latitude = latitude;
};

getPosition() {
    return {
        latitude: this.#latitude,
        longitude: this.#longitude
    };
};
};

let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
console.log(vehicle.getPosition());
//console.log(vehicle.#longitude); // error
 */


/* class Vehicule {

    status = "unvailable";
    #longitude;
    #latitude;

    constructor({id, latitude, longitude}){
        this.id = id;
        this.setPosition({latitude, longitude});
    };
    setPosition({latitude, longitude}){
        this.time = Date.now();
        this.#longitude = longitude;
        this.#latitude = latitude;
    };

};

let vehicule = new Vehicule({longitude: 18. latitude:12; id: "ALI024"})
console.log(vehicule.getPosition());
console.log(vehicule.#longitude); */ //error


//secondeTime with getters and setters

/* class Vehicle { 
constructor({id, latitude, longitude}){ 
    this.id = id; 
    this.position = {latitude, longitude}; 
    this.status = "unavailable"; 
};

set position({latitude, longitude}) { 
    this.time = Date.now(); 
    this.longitude = longitude; 
    this.latitude = latitude; 
};

get position() { 
    return { 
        latitude: this.latitude, 
        longitude: this.longitude 
    }; 

};
};

let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
vehicle.position = {longitude: 18.193121, latitude: 59.378654};
console.log(vehicle.position); */



//STATIC METHODES
class Vehicle {

constructor({id, latitude, longitude}){
    this.id = id;
    this.status = "unavailable";
    this.setPosition({latitude, longitude});
};

setPosition({latitude, longitude}) {
    this.time = Date.now();
    this.longitude = longitude;
    this.latitude = latitude;
};

getPosition() {
    return {
        latitude: this.latitude,
        longitude: this.longitude
    };
};

static isSameId(v1, v2) {
    return v1.id === v2.id;
};
};

let vehicle1 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
let vehicle2 = new Vehicle({longitude: 0, latitude: 0, id: "AL1024"});
let vehicle3 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1026"});

Vehicle.isSameId(vehicle1, vehicle2); // -> true
Vehicle.isSameId(vehicle1, vehicle2); // -> false