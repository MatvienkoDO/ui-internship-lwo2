/**
 * @description constructor for Person
 * who contains firstname, lastname and fullname
 * @param {string} fullname
 * @example new Person('Vasya Pupkin')
 */
function Person(fullname) {
  this.setFullName(fullname);
}

Person.prototype.getFirstName = function getFirstName() {
  return this._firstname;
};

Person.prototype.getLastName = function getLastName() {
  return this._lastname;
};

Person.prototype.getFullName = function getFullName() {
  return `${this._firstname} ${this._lastname}`;
};

Person.prototype.setFirstName = function setFirstName(first) {
  this._firstname = first;
};

Person.prototype.setLastName = function setLastName(last) {
  this._lastname = last;
};

Person.prototype.setFullName = function setFullName(firstAndLast) {
  if (firstAndLast) {
    const parts = firstAndLast.split(' ');
    if (parts.length === 2) {
      this._firstname = parts[0];
      this._lastname = parts[1];
    }
  }
};

export {Person};
