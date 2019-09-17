/**
 * Simple representation of the Stack abstract data structure with the expected
 * verbage for functions.
 */
class Stack {
  /**
   * Create a new Stack with an empty memory.
   */
  constructor() {
    this.memory = [];
  }

  /**
   * See if there aren't any items on the stack.
   * @return {Boolean} True when there aren't any items on the stack.
   */
  isEmpty = () => this.memory.length === 0;

  /**
   * Pushes a new item to the top of the stack.
   * @param  {[type]} item The item to place at the top of the stack.
   */
  push = item => {
    this.memory.unshift(item);
  };

  /**
   * Get the item at the top of the stack without removing it.
   * @return {[type]} The item at the top of the stack.
   */
  peek = () => {
    if (this.memory.length === 0) {
      throw new Error('Not enough items.');
    }
    return this.memory[0];
  };

  /**
   * Gets the item at the top of the stack and removes it.
   * @return {[type]} The item at the top of the stack.
   */
  pop = () => {
    if (this.memory.length === 0) {
      throw new Error('Not enough items.');
    }
    const poppedItem = this.memory[0];
    this.memory = this.memory.slice(1);
    return poppedItem;
  };

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
