class Stack<T> {
  private items: T[] = [];

  get isEmpty() {
    return this.items.length === 0
  }

  get size() {
    return this.items.length;
  }

  push(item: T) {
    this.items.push(item)
  }

  top() {
    return this.items[this.size - 1];
  }

  pop() {
    return this.items.pop()
  }


}

const numbers = new Stack<number>();
numbers.push(5);
numbers.push(4);
numbers.push(1);
// console.log(numbers.pop())
console.log(numbers.top())

