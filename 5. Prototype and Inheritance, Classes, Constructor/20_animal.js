// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

class Animal {
  move() {
    console.log("The animal is moving");
  }
}

const cat = Object.create(Animal.prototype);

cat.move();
