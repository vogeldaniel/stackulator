class Stack {
  constructor() {
    this.memory = [];
  }

  isEmpty = () => this.memory.length === 0;

  push = item => {
    this.memory.unshift(item);
  };

  peek = () => {
    if (this.memory.length === 0) {
      throw new Error('Empty stack');
    }
    return this.memory[0];
  };

  pop = () => {
    if (this.memory.length === 0) {
      throw new Error('Empty stack');
    }
    const poppedItem = this.memory[0];
    this.memory = this.memory.slice(1);
    return poppedItem;
  };

  /*
  If there aren't enough items, throw a "Not enough items" error.
   */

  /**
   *   Higher-order function that applies a function with N arguments to N items in the stack.
   * @param  {Function} fn A function that operates on N arguments.
   * @return {none}      None
   */
  operate = fn => {
    let numArgs = fn.length;

    // if there aren't enough items for fn to operate on, throw error
    if (this.memory.length < numArgs) {
      throw new Error('Not enough items.');
    }

    const itemsForOperation = [];

    while (numArgs > 0) {
      itemsForOperation.push(this.pop());
      numArgs += -1;
    }

    this.push(fn(...itemsForOperation));
  };
}

export default Stack;
