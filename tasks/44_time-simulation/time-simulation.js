export class SimTime {
  constructor() {
    this.realTime = 0;
    this.simulatedTime = 0;
    this.speed = 1;
  }

  get() {
    return this.simulatedTime;
  }

  update(newReal) {
    this.simulatedTime += this.speed * (newReal - this.realTime);
    this.realTime = newReal;
  }

  setSpeed(speed) {
    this.speed = speed;
  }
}
