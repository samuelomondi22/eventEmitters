// The following example shows a simple EventEmitter instance with a single listener.

const eventEmitter = require('events'); 

class myEmitter extends eventEmitter{}; // inheriting from an eventEmitter

const myEmitter = new MyEmitter();
myEmitter.on('event', () => { // The eventEmitter.on() method is used to register listeners

    console.log('heyo');
});
myEmitter.emit('event'); // eventEmitter.emit() method is used to trigger the event.
