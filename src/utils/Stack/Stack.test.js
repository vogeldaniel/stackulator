import Stack from './Stack.js';

describe('Stack implementation functions', () => {
  it('Begins as an empty stack', () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it("Isn't empty once you add an item", () => {
    let stack = new Stack();
    stack.push("item");
    expect(stack.isEmpty()).toBe(false);
  });

  it("After adding an item to empty, the top item is that item", () => {
    let stack = new Stack();
    let newItem = Math.random();
    stack.push(newItem);
    expect(stack.peek()).toBe(newItem);
  });

  it("The last added item is always the item on top", () => {
    let stack = new Stack();
    //create an array of random floats
    let newItems = createDummyArray(10);
    for (let item of newItems) {
      stack.push(item);
      //expect the peeked item to be the one we just pushed
      expect(stack.peek()).toBe(item);
    }
  });

  it("Popping items off the stack returns them in the order they were received", () => {
    let stack = new Stack();
    let items = createDummyArray(10);
    for (let item of items) {
      stack.push(item);
    }
    for (let item of items.reverse()) {
      expect(stack.pop()).toBe(item);
    }
  });

  it("Peeking at an empty stack throws an empty stack error", () => {
    let stack = new Stack();
    expect(() => stack.peek()).toThrow("Empty stack");
  });

  it("Popping an empty stack throws an empty stack error", () => {
    let stack = new Stack();
    expect(() => stack.pop()).toThrow("Empty stack");
  });
});

describe('Stack operating functions', () => {
  it("Throws an argument when an operation is called on an empty stack", () => {
    let stack = new Stack();
    expect(() => stack.operate(id)).toThrow("Not enough items.")
  });

  it("Preserves the stack when a one-arg function is called on a one-member stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.operate(id);
    expect(stack.peek()).toBe(1);
  });

  it("Does addition", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(1);
    stack.operate(add);
    expect(stack.peek()).toBe(2);
  });

  it("Does string concatenation", () => {
    let stack = new Stack();
    stack.push("world!");
    stack.push("hello, ");
    stack.operate(add);
    expect(stack.peek()).toBe("hello, world!");
  });

  it("Does subtraction", () => {
    let stack = new Stack();
    stack.push(9);
    stack.push(10);
    stack.operate(subtract);
    expect(stack.peek()).toBe(1);
  });

  it("Does division", () => {
    let stack = new Stack();
    stack.push(2);
    stack.push(6);
    stack.operate(division);
    expect(stack.peek()).toBe(3);
  })
});

const createDummyArray = (length) => {
  return (new Array(length)).fill(null).map(() => Math.random());
}

//the identity function
const id = (item) => { return item };

const add = (item1, item2) => item1 + item2;

const subtract = (item1, item2) => item1 - item2;

const division = (item1, item2) => item1 / item2;
