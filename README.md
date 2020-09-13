# Web Workers
##### SEE 'Rate' BRANCH for rough example of using same worker for repeat task from same page (* could pass ID as param in this scenario)

https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers

```
worker.postMessage();  // send request for work

self.addEventListener('message', function(event) {... }  // perform work
self.postMessage();  // post response

worker.addEventListener();  // handle response
worker.terminate();  // close worker
```

Web Workers is a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. In addition, they can perform I/O using XMLHttpRequest (although the responseXML and channel attributes are always null). Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa).

A worker is an object created using a constructor (e.g. Worker()) that runs a named JavaScript file — this file contains the code that will run in the worker thread; workers run in another global context that is different from the current window. Thus, using the window shortcut to get the current global scope (instead of self) within a Worker will return an error.

You can run whatever code you like inside the worker thread, with some exceptions. For example, you can't directly manipulate the DOM from inside a worker, or use some default methods and properties of the window object. But you can use a large number of items available under window, including WebSockets, and data storage mechanisms like IndexedDB and the Firefox OS-only Data Store API.

Data is sent between workers and the main thread via a system of messages — both sides send their messages using the postMessage() method, and respond to messages via the onmessage event handler (the message is contained within the Message event's data attribute.) The data is copied rather than shared.

Workers may, in turn, spawn new workers, as long as those workers are hosted within the same origin as the parent page.

## Dedicated workers
A dedicated worker is only accessible by the script that called it.

## Shared workers
A shared worker is accessible by multiple scripts — even if they are being accessed by different windows, iframes or even workers.

## About thread safetySection
The Worker interface spawns real OS-level threads, and mindful programmers may be concerned that concurrency can cause “interesting” effects in your code if you aren't careful.

However, since web workers have carefully controlled communication points with other threads, it's actually very hard to cause concurrency problems. There's no access to non-threadsafe components or the DOM. And you have to pass specific data in and out of a thread through serialized objects. So you have to work really hard to cause problems in your code.

## Transferring data to and from workers
Data passed between the main page and workers is copied, not shared. Objects are serialized as they're handed to the worker, and subsequently, de-serialized on the other end. The page and worker do not share the same instance, so the end result is that a duplicate is created on each end.

## Other types of workers
In addition to dedicated and shared web workers, there are other types of worker available:

* ServiceWorkers essentially act as proxy servers that sit between web applications, and the browser and network (when available). They are intended to (amongst other things) enable the creation of effective offline experiences, intercepting network requests and taking appropriate action based on whether the network is available and updated assets reside on the server. They will also allow access to push notifications and background sync APIs.
* Chrome Workers are a Firefox-only type of worker that you can use if you are developing add-ons and want to use workers in extensions and have access to js-ctypes in your worker. See ChromeWorker for more details.
* Audio Worklet provide the ability for direct scripted audio processing to be done in a worklet (a lightweight version of worker) context.
