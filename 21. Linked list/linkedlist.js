// Node class
class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this._head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this._head) {
      this._head = newNode;
      return;
    }

    let current = this._head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this._head;
    this._head = newNode;
  }

  size() {
    let count = 0;
    let current = this._head;

    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this._head ? this._head.value : undefined;
  }

  tail() {
    if (!this._head) return undefined;

    let current = this._head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    if (index < 0) return undefined;

    let current = this._head;
    let i = 0;

    while (current) {
      if (i === index) return current.value;
      current = current.nextNode;
      i++;
    }
    return undefined;
  }

  pop() {
    if (!this._head) return undefined;

    const value = this._head.value;
    this._head = this._head.nextNode;
    return value;
  }

  contains(value) {
    let current = this._head;

    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let current = this._head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return -1;
  }

  toString() {
    if (!this._head) return "";

    let result = "";
    let current = this._head;

    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + "null";
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      values.reverse().forEach(value => this.prepend(value));
      return;
    }

    let current = this._head;
    let i = 0;

    while (i < index - 1) {
      current = current.nextNode;
      i++;
    }

    let next = current.nextNode;

    values.forEach(value => {
      const newNode = new Node(value);
      current.nextNode = newNode;
      current = newNode;
    });

    current.nextNode = next;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      this._head = this._head.nextNode;
      return;
    }

    let current = this._head;
    let i = 0;

    while (i < index - 1) {
      current = current.nextNode;
      i++;
    }

    current.nextNode = current.nextNode.nextNode;
  }
}

module.exports = LinkedList;
