// by Vadym Iskryzhytskyi
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  const words = [];

  for (let key in obj) {
    if (key.length === 5) {
      words.push(key);
    }
    if (obj[key].length === 5) {
      words.push(obj[key]);
    }
  }
  return words;
}

// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
// =======







// by Andrew Dehtiarov
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj){
  let result = [];

  for (let key in obj) {
    // перевіряємо довжину ключа
    if (key.length === 5) {
      result.push(key);
    }

    // перевіряємо довжину значення
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }

  return result;
}

// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(N) {
  let result = [];

  for (let i = 0; i < N; i++) {
    result.push(function () {
      return i;
    });
  }

  return result;
}

// http://codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}




//=======================================

// by Stas R.

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
  const result = 2 * circle.radius * Math.PI;
  return Number(result.toFixed(6));
}

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
  let res = [];
  for (let key in obj) {
    key.length === 5 ? res.push(key) : null;
    obj[key].length === 5 ? res.push(obj[key]) : null;
  }
  return res;
}

//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
}

class Dog extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "dog", status);
  }
  greetMaster() {
    return `Hello ${this.master}! Woof!`;
  }
}

