class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello(status) {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I am a ${status}`);
    }
}

const student1 = new Student('Mesbah', 25);
student1.sayHello('Software Engineer');
console.log(student1);


// Creating Car class
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    startEngine() {
      return `${this.make} ${this.model} is starting...`;
    }
  }

// Creating an object from the Car class
const myCar = new Car("Toyota", "Corolla", 2021);

console.log(myCar.startEngine()); // Output: Toyota Corolla is starting...
console.log(myCar.make);          // Output: Toyota
console.log(myCar.model);         // Output: Corolla
console.log(myCar.year);          // Output: 2021