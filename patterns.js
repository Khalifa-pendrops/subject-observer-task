// create a subject class
// // ctreate an observer class to observe the subject
// watch for chnanges in the subject and update the observer class accordingly

class YouTubChannel {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    console.log(this.subscribers.push(subscriber));
  }

  notifySubscriber(video) {
    this.subscribers.forEach((subscriber) => subscriber.update(video));
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }

  update(video) {
    console.log(`${this.name}, a new video has been uploaded:${video}`);
  }
}

///instances
const channel = new YouTubChannel();

const khalifa = new Subscriber("Khalifa");

//subscribe khalifa to channel
channel.subscribe(khalifa);

//notify khalifa of new video upload
channel.notifySubscriber(
  `Tech: Javascript Design Patterns explained with examples`
);
