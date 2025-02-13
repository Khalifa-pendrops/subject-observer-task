# Telephone Package

---

## Description

This Telephone Package is a Javascript module that provides the Observer pattern for managing phone numbers and notifying observers when a phone number is dialed. The package has two classes: `Telephone class (subject)` and `Subscriber class (observer)`.

---

## Classes


### Telephone

The `Telephone` class manages phone numbers and subscribers, and notifies saved observers when a phone number is dialed.


### Constructor

This constructor takes in `phoneBook` and `subscribers` as properties.

```javascript

const telephone = new Telephone(phoneBook, subscribers);

```

`phoneBook`: An array to initialize the list of phone numbers. 

`subscribers`: An array to initialize the list of observers.


### Methods

`addSubscriber(subscriber)`

- Adds an observer to the list of observers.

`removeSubscriber(subscriber)`

- Removes an observer from the list of observers.

`notifySubscribers(number)`

- Notifies all observers with the dialed phone number.

`addPhoneNumber(number)`

- Adds a phone number to the list of phone numbers if it doesn't exist.

`removePhoneNumber(number)`

- Removes a phone number from the list of phone numbers.

`dialPhoneNumber(number)`

- Dials the specified phone number, notifying observers if it exists.


### Subscriber

The Observer class represents an observer that observes the subject and gets notified when a phone number is dialed.


### Constructor

This constructor takes in `name` as property.

```javascript

const observer = new Observer(name);

```

- name: The name of the observer.


### Methods

`update(number)`

- Notifies two observers. One of the observers gets notified of added phone number while the other gets notified of dialed phone number.

___

## How to use this package

1. fork this repository

2. navigate to the file directory

3. enter the following command in the terminal

```bash

node phonebook.js

```

___

## Expected Output

```bash

Subscribed: Second Observer has subscribed

Subscribed: Livinus has subscribed

Livinus has unsubscribed

Added phone number: 23470233232 has been added

Added phone number: 23480233232 has been added

Added phone number: 23490233232 has been added

23490233232 has been removed

Sorry, there's no phone number to remove.

Dialing 23470233232...

Sorry, Phone number does not exist. You can add a phone number and try again.
Phone Number: 23470233232
Dialing: 23470233232

```
___

## Contribution

For contribution and ideas, please make changes, push and make PR. Thank you.
