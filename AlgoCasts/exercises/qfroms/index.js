// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor(){
    this.data = new Stack()
  }
  add(element){
    this.data.push(element)
  }
  remove(){
    const temp = new Stack()
    while(this.data.peek()){
      temp.push(this.data.pop())
    }
    const a = temp.pop()
    while(temp.peek()){
      this.data.push(temp.pop())
    }
    return a
  }
  peek(){
    const temp = new Stack()
    while(this.data.peek()){
      temp.push(this.data.pop())
    }
    const a = temp.peek()
    while(temp.peek()){
      this.data.push(temp.pop())
    }
    return a
  }
}

module.exports = Queue;
