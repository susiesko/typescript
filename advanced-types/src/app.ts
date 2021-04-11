// Code goes here!
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add('1', '2');
const result2 = add('1', '2');

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title);

const userInput = '';

const storedData = userInput || 'DEFAULT';

console.log(storedData);

throw new Error('Something went badly wrong!');
type UnknownEmployee = Employee | Admin;

function printEmployeeClientInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);

  if ('privileges' in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }

  if ('startDate' in emp) {
    console.log(`Start Date: ${emp.startDate}`);
  }
}

printEmployeeClientInformation({ name: 'Manu', startDate: new Date() });

class Car {
  drive() {
    console.log('Driving a car...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')!
// );
// const userInputElement = document.getElementById(
//   'user-input'
// )! as HTMLInputElement;
const userInputElement = document.getElementById('user-input');

if (userInputElement)
  (userInputElement as HTMLInputElement).value = 'Hi there!';

interface ErrorContainer {
  // {email: 'Not a valid email', username: 'Must start with a character'}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
};
