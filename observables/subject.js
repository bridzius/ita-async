import { Subject } from "rxjs";

const subject = new Subject();

function observerOne(message) {
  console.log(`Observer1: ${message}`);
}

function observerTwo(message) {
  console.log(`Observer2: ${message}`);
}

subject.subscribe(observerOne);

subject.next("This");
subject.next("Is");
console.log("Not");

subject.subscribe(observerTwo);

subject.next("Sparta");

