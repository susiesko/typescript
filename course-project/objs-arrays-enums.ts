// const person: {
//   name: string;
//   age: number;
// } = {
//   const person: {
//   name: string;
//   age: number;
//   hobbies: string[]; // typed array
//   role: [number, string]; // tuple
// } = {

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

  const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: number;
  } = {
//const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

// person.role.push('admin');
// console.log(person);
//person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

//console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}