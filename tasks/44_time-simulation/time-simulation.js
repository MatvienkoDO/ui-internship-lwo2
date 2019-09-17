function SimTime() {
  this.realTime = 0;
  this.simulatedTime = 0;
  this.speed = 1;
}

SimTime.prototype.get = function() {
  return this.simulatedTime;
};

SimTime.prototype.update = function(newReal) {
  this.simulatedTime += this.speed * (newReal - this.realTime);
  this.realTime = newReal;
};

SimTime.prototype.setSpeed = function(speed) {
  this.speed = speed;
};

export {SimTime};
