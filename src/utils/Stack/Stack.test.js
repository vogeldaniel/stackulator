import Stack from './Stack';

// the identity function
const id = item => item;

const add = (item1, item2) => item1 + item2;

const subtract = (item1, item2) => item1 - item2;

const division = (item1, item2) => item1 / item2;

const createDummyArray = length => new Array(length).fill(null).map(() => Math.random());

describe('Stack implementation functions', () => {
  it('Begins as an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it("Isn't empty once you add an item", () => {
    const stack = new Stack();
    stack.push('item');
    expect(stack.isEmpty()).toBe(false);
  });

  it('After adding an item to empty, the top item is that item', () => {
    const stack = new Stack();
    const newItem = Math.random();
    stack.push(newItem);
    expect(stack.peek()).toBe(newItem);
  });

  it('The last added item is always the item on top', () => {
    const stack = new Stack();
    // create an array of random floats
    const newItems = createDummyArray(10);
    for (const item of newItems) {
      stack.push(item);
      // expect the peeked item to be the one we just pushed
      expect(stack.peek()).toBe(item);
    }
  });

  it('Popping items off the stack returns them in the order they were received', () => {
    const stack = new Stack();
    const items = createDummyArray(10);
    for (const item of items) {
      stack.push(item);
    }
    for (const item of items.reverse()) {
      expect(stack.pop()).toBe(item);
    }
  });

  it('Peeking at an empty stack throws an empty stack error', () => {
    const stack = new Stack();
    expect(() => stack.peek()).toThrow('Empty stack');
  });

  it('Popping an empty stack throws an empty stack error', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow('Empty stack');
  });
});

describe('Stack operating functions', () => {
  it('Throws an argument when an operation is called on an empty stack', () => {
    const stack = new Stack();
    expect(() => stack.operate(id)).toThrow('Not enough items.');
  });

  it('Preserves the stack when a one-arg function is called on a one-member stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.operate(id);
    expect(stack.peek()).toBe(1);
  });

  it('Does addition', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(1);
    stack.operate(add);
    expect(stack.peek()).toBe(2);
  });

  it('Does string concatenation', () => {
    const stack = new Stack();
    stack.push('world!');
    stack.push('hello, ');
    stack.operate(add);
    expect(stack.peek()).toBe('hello, world!');
  });

  it('Does subtraction', () => {
    const stack = new Stack();
    stack.push(9);
    stack.push(10);
    stack.operate(subtract);
    expect(stack.peek()).toBe(1);
  });

  it('Does division', () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(6);
    stack.operate(division);
    expect(stack.peek()).toBe(3);
  });
});
