/**
 * @description Creates a queue based on an array, a queue is a first-in-first-out (FIFO) data structure
 * @module Queue
 * @author: Ahad Bokhari
 */

export default function Queue() {
  let queue  = [];
  let offset = 0;

  /**
   * @public method
   * @description add an element to the queue
   * @param {*} item
   */
  this.enqueue = function(item) {
    queue.push(item);
  };

  /**
   * @public method
   * @description dequeue an element
   * @return {element}
   */
  this.dequeue = function() {

    if (queue.length === 0) {
      return undefined;
    }

    const item = queue[offset];

    if (++ offset * 2 >= queue.length) {
      queue  = queue.slice(offset);
      offset = 0;
    }

    return item;
  };

  /**
   * @public method
   * @description see which element is next in line
   * @return {element}
   */
  this.peek = function() {
    return queue.length > 0 ? queue[offset] : undefined;
  };

  /**
   * @public helper method
   * @description gets length of queue
   * @return {element}
   */
  this.getLength = function() {
    return queue.length - offset;
  };

  /**
   * @public helper method
   * @description returns string representation of queue
   * @return {string}
   */
  this.toString = function() {
    return queue.toString()
  };

  /**
   * @public helper method
   * @description returns true if empty, false if not
   * @return {boolean}
   */
  this.isEmpty = function() {
    return queue.length === 0;
  };
}
