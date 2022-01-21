//Primitives: number, string, boolean
//More complex types: arrays, objects
//Function types, parameters

//Primitives

let age: number = 23;

age = 12

let userName: string;

userName = 'naveen.kumar'

let isReactAwsome = true;

//Complex Types

//Array
let courses: string[];

courses= ['React','Datastructure','Dimension Modeling']

type Person = {
  name: string;
  age: number;
}

//Object
let person: Person;

person = {
    name : 'naveen',
    age : 26
}

//Object Array
let people:  Person[];

people = [
  (person = {
    name: "naveen",
    age: 26,
  }),
  (person = {
    name: "kumar",
    age: 26,
  }),
];

//Type inference

let course = 'ss';
//Here course is initialized without explicitly specifying a type.
//so course variable is inferred as string type.
//It will give an error if we are type to assign value which is 
//other than a string.
//course = 22;

//Union Type

let unionType: string | number | boolean;
unionType = "a";
unionType = 1;
unionType = true;

//Function and Types

const add = (a: number, b: number): number => {
  return a + b;
};

const printOutput = (value: any): void => {
  console.log(value);
};

//Generics

const insertAtBeginnings= <T>(array: T[], value: T) => {
  const newArray = [value,...array];
  return newArray;  
};

const updatedArray = insertAtBeginnings([1, 2, 3], -1);
const stringArray = insertAtBeginnings(["a", "b", "c"], "d");

