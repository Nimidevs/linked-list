class LinkedList {
  constructor () {
    this.head = null;
  }

  append (value) {
    const newNode = { value };
    if (this.head === null) {
      this.head = newNode;
      return this.head;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend (value) {
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
  }

  size () {
    let current = this.head;
    var counter = 0;
    while (current) {
      current = current.next;
      counter++;
    }
    return counter;
  }

  header () {
    const current = this.head;
    return current;
  }

  tail () {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  pop () {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  contains (value) {
    let current = this.head;
    while (current) {
      if (current.value === value || this.head.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find (value) {
    let current = this.head;
    let counter = 0;
    while (current) {
      counter++;
      if (current.value === value) {
        return counter;
      }
      current = current.next;
    }
    return `'${value}' not found`;
  }

  at (index) {
    let current = this.head;
    let counter = 0;
    while (current) {
      counter++;
      if (counter === index) {
        return current;
      }
      current = current.next;
    }
    return 'out of bounds';
  }

  toString () {
    let current = this.head;
    let result = '';
    while (current.next) {
      result = result.concat(`( ${current.value} ) --> `);
      current = current.next;
    }
    result = result.concat(`( ${current.value} ) --> null`);
    return result;
  }

  insertAt (value, index) {
    const newNode = { value };
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    const nextNode = current.next;
    current.next = newNode;
    newNode.next = nextNode;
  }

  removeAt (index) {
    var temp = this.head;
    if (index === 0) {
      this.head = temp.next;
      return;
    }
    for (let i = 0; temp != null && i < index - 1; i++) {
      temp = temp.next;
    }
    var next = temp.next.next;
    temp.next = next;
  }
}
