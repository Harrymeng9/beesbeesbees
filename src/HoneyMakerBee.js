var HoneyMakerBee = function() {
  Bee.call(this);

  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};
// Inherited the Bee's prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);
//Set the constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// a makeHoney method that adds 1 to that honeyBee's honeyPot
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

// a giveHoney method that subtracts 1 from that honeyBee's honeyPot
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};
