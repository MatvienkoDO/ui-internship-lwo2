class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

/**
 * @description stack structure
 */
export class Stack {
  constructor() {
    this._last = null;
    this._size = 0;

    Object.defineProperties(this, {
      size: {
        get: () => this._size,
      },
      isEmpty: {
        get: () => !this._size,
      },
      last: {
        get: () => this._last,
      },
    });
  }

  /**
   * @description pushes element to the stack
   * @param {any} value
   * @return {void}
   */
  push(value) {
    ++this._size;

    const oldLast = this._last;
    const newLast = new Node(value);

    newLast.prev = oldLast;
    this._last = newLast;
  }

  /**
   * @description removes last element and returns its value
   * @return {any} value of last node
   */
  pop() {
    if (!this._size) {
      return undefined;
    }

    const {prev, value} = this._last;
    this._last = prev;
    --this._size;

    return value;
  }
}
