function Node(value) {
  this.previous = null;
  this.value = value;
  this.next = null;
}

/**
 * @description doubly linked linked list
 */
function LinkedList() {
  this._clear();

  Object.defineProperties(this, {
    amount: {
      get: function getAmount() {
        return this._size;
      },
    },
    head: {
      get: function getHead() {
        return this._firstNode;
      },
    },
    tail: {
      get: function getTail() {
        return this._lastNode;
      },
    },
  });
}

/**
 * @description adds element to the end of current linked list
 * @param {any} element element to add
 * @return {void}
 * @example push(4)
 * before: 1 <-> 2 <-> 3
 * after: 1 <-> 2 <-> 3 <-> 4
 */
LinkedList.prototype.push = function(element) {
  ++this._size;

  const newNode = new Node(element);

  const oldLast = this._lastNode;
  if (oldLast) {
    oldLast.next = newNode;
    newNode.previous = oldLast;

    this._lastNode = newNode;
  } else {
    this._firstNode = newNode;
    this._lastNode = newNode;
  }
};

/**
 * @description removes last element and returns its value
 * @return {any} last element of linked list
 * @example pop() -> 3
 * before: 1 <-> 2 <-> 3
 * after: 1 <-> 2
 */
LinkedList.prototype.pop = function() {
  if (this._size === 0) {
    return undefined;
  }

  const result = this._lastNode.value;

  if (this._size === 1) {
    this._clear();

    return result;
  }

  --this._size;

  const oldLast = this._lastNode;
  const newLast = oldLast.previous;

  newLast.next = null;
  this._lastNode = newLast;

  return result;
};

/**
 * @description calls specified callback with each element as param
 * @param {function({value: any}): void} cb
 * @return {void}
 * @example iterate(cb)
 * elements: 1 <-> 2 <-> 3
 * calls: cb(1), cb(2), cb(3)
 */
LinkedList.prototype.iterate = function(cb) {
  let currentNode = this._firstNode;

  while (currentNode) {
    const {value, next} = currentNode;
    cb({value});

    currentNode = next;
  }
};

/**
 * @typedef {any} Element type of value being stored in linked list
 * @description inserts insertable after searchable if last is found
 * @param {Element} searchable
 * @param {Element} insertable
 * @return {boolean} true in case of searchable is found, otherwise - false
 * @example insertAfter(2, 5)
 * before: 1 <-> 2 <-> 3 <-> 4
 * after: 1 <-> 2 <-> 5 <-> 3 <-> 4
 */
LinkedList.prototype.insertAfter = function(searchable, insertable) {
  let currentNode = this._firstNode;

  while (currentNode) {
    const {value, next} = currentNode;

    if (value === searchable) {
      break;
    }

    currentNode = next;
  }

  if (!currentNode) {
    return false;
  }

  const newNode = new Node(insertable);

  const previous = currentNode;
  const next = currentNode.next;

  if (!next) {
    this.push(newNode);
    return true;
  }

  previous.next = newNode;
  newNode.previous = previous;

  newNode.next = next;
  next.previous = newNode;

  ++this._size;

  return true;
};

/**
 * @description removes first 'removable' if it is found
 * @param {any} removable
 * @return {boolean} true in case of removable is found, otherwise - false
 * @example removeItem(2)
 * before: 1 <-> 2 <-> 3 <-> 2
 * after:  1 <-> 3 <-> 2
 */
LinkedList.prototype.removeItem = function(removable) {
  if (this._size === 0) {
    return false;
  }

  if (this._size === 1) {
    if (this._firstNode.value === removable) {
      this._clear();
      return true;
    }

    return false;
  }

  let currentNode = this._firstNode;

  while (currentNode) {
    const {value, next} = currentNode;

    if (value === removable) {
      break;
    }

    currentNode = next;
  }

  if (!currentNode) {
    return false;
  }

  const {previous, next} = currentNode;

  if (previous && next) {
    previous.next = next;
    next.previous = previous;
  } else if (next) {
    this._firstNode = next;
    next.previous = null;
  } else {
    this._lastNode = previous;
    previous.next = null;
  }

  --this._size;

  return true;
};

LinkedList.prototype._clear = function() {
  this._firstNode = null;
  this._lastNode = null;
  this._size = 0;
};

export {LinkedList};
