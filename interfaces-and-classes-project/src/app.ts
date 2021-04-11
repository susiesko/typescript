// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;

  constructor(n?: string, public age = 30) {
    if (n) this.name = n;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log('Hi!');
    }
  }
}

let user1: Greetable;

// user1 = {
//   name: 'Susie',
//   age: 34,
//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   },
// };

user1 = new Person('Susie');

user1.greet('Hi there, I am');
