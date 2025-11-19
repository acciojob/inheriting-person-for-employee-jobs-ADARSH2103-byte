// complete this js code
function Person(name, age) {}

function Employee(name, age, jobTitle) {}
// Person Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee Class
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // calling parent (Person) constructor
    this.jobTitle = jobTitle;
  }

  // Job-specific greeting
  jobGreet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  }
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
