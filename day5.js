
//Write a “person” class to hold all the details.
class Person {
    constructor(firstName, lastName, age, gender, interests) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`);
    }
  
    detail() {
      console.log(`Name: ${this.getFullName()}`);
      console.log(`Age: ${this.age}`);
      console.log(`Gender: ${this.gender}`);
    }
  }
  
  const person = new Person('Deepak', 'K', 28, 'male');
  person.greet(); 
  person.detail(); 
  
  //write a class to calculate the Uber price.

  class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
      this.bookingFee = bookingFee;
    }
  
    calculatePrice(distanceInMiles, durationInMinutes) {
      const distanceCost = this.costPerMile * distanceInMiles;
      const durationCost = this.costPerMinute * durationInMinutes;
      const totalPrice = this.baseFare + distanceCost + durationCost + this.bookingFee;
      return totalPrice;
    }
  }
 
  const calculator = new UberPriceCalculator(2.5, 0.3, 1.5, 1.2);
  const distance = 10;
  const duration = 20;
  const price = calculator.calculatePrice(distance, duration);
  console.log("Total price:", price);

  //Convert the UML diagram to Typescript class. - use number for double
  class Circle {
    // radius property with default value of 1.0
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    // Getter methods for radius and color
    getRadius() {
      return this.radius;
    }
  
    getColor() {
      return this.color;
    }
  
    // Setter methods for radius and color
    setRadius(radius) {
      this.radius = radius;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    // Method to calculate the area of the circle
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    // Method to calculate the circumference of the circle
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  
    // Method to return a string representation of the circle object
    toString() {
      return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
  }
  const myCircle = new Circle(2.5, "blue");
  console.log("Radius:", myCircle.getRadius());
  console.log("Color:", myCircle.getColor());
  console.log("Area:", myCircle.getArea());
  console.log("Circumference:", myCircle.getCircumference());
  console.log("String representation:", myCircle.toString());
  
  //The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

  // Movie class definition
class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";
    }
}

function getPG(movies) {
    var pgMovies = [];
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].rating === "PG") {
            pgMovies.push(movies[i]);
        }
    }
    return pgMovies;
}
var casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG­13");
