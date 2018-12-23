interface IQueue<T> {
  push: (item: T) => any;
  pop: () => T | undefined;
  peek: () => T | undefined;
}

// FIFO
// First In First Out
// TODO: Implement queue with linked list instead

class Queue<T> implements IQueue<T> {
  queue: Array<T>;
  constructor() {
    this.queue = [];
  }

  push(item: T) {
    this.queue.unshift(item);
  }

  pop() {
    return this.queue.pop();
  }

  peek() {
    if (this.queue.length) {
      return this.queue[this.queue.length - 1];
    }

    return undefined;
  }
}

export { Queue };
