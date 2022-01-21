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

//Object
let person: {
  name: string;
  age: number;
};

person = {
    name : 'naveen',
    age : 26
}

//Object Array
let people:  {
    name: string;
    age: number;
}[];

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

