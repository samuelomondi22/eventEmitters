// Asynchronous vs. Synchronous

// The EventEmitter calls all listeners synchronously in the order in which they were registered. 
// This is important to ensure the proper sequencing of events and to avoid race conditions or logic errors
const myEmitter = new myEmitter();
myEmitter.on('event', (a, b) => {
    setImmediate(()=> {
        console.log('ssup bro')
    });
});
myEmitter.emit('event', 'a', 'b');