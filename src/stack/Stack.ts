interface IStack<T> {
  stack: Array<T>;
  push: (item: T) => void;
  pop: () => T | undefined;
}

class Stack<T> implements IStack<T> {
  stack: Array<T>;
  constructor() {
    this.stack = [];
  }

  push(item: T) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }
}

export { Stack };
