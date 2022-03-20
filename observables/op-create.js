import { Subject } from "rxjs";
import { combineLatest, from } from "rxjs";

const s1 = new Subject();

const s2 = from([1, 2, 3]);

const stream = combineLatest([s1, s2]);

function observer(message) {
  console.log(message);
}

stream.subscribe(observer);

s1.next("one");
s1.next("three");
