// Implementing stack for DFS

class Stack {
  stack = [];
  topPtr = -1;

  push = (x) => {
    this.stack.push(x);
    this.topPtr++;
  };

  pop = () => {
    if (this.top < 0) throw "Underflow";
    const item = this.stack[this.topPtr];
    this.stack.pop();
    this.topPtr--;
    return item;
  };

  size = () => this.topPtr + 1;

  top = () => this.stack[this.topPtr];

  isEmpty = () => this.stack.length === 0;

  clear = () => {
    this.stack.splice(0, this.stack.length);
    this.topPtr = 1;
  };
}

export default Stack;
