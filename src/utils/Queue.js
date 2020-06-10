// Implementing queue for bsf
class Queue {
  queue = [];

  push = (x) => this.queue.push(x);

  pop = () => {
    if (this.queue.length <= 0) throw "Stack underflow";

    this.queue.splice(0, 1);
  };

  size = () => this.queue.length;

  front = () => this.queue[0];

  isEmpty = () => this.queue.length === 0;

  clear = () => this.queue.splice(0, this.queue.length);
}

export default Queue;
