const SEX = Object.freeze({
  MALE: 'male',
  FEMALE: 'female',
});

export class God {
  static create() {
    return [
      new Man('Adam'),
      new Woman('Eve'),
    ];
  }
}

export class Human {
  constructor(name) {
    this.name = name;
  }
}

export class Man extends Human {
  constructor(name) {
    super(name);
    this.sex = SEX.MALE;
  }
}

export class Woman extends Human {
  constructor(name) {
    super(name);
    this.sex = SEX.FEMALE;
  }
}
