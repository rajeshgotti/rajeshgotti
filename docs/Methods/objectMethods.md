---
hide:
 - toc
---

## Java Script Object Methods()

```
1. Object.assign(target, source): Copies properties from a source object to a target object
2.Object.entries(): ECMAScript 2017 added the Object.entries() method to objects.
  Object.entries() returns an array of the key/value pairs in an object:
3.The Object.entries(): Method makes it simple to use objects in loops:  
4.The Object.values(): Method Object.values() returns an array of values from an object:
```

```
// Create Target Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person2 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target
Object.assign(person1, person2);

output-
firstName,Anne,lastName,Smith,age,50,eyeColor,blue
(the key-values which are present in the person1 will come to person2 
note- but not the same key will come to person 2 
eg- lastname present in person1 and person2 if we do Object.assign(person1, person2); it takes only lastname of person1
)
```

### 2. JavaScript Object.entries()
### ECMAScript 2017 added the Object.entries() method to objects.
### Object.entries() returns an array of the key/value pairs in an object:
```
const person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};

let text = Object.entries(person);

output-
 firstName,John,lastName,Doe,age,50,eyeColor,blue
 (this just print the key-value in that given object )
 ```
 ### 3.The Object.entries() Method makes it simple to use objects in loops:
 ```
 const fruits = {Bananas:300, Oranges:200, Apples:500}; 

let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + ": " + amount + "<br>";
}
```
### NOTE: The Object.entries() Method makes it simple to convert an Object to a Map:
```
const fruits = {Bananas:300, Oranges:200, Apples:500}; 

const myMap = new Map(Object.entries(fruits));

output-[object Map]
```
### 4.The MethodObject.values() returns an array of values from an object:
```
const person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};

let text = Object.values(person)

output- John,Doe,50,blue
```