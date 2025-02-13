class Telephone {
  constructor(phoneNumbers, observers) {
    this.phoneNumbers = phoneNumbers || [];
    this.observers = observers || [];
  }

  addObserver(observer) {
    this.observers.push(observer);
    console.log(`Added observers: ${observer.name} \n`);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(number) {
    this.observers.forEach((observer) => observer.notify(number));
  }

  addPhoneNumber(number) {
    if (!this.phoneNumbers.includes(number)) {
      this.phoneNumbers.push(number);
      console.log(`Added phone numbers: ${number}\n`);
    }
  }

  removePhoneNumber(number) {
    const index = this.phoneNumbers.indexOf(number);
    if (index !== -1) {
      this.phoneNumbers.splice(index, 1);
    }
  }

  dialPhoneNumber(number) {
    if (this.phoneNumbers.includes(number)) {
      this.notifyObservers(number);
      console.log(`Dialing ${number}... \n`);
    } else {
      console.log(
        "Phone number does not exist. Kindly add phone number or exit."
      );
    }
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  notify(number) {
    if (this.name === "Observer 1") {
      console.log(`Phone number: ${number}`);
    } else if (this.name === "Observer 2") {
      console.log(`Now Dialing ${number}`);
    }
  }
}

const telephone = new Telephone();

const khalifa = new Observer("khalifa");
const pendrops = new Observer("pendrops");

telephone.addObserver(khalifa);
telephone.addObserver(pendrops);

telephone.addPhoneNumber("2347023232");
telephone.addPhoneNumber("234918176543");
telephone.addPhoneNumber("234803333333");
telephone.addPhoneNumber("234803333111");
telephone.addPhoneNumber("234803333222");
telephone.addPhoneNumber("234803333444");

telephone.dialPhoneNumber("2347023232");
