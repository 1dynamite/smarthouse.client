class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class List {
  constructor(myArray) {
    if (myArray.length === 0) {
      this.head = null;
      return;
    }

    const head = new Node(myArray[0], null);

    const subArray = myArray.slice(1);

    const tail = subArray.reduce((prev, cur) => {
      prev.next = new Node(cur, null);

      return prev.next;
    }, head);

    tail.next = head;

    this.tail = tail;
    this.head = head;
  }
}

export default List;
