// 'self' defines the worker (it's like the window object)
// it listens for a message and receives an event

self.addEventListener('message', function(event) {  // catches request
  console.log(event);
  console.log(event.data);  // log message sent via postMessage()

  if(event.data === 'go to work!') {
    console.log('worker is about to do some work!');

    let count = 0;
    let i = 1000000000;
    while(i--) {
      count += i;
    }

    self.postMessage({message: count});
  }


  if(event.data === 'do MORE work!') {
    console.log('gonna work MORE!');

    let count2 = 0;
    let i = 10000000;
    while(i--) {
      count2 += i;
    }
  }
});
