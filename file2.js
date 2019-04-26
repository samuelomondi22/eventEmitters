// Passing arguments and this to listeners

const myEmitter = new myEmitter();
myEmitter.on('event', function(a,b){
    console.log('event', a, b , this , this === myEmitter); // the standard 'this' keyword is intentionally set to reference the EventEmitter instance to which the listener is attached.
});
myEmitter.emit('event','a','b')

// with arrow function
const myEmitter = new myEmitter();
myEmitter.on('event', (a, b) => {
    console.log('event', a, b, this)
});
myEmitter.emit('event','a','b')
