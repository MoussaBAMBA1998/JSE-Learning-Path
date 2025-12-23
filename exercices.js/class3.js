/* let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 4);
teacher1.addCourse('maths', 4);
let match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> [{course: 'maths', level: 2}]
teacher1.editCourse('maths', 1);
match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> []
teacher1.addCourse('physics', 4);
match = ExtendedUser.match(teacher1, student1, 'physics');
console.log(match);  */// -> {course: 'physics', level: 4}

//number 6
/* class A {
    _x = 0;
    set x(val) { this._x = val;}
}
let a = new A();
a.x = 10;
console.log(a._x);

*/

/* class A {
    showInfo() {console.log('Hi ');}

}

let a = new A();
A.showInfo(); */ 


/* class User {};
class EUser extends User {};
class EEUser extends Euser {};
let eeuser = new EEUser();
console.log(`${eeuser instanceof User} ${eeuser instanceof Euser} ${eeuser instanceof EEUser}`) */




/* function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object); */
// Expected output: true


//let Point = class {};

/* let user = {name: "Moussa", age: 21};

let text = JSON.stringify(user); // convert to JSON string
console.log(text);

let obj = JSON.parse(text); // convert back to object
for(let i in obj) {
    console.log(obj[i]);
}

console.log(Math.sqrt(9));  // 3
console.log(Math.random()); // nombre entre 0 et 1
console.log(Math.round(3.7)); // 4
console.log(Math.max(2, 10, 5));  */// 10
/* 

//five
class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    setColor(color) {
        this.color = color;
    }
}
let point = new Point(100, 200);
point.setColor('red'); */


/* class Point {
    name = 'Point';
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    setColor(color) {
        this.color = color;
    }
}
let point = new Point(100, 200);
point.setColor('red'); */


/* class User{
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    get fullName() {
        return`${this.firstname} ${this.lastname}`
    }
}
let user = new User('Bob Marley'); */


class Test {
    static info() {return 'test';}
}
test = new Test()

//test.info()
//test['static info'] ()
Test.info
