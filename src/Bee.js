var Bee = function() {
  //calls the Grub contructor but passes 'this'
  Grub.call(this);

  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};
// Inherited the Grub's prototype
Bee.prototype = Object.create(Grub.prototype);
// .prototype.constructor property that points back to the constructor itself
Bee.prototype.constructor = Bee;