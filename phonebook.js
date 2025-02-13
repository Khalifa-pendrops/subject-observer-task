//create a subject telephone class
//let the class have 3 methods
//update the telephone class with changes
//add a notify method
//create the observer class to observe the subject
// add a method to notify the observer class when a phone number is dailed

class Telephone {
  constructor(subscribers, phoneBook) {
    this.subscribers = [];
    this.phoneBook = [];
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
    console.log(`Subscribed: ${subscriber.name} has subscribed\n`);
  }

  removeSubscriber(subscriber) {
    const indexOfSubscriber = this.subscribers.indexOf(subscriber);
    if (indexOfSubscriber < 0) {
      console.log("Sorry, there's no subscriber to remove.");
    } else {
      let [removedSubscriber] = this.subscribers.splice(indexOfSubscriber, 1);
      console.log(`${removedSubscriber.name} has unsubscribed\n`);
      //the .name here helps to print just the name of the removed subscriber
    }
  }

  notifySubscribers(number) {
    this.subscribers.forEach((subscriber) => subscriber.update(number));
  }

  addPhoneNumber(number) {
    this.phoneBook.push(number);
    console.log(`Added phone number: ${number} has been added\n`);
  }

  removePhoneNumber(number) {
    const indexOfNumber = this.phoneBook.indexOf(number);
    if (indexOfNumber < 0) {
      console.log("Sorry, there's no phone number to remove.\n");
    } else {
      let removedNumber = this.phoneBook.splice(indexOfNumber, 1);
      console.log(`${removedNumber} has been removed\n`);
    }
  }

  dialPhoneNumber(number) {
    if (this.phoneBook.includes(number)) {
      // this.notifySubscribers(number);
      console.log(`Dialing ${number}...\n`);
    } else {
      console.log(
        `Sorry, Phone number does not exist. You can add a phone number and try again.`
      );
    }
  }
}

class Subscriber {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  //   toString() {
  //     return this.name;
  //   }
  //this code here helps to print the subscriber name on the console as string and not as object. check line 26 or thereabouts above

  update(number) {
    if (this.name === "First Observer") {
      console.log(`${number}`);
    } else if (this.name === "Second Observer") {
      console.log(`Now Dialing ${number}`);
    }
  }
}

const myTelephone = new Telephone();

const khalifa = new Subscriber("First Observer");
const ogechi = new Subscriber("Second Observer");
const livinus = new Subscriber("Livinus");

myTelephone.addSubscriber(khalifa);
myTelephone.addSubscriber(ogechi);
myTelephone.addSubscriber(livinus);

myTelephone.removeSubscriber(livinus);

myTelephone.addPhoneNumber("23470233232");
myTelephone.addPhoneNumber("23480233232");
myTelephone.addPhoneNumber("23490233232");

myTelephone.removePhoneNumber("23490233232");
myTelephone.removePhoneNumber("23490565656");

myTelephone.dialPhoneNumber("23470233232");
myTelephone.dialPhoneNumber("23490565656");

myTelephone.notifySubscribers("23470233232");
