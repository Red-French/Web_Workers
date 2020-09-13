importScripts('external.js');

// 'self' defines the worker (it's like the window object)
// it listens for a message and receives an event

self.addEventListener('message', function (event) {  // catches request
  console.log(event);
  console.log(event.data);  // log message sent via postMessage()

  if (event.data.name === 'go to work!') {
    console.log('worker is about to do some work!');
    console.log('number: ', event.data.number);

    let count = 0;
    let i = 10000000;
    while (i--) {
      count += i;
    }

    setName('Red');
    console.log('myName: ', myName);
    setTimeout(function () {
      self.postMessage({ message: "count1", name: myName, count: count });
    }, 2500);
  }


  if (event.data === 'do MORE work!') {
    console.log('gonna work MORE!');

    let count2 = 0;
    let i = 100000;
    while (i--) {
      count2 += i;
    }
    setTimeout(function () {
      self.postMessage({ message: "count2", name: "count2: ", count2: count2 });
    }, 3000);
  }
});
