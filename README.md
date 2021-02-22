# Queue

Implementation of a queue (...based on arrays) in JavaScript in first-in-first-out order.

## Install

`git clone https://github.com/ahadb/queue`, create a tarball, or use directly for now

NPM:

`npm install another-queue`

## Use

```javascript
import Queue from 'another-queue';

const Queue = new Queue();
// ...ß
```


## API

### `Constructor & Instance`

```javascript
const queue = new Queue();
```

### `queue.enqueue`

Add an element to the queue

```javascript
const queue = new Queue();

queue.enqueue('i_am_message_1');
queue.enqueue('i_am_message_2');
```

### `queue.dequeue`

Dequeue, or remove an element from the queue

```javascript
const queue = new Queue();

queue.dequeue('i_am_message_1');
```

### `queue.peek`

See who is next in line

```javascript
const queue = new Queue();

queue.enqueue('i_am_message_1');
queue.peek(); 
```

### `queue.getLength`

Get the length of the queue

```javascript
const queue = new Queue();

queue.getLength()
```

### `queue.toString`

String representation of queue

```javascript
const queue = new Queue();

queue.toString()
```

### `queue.isEmpty`

Check if queue is empty

```javascript
const queue = new Queue();


queue.isEmpty();
```

### `LinkedList.find`

Find a node by value in your Singly Linked List.

## On Creating Your Own Data Structures

Note: you can create your data structures without using arrays as well, or even use my [linked-list](https://github.com/ahadb/linked-list).

```javascript
// using plain ole prototype not syntactic class
const Queue = function() {
  this.first = null;
  this.size = 0;
};

const QueueNode = function(data) {
  this.data = data;
  this.next = null;
};

Queue.prototype.enqueue = function(data) {
  const enqueuedNode = QueueNode(data)
  // ..
};

Queue.prototype.dequeue = function() {
  // ..
};
```


