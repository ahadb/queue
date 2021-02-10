import Queue from './../queue';

describe('Queue', () => {
  it('should create empty queue', () => {
    const queue = new Queue();

    expect(queue).not.toBeNull();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.toString()).toBe('');
  });

  it('should enqueue numbers to queue', () => {
    const queue = new Queue();
    queue.enqueue('i_am_message_1');
    queue.enqueue('i_am_message_2');

    expect(queue.toString()).toBe('i_am_message_1,i_am_message_2');
  });

  it('should enqueue message strings to queue', () => {
    const queue = new Queue();

    queue.enqueue('i_am_message_1');
    expect(queue.peek()).toBe('i_am_message_1');
    expect(queue.toString()).toBe('i_am_message_1');

    queue.enqueue('i_am_message_2');
    expect(queue.peek()).toBe('i_am_message_1');
    expect(queue.toString()).toBe('i_am_message_1,i_am_message_2');

    expect(queue.dequeue()).toBe('i_am_message_1');
    expect(queue.dequeue()).toBe('i_am_message_2');

    expect(queue.isEmpty()).toBe(true);
  });

  it('should be possible to enqueue/dequeue objects', () => {
    const queue = new Queue();

    queue.enqueue({ value: 'test1', key: 'key1' });
    queue.enqueue({ value: 'test2', key: 'key2' });
    expect(queue.dequeue().value).toBe('test1');
    expect(queue.dequeue().value).toBe('test2');
  });

  it('should be able to peek data from queue', () => {
    const queue = new Queue();

    expect(queue.peek()).toBeUndefined();

    queue.enqueue('a');
    queue.enqueue('b');

    expect(queue.peek()).toBe('a');
    expect(queue.peek()).toBe('a');
  });

  it('should check if queue is empty', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
  });

  it('should dequeue from queue in FIFO order', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.isEmpty()).toBe(true);
  });
});
