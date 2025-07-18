
### For more array methods follow this link

<a href="https://www.programiz.com/java-programming/library/arraylist">
  1. Click here to open 1st URL
</a> <br>
<a href="https://www.programiz.com/javascript/library/array">
   2. Click here to open 2nd URL 
</a>

### URLS
```
https://www.programiz.com/java-programming/library/arraylist
https://www.programiz.com/javascript/library/array

```
<details>
  <summary>Test</summary>
  <img src="/images/method1.png" alt="Output image" style="max-width: 100%; height: auto;" />
</details>
<details>
  <summary>forEach & map 1</summary>
  <img src="/images/method2.png" alt="Output image" style="max-width: 100%; height: auto;" />
</details>
<details>
  <summary>forEach & map 2</summary>
  <img src="/images/method4.png" alt="Output image" style="max-width: 100%; height: auto;" />
</details>

<details>
  <summary>map & filter</summary>
  <img src="/images/method3.png" alt="Output image" style="max-width: 100%; height: auto;" />
</details>

<details>
  <summary>some 1</summary>
  <img src="/images/method5.png" alt="Output image" style="max-width: 100%; height: auto;" />
</details>
<details>
  <summary>some 2</summary>
  <img src="/images/method6.png" alt="Output image" style="max-width: 100%; height: auto;" />
</details>

<details>
  <summary>Every</summary>
  <img src="/images/method7.png" alt="Output image" style="max-width: 100%; height: auto;" />
</details>


```
1.concat() -> (returns new array ())
2.Javascript Array filter() -> returns a new array with all elements
3.Find() -> The find() method returns the value of the first array 
4.FindIndex() -> findIndex() method returns the index of the first array element
5.Array forEach()
6.Array.from() ->The from() method creates a new array from any 
                  array-like or iterable object
7.Array includes() -> The includes() method checks if an array
                      contains a specified element or not.
8.Array indexOf() :
  -> The indexOf() method returns the first index of occurance 
     of an array element, or -1 if it is not found.
9. Array lastIndexOf() :
  -> The lastIndexOf() method returns the index of the last occurrence 
      of a specified element in the array.
10. Array map() :
  -> The map() method creates a new array with the results of calling a
     function for every array element. 
11. Array slice() :
   ->(returns array)The slice() method returns a shallow copy of a
     portion of an array into a new arrayObject.
12. some() : Return Boolean value  
13. Array splice() : The splice() method modifies an array 
    (adds, removes or replaces elements). 
```

### 1.JavaScript Array concat()

### The concat() method returns a new array by merging two or more values/arrays.
???+ info "🔗 concat() — What It Does (Open by default)"

    - The `concat()` method is used to **merge arrays or add values** to a new array.
    - It **does not change** the existing arrays.
    - Returns a **new array** with the combined values.

    **Syntax:**
    ```javascript
    arr.concat(value1, value2, ..., valueN)
    ```

??? tip "💡 Tip: Add Arrays or Values Easily"

    You can use `concat()` to combine:
    - Two or more arrays.
    - Arrays with individual values.
    - Even mixed types (strings, numbers, etc.).

??? example "💻 Example 1: Join Two Arrays"

    ```javascript
    let primeNumbers = [2, 3, 5, 7];
    let evenNumbers = [2, 4, 6, 8];

    // Join two arrays 
    let joinedArrays = primeNumbers.concat(evenNumbers);
    console.log(joinedArrays);
    ```

    **Output:**
    ```javascript
    [ 2, 3, 5, 7, 2, 4, 6, 8 ]
    ```

??? example "💻 Example 2: Concatenating a Value and an Array"

    ```javascript
    let languages1 = ["JavaScript", "Python", "Java"];
    let languages2 = ["C", "C++"];

    var new_arr1 = languages2.concat("Lua", languages1);
    console.log(new_arr1);
    ```

    **Output:**
    ```javascript
    [ 'C', 'C++', 'Lua', 'JavaScript', 'Python', 'Java' ]
    ```

??? danger "⚠️ Remember"

    - `concat()` does **not mutate** the original arrays.
    - The returned result must be stored in a **new variable** (or reassigned) to use it.

??? info "🧾 Summary Table"

    | Feature               | concat()     |
    |-----------------------|--------------|
    | Returns new array?    | ✅ Yes        |
    | Modifies original?    | ❌ No         |
    | Return required?      | ✅ Yes        |
    | Purpose               | ✅ Merging arrays or adding values |
    | Good for logging?     | ❌ Not directly |

```
let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8]

// Join two arrays 
let joinedArrays = primeNumbers.concat(evenNumbers);
console.log(joinedArrays);

Output:
[
  2, 3, 5, 7,
  2, 4, 6, 8 
]
```
### Run Code concat() Syntax The syntax of the concat() method is:
```
arr.concat(value1, value2, ..., valueN)
```

### concatenating a value and array
```
var new_arr1 = languages2.concat("Lua", languages1);
console.log(new_arr1); // [ 'C', 'C++', 'Lua', 'JavaScript', 'Python', 'Java' ]
```

### 2.Javascript Array filter()

### The filter() method returns a new array with all elements that pass the test defined by the given function.

???+ info "🔍 filter() — What It Does (Open by default)"

    - `filter()` creates a **new array** with elements that **pass a condition**.
    - It **does not change** the original array.
    - Useful for narrowing down lists based on some criteria.

    **Basic Syntax:**
    ```javascript
    const newArray = originalArray.filter((element, index) => {
      return condition; // true to keep, false to exclude
    });
    ```

??? tip "💡 Tip: Use with Nested Structures"

    `filter()` works great when combined with `map()` to selectively modify parts of a nested array structure.

    - You can use it to **filter items inside an object** like `resultsData` inside `data`.

??? example "💻 Code Example: Filter Inside a Map"

    ```javascript
    const data = [ 
      {
        category: "Chemistry",
        isPanel: false,
        resultsData: [
          { patientResultItemsId: 61, patientResultId: 53, testDesc: "Body Fluid LDH" },
          { patientResultItemsId: 62, patientResultId: 54, testDesc: "Body Fluid LDH" },
          { patientResultItemsId: 65, patientResultId: 55, testDesc: "Abs Eos Manual" }
        ]
      }
    ];

    // Filter only those items with testDesc = "Body Fluid LDH"
    const filteredResults = data.map(section => {
      return {
        ...section,
        resultsData: section.resultsData.filter(item => item.testDesc === "Body Fluid LDH")
      };
    });

    console.log(filteredResults, 'filterdata');
    ```

??? danger "⚠️ Avoid Mutating the Original Array"

    `filter()` returns a **new array**, but if you assign it back to the same variable or mutate the reference manually, you may lose the original data unintentionally.

    Always **return a new object** or array when modifying nested structures (as shown in the `map` + `filter` combo above).

??? info "🧾 Summary Table"

    | Feature               | filter()     |
    |-----------------------|--------------|
    | Returns new array?    | ✅ Yes        |
    | Modifies original?    | ❌ No         |
    | Return required?      | ✅ Yes (true/false condition) |
    | Purpose               | ✅ Filtering elements |
    | Good for logging?     | ❌ Use forEach |

```
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to check even numbers
function checkEven(number) {
  if (number % 2 == 0)
    return true;
  else
    return false;
}

// create a new array by filter even numbers from the numbers array
let evenNumbers = numbers.filter(checkEven);
console.log(evenNumbers);

// Output: [ 2, 4, 6, 8, 10 ]
```

### 3.find() :  method returns the value of the first array element that satisfies the provided test function.

???+ info "🔍 find() — What It Does (Open by default)"

    - `find()` returns the **first** element in the array that satisfies the provided testing function.
    - It stops as soon as it finds the **first match**.
    - If no elements satisfy the function, it returns `undefined`.

    **Syntax:**
    ```javascript
    array.find(callback(element, index, array))
    ```

??? tip "💡 When to Use find()"

    - When you want **only the first match**, not all matches (use `filter()` for that).
    - When working with objects and you need to get the **whole object**.

??? example "💻 Example 1: Basic Even Number Check"

    ```javascript
    let numbers = [1, 3, 4, 9, 8];

    function isEven(element) {
      return element % 2 == 0;
    }

    let evenNumber = numbers.find(isEven);
    console.log(evenNumber); // 4
    ```

    ✅ It returned the **first** even number (`4`), not `8`.

??? example "💻 Example 2: Using Arrow Function"

    ```javascript
    let randomArray = [1, 45, 8, 98, 7];

    let firstEven = randomArray.find((element) => element % 2 === 0);
    console.log(firstEven); // 8

    let firstOdd = randomArray.find((element) => element % 2 === 1);
    console.log(firstOdd); // 1
    ```

??? example "💻 Example 3: Finding an Object with Condition"

    ```javascript
    const team = [
      { name: "Bill", age: 10 },
      { name: "Linus", age: 15 },
      { name: "Alan", age: 20 },
      { name: "Steve", age: 34 },
    ];

    function isAdult(member) {
      return member.age >= 18;
    }

    console.log(team.find(isAdult)); // { name: 'Alan', age: 20 }

    // Arrow function with destructuring
    let adultMember = team.find(({ age }) => age >= 18);
    console.log(adultMember); // { name: 'Alan', age: 20 }
    ```

??? danger "⚠️ Common Mistake"

    - Thinking `find()` returns **all matches** – it **only returns the first**.
    - If you need multiple matches, use `filter()` instead.

??? info "🧾 Summary Table"

    | Feature               | find()        |
    |-----------------------|---------------|
    | Returns new array?    | ❌ No          |
    | Modifies original?    | ❌ No          |
    | Return required?      | ✅ Returns a single item |
    | Purpose               | ✅ Get the **first match** |
    | Good for logging?     | ✅ Yes         |

```

let numbers = [1, 3, 4, 9, 8];

  // function to check even number
  
    function isEven(element) {
       return element % 2 == 0;
     }

   // get the first even number
    let evenNumber = numbers.find(isEven); //find () 
    console.log(evenNumber);

    Output: 4 // see here it returned only 1st satisfied value
```
### Arrow function syntax: ()=>{}

```
function isEven(element) {
  return element % 2 == 0;
}

let randomArray = [1, 45, 8, 98, 7];

let firstEven = randomArray.find(isEven);
console.log(firstEven); // 8

// using arrow operator
let firstOdd = randomArray.find((element) => element % 2 == 1); //arrowFunction
console.log(firstOdd); // 1
```
### find returns the complete object with elements
```
const team = [
  { name: "Bill", age: 10 },
  { name: "Linus", age: 15 },
  { name: "Alan", age: 20 },
  { name: "Steve", age: 34 },
];

function isAdult(member) {
  return member.age >= 18;
}

console.log(team.find(isAdult)); // { name: 'Alan', age: 20 }

// using arrow function and deconstructing
let adultMember = team.find(({ age }) => age >= 18);

console.log(adultMember); // { name: 'Alan', age: 20 }
```
### 4.Array findIndex(): The findIndex() method returns the index of the first array element that satisfies the provided test function or else returns -1.
???+ info "🔍 findIndex() — What It Does (Open by Default)"

    - Returns the **index** of the **first element** that satisfies a provided condition.
    - If **no match**, returns `-1`.
    - Does **not** mutate the original array.

    **Syntax:**
    ```javascript
    array.findIndex(callbackFn(element, index, array), thisArg)
    ```

    - `callbackFn`: Function to execute on each element.
    - `thisArg`: Optional context (`this`) to use in callback.

??? example "💻 Example 1: Find First Odd Number"

    ```javascript
    function isOdd(element) {
      return element % 2 !== 0;
    }

    let numbers = [2, 8, 1, 3, 4];

    let firstOdd = numbers.findIndex(isOdd);
    console.log(firstOdd); // Output: 2
    ```

??? example "💻 Example 2: Find First Even Number"

    ```javascript
    function isEven(element) {
      return element % 2 == 0;
    }

    let numbers = [1, 45, 8, 98, 7];

    let firstEven = numbers.findIndex(isEven);
    console.log(firstEven); // Output: 2
    ```

??? example "💻 Example 3: Using Arrow Function"

    ```javascript
    let days = ["Sunday", "Wednesday", "Tuesday", "Friday"];

    let index = days.findIndex((day) => day === "Wednesday");
    console.log(index); // Output: 1
    ```

??? tip "💡 Use Case"

    Use `findIndex()` when you need the **position** of the first item that matches a condition.  
    If you need the **value**, use `find()` instead.

??? danger "⚠️ Gotchas"

    - Returns `-1` if no element passes the test — **not undefined!**
    - Stops at the **first match**, even if more elements qualify.

??? info "🧾 Summary Table"

    | Feature              | findIndex()          |
    |----------------------|----------------------|
    | Returns value?       | ❌ No (returns index) |
    | Returns -1 if no match? | ✅ Yes             |
    | Modifies original?   | ❌ No                |
    | Purpose              | ✅ Find index by condition |

```
// function that returns odd number
function isOdd(element) {
  return element % 2 !== 0;
}

// defining an array of integers
let numbers = [2, 8, 1, 3, 4];

// returns the index of the first odd number in the array
let firstOdd = numbers.findIndex(isOdd);

console.log(firstOdd);

// Output: 2
```
### Example:2

```
// function that returns even number
function isEven(element) {
  return element % 2 == 0;
}

// defining an array of integers
let numbers = [1, 45, 8, 98, 7];

// returns the index of the first even number in the array
let firstEven = numbers.findIndex(isEven);

console.log(firstEven); // 2
```
### Arrow function

```
// defining an array
let days = ["Sunday", "Wednesday", "Tuesday", "Friday"];

// returns the first index of 'Wednesday' in the array
let index = days.findIndex((day) => day === "Wednesday");

console.log(index); // 1
```

### 5.Javascript Array forEach()

???+ info "🔁 forEach() — What It Does (Open by default)"

    - Executes a **callback function** once for **each array element**
    - Does **not** return a new array
    - Does **not** modify the original array, unless **explicitly** done inside the callback

    **Basic Syntax:**
    ```javascript
    array.forEach((element, index) => {
      // Do something with element
    });
    ```

??? tip "💡 Tip: Use When You Need to Loop"

    `forEach()` is ideal when:
    
    - You need to **iterate** over elements
    - You want to **log, modify**, or perform side effects
    - You **don’t** need a returned value

??? danger "⚠️ Common Mistake: Expecting a Return Value"

    Many developers expect `forEach()` to return a new array — **but it returns `undefined`**.

    ```javascript
    const nums = [1, 2, 3];
    const result = nums.forEach(n => n * 2);
    console.log(result); // undefined ❗
    ```

    ❗ **Use `.map()` if you want to return a transformed array:**

    ```javascript
    const doubled = nums.map(n => n * 2);
    console.log(doubled); // [2, 4, 6]
    ```

??? example "💻 Code Example"

    ```javascript
    const fruits = ["apple", "banana", "cherry"];

    fruits.forEach((fruit, index) => {
      console.log(`${index + 1}: ${fruit}`);
    });
    ```

    ✅ Output:
    ```
    1: apple
    2: banana
    3: cherry
    ```

```
let numbers = [1, 3, 4, 9, 8];

// function to compute square of each number
function computeSquare(element) {
  console.log(element * element);
}

// compute square root of each element
numbers.forEach(computeSquare);

/* Output:
1
9 
16
81
64
```
### arrow function

```
const numbers = [1, 2, 3, 4, 5];

// Using arrow function in forEach
numbers.forEach((num, index) => {
  console.log(`Element at index ${index} is ${num}`);
});

output 

Element at index 0 is 1
Element at index 1 is 2
Element at index 2 is 3
Element at index 3 is 4
Element at index 4 is 5
```
### 6.Javascript Array.from(): The from() method creates a new array from any array-like or iterable object.
???+ info "🆕 Array.from() — What It Does (Open by Default)"

    - Creates a **new array** from an **array-like** or **iterable** object.
    - Useful for converting strings, sets, maps, or even arguments into arrays.
    - Returns a **shallow-copied** new array.

    **Syntax:**
    ```javascript
    Array.from(arrayLike, mapFn, thisArg)
    ```
    - `arrayLike`: Iterable object (like a string or NodeList)
    - `mapFn` *(optional)*: Function to call on every element
    - `thisArg` *(optional)*: Value to use as `this` in `mapFn`

??? example "💻 Example 1: Convert String to Array"

    ```javascript
    let newArray = Array.from("abc");
    console.log(newArray); 
    // Output: [ 'a', 'b', 'c' ]
    ```

??? example "💻 Example 2: With Mapping Function"

    ```javascript
    let squares = Array.from([1, 2, 3], x => x * x);
    console.log(squares); 
    // Output: [1, 4, 9]
    ```

??? example "💻 Example 3: Convert Set to Array"

    ```javascript
    const set = new Set(["apple", "banana"]);
    const arr = Array.from(set);
    console.log(arr); 
    // Output: [ 'apple', 'banana' ]
    ```

??? tip "💡 Use Cases"

    - Convert a string to a character array
    - Clone or transform a Set/Map into an array
    - Convert NodeList (from DOM) to an array

??? danger "⚠️ Gotchas"

    - Doesn't work on non-iterables (like objects) unless you provide a way to iterate
    - Use `.split('')` for strings if you don't need mapping logic

??? info "🧾 Summary Table"

    | Feature                   | Array.from()                  |
    |---------------------------|-------------------------------|
    | Creates new array?        | ✅ Yes                        |
    | Works on iterables?       | ✅ Yes (e.g., strings, Sets)  |
    | Can transform elements?   | ✅ Yes (with mapFn)           |
    | Modifies original input?  | ❌ No                         |

```
// creating a new array from string
let newArray = Array.from("abc");

console.log(newArray);

// Output:
// [ 'a', 'b', 'c' ]
```

### 7.JavaScript Array includes(): The includes() method checks if an array contains a specified element or not.
???+ info "🔍 includes() — What It Does (Open by default)"

    - The `includes()` method checks whether an array contains a certain **element**.
    - Returns `true` if found, otherwise `false`.
    - Case-sensitive & does not search partial strings.
  
    **Syntax:**
    ```javascript
    array.includes(searchElement, fromIndex)
    ```

??? tip "💡 When to Use includes()"

    - To perform **simple existence checks** in an array.
    - More readable and cleaner than using `indexOf(...) !== -1`.

??? example "💻 Example: Basic Check"

    ```javascript
    // defining an array
    let languages = ["JavaScript", "Java", "C"];

    // checking whether the array contains 'Java'
    let check = languages.includes("Java");

    console.log(check); // true
    ```

??? example "💻 Example: Case-Sensitivity and Index"

    ```javascript
    let fruits = ["apple", "banana", "cherry"];

    console.log(fruits.includes("Banana")); // false ❌ (case-sensitive)
    console.log(fruits.includes("banana")); // true ✅

    // using fromIndex
    console.log(fruits.includes("apple", 1)); // false
    ```

??? danger "⚠️ Common Mistakes"

    - ❌ Using wrong case (e.g., `'Java'` vs `'java'`)
    - ❌ Expecting partial match like `'ava'` — it must be exact match.

??? info "🧾 Summary Table"

    | Feature               | includes()   |
    |-----------------------|--------------|
    | Returns new array?    | ❌ No         |
    | Modifies original?    | ❌ No         |
    | Return required?      | ✅ Returns boolean |
    | Purpose               | ✅ Check if array has an element |
    | Case-sensitive?       | ✅ Yes        |

```
// defining an array
let languages = ["JavaScript", "Java", "C"];

// checking whether the array contains 'Java'
let check = languages.includes("Java");

console.log(check); 

// Output: true
```
#### 8.JavaScript Array indexOf(): The indexOf() method returns the first index of occurance of an array element, or -1 if it is not found.
???+ info "🔎 indexOf() — What It Does (Open by Default)"

    - The `indexOf()` method returns the **first index** at which a given element can be found in the array.
    - Returns `-1` if the element is **not found**.
    - Search is case-sensitive and starts from the beginning (unless `fromIndex` is specified).

    **Syntax:**
    ```javascript
    array.indexOf(searchElement, fromIndex)
    ```

??? tip "💡 When to Use indexOf()"

    - To find the **position** of an element in an array.
    - Can be useful in `if` conditions or for modifying/replacing values at that index.

??? example "💻 Example: Basic Usage"

    ```javascript
    let languages = ["Java", "JavaScript", "Python", "JavaScript"];

    // get the index of the first occurrence of "JavaScript"
    let index = languages.indexOf("JavaScript");

    console.log(index); // Output: 1
    ```

??? example "💻 Example: From Specific Index & Not Found Case"

    ```javascript
    let langs = ["C", "Java", "Python", "Java"];

    // Starts searching from index 2
    console.log(langs.indexOf("Java", 2)); // 3 ✅

    // Element not in array
    console.log(langs.indexOf("Ruby")); // -1 ❌
    ```

??? danger "⚠️ Common Pitfalls"

    - ❌ `indexOf()` is **case-sensitive**
    - ❌ Returns only the **first match** — doesn't find all indexes

??? info "🧾 Summary Table"

    | Feature             | indexOf()       |
    |---------------------|-----------------|
    | Returns new array?  | ❌ No           |
    | Modifies original?  | ❌ No           |
    | Return type         | ✅ Number       |
    | Case-sensitive?     | ✅ Yes          |
    | Use case            | ✅ Find first match index |

```
let languages = ["Java", "JavaScript", "Python", "JavaScript"];

// get the index of the first occurrence of "JavaScript"
let index = languages.indexOf("JavaScript");
console.log(index);

// Output: 1
```

### 9.JavaScript Array lastIndexOf():  The lastIndexOf() method returns the index of the last occurrence of a specified element in the array.
```
let priceList = [10, 8, 2, 31, 10, 31, 65];

// finding the index of the last occurence of 31
let lastIndex = priceList.lastIndexOf(31);

console.log(lastIndex); 

// Output: 5
```
```
let alphabets = ["a", "b", "c", "a", "d"];

// finding the index of the last occurence of 'a'
let lastIndex1 = alphabets.lastIndexOf("a");

console.log(lastIndex1);

// finding the index of the last occurence of 'e'
let lastIndex2 = alphabets.lastIndexOf("e");

console.log(lastIndex2);
```
### 10.JavaScript Array map(): The map() method creates a new array with the results of calling a function for every array element.

???+ info "🔄 map() — Overview (Open by default)"

    - `map()` creates a **new array** by applying a function to each element of the original array.
    - Ideal for **transforming data**, not side effects (like logging).
    - The **original array remains unchanged**.

    **Basic Syntax:**
    ```javascript
    const newArray = originalArray.map((element, index) => {
      // return transformed element
    });
    ```

    `index` is optional in the callback.

??? tip "💡 Tip: Use map() for Data Transformation"

    - Use when you need to **create a modified version** of your array.
    - Every callback **must return** a value.
    - Great for extracting properties or converting data types.

??? example "💻 Code Example"

    ```javascript
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" }
    ];

    const names = users.map(user => user.name);

    console.log(names); // ["Alice", "Bob"]
    ```

??? danger "⚠️ Don’t Use map() Just for Logging"

    `map()` should **return a value**, so using it only for logging is a mistake.

    ```javascript
    const arr = [1, 2, 3];

    arr.map(num => {
      console.log(num); // ✅ logs, but ❌ wastes map
    });
    ```

    ❗ **Better Alternative:**
    ```javascript
    arr.forEach(num => {
      console.log(num); // ✅ correct usage
    });
    ```

??? info "🧾 Summary Table"

    | Feature               | map()        |
    |-----------------------|--------------|
    | Returns new array?    | ✅ Yes        |
    | Modifies original?    | ❌ No         |
    | Return required?      | ✅ Yes        |
    | Purpose               | ✅ Transforming data |
    | Good for logging?     | ❌ Use forEach |

```
let numbers = [2, 4, 6, 8, 10];

// function to return the square of a number
function square(number) {
  return number * number;
}

// apply square() function to each item of the numbers list
let square_numbers = numbers.map(square);
console.log(square_numbers);

// Output: [ 4, 16, 36, 64, 100 ]
```
### Arraow function
```
// custom arrow function
const string = "JavaScript";
const stringArr = string.split(''); // array with individual string character

let asciiArr = stringArr.map(x => x.charCodeAt(0));
```
### 11.JavaScript Array slice(): (returns array ) The slice() method returns a shallow copy of a portion of an array into a new array object.
???+ info "✂️ slice() — What It Does (Open by Default)"

    - The `slice()` method returns a **shallow copy** of a portion of an array.
    - It takes **start** and **end (optional)** index arguments and extracts up to (but not including) the `end` index.
    - **Original array remains unchanged**.

    **Syntax:**
    ```javascript
    array.slice(start, end)
    ```

??? tip "💡 When to Use slice()"

    - When you want to **copy** a portion of an array.
    - When you want a **safe, non-mutating** way to access subarrays.

??? example "💻 Example: Basic Slicing"

    ```javascript
    let numbers = [2, 3, 5, 7, 11, 13, 17];

    // create another array by slicing numbers from index 3 to 5
    let newArray = numbers.slice(3, 6);

    console.log(newArray); // Output: [ 7, 11, 13 ]
    ```

??? example "💻 Example: Different slice Scenarios"

    ```javascript
    let languages = ["JavaScript", "Python", "C", "C++", "Java"];

    // Full copy of array
    let new_arr = languages.slice();
    console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++', 'Java' ]

    // From 3rd element to end
    let new_arr1 = languages.slice(2);
    console.log(new_arr1); // [ 'C', 'C++', 'Java' ]

    // From 2nd to 4th element (index 1 to 3)
    let new_arr2 = languages.slice(1, 4);
    console.log(new_arr2); // [ 'Python', 'C', 'C++' ]
    ```

??? danger "⚠️ Common Mistakes"

    - ❗ `slice()` does **not include the end index**.
    - ❗ It does **not modify the original array** — this is useful but easy to forget.
    - ❗ Negative indices count from the end.

??? info "🧾 Summary Table"

    | Feature             | slice()         |
    |---------------------|-----------------|
    | Returns new array?  | ✅ Yes          |
    | Modifies original?  | ❌ No           |
    | Return type         | ✅ Array        |
    | End index included? | ❌ No           |
    | Use case            | ✅ Safe subarray copies |

```
let numbers = [2, 3, 5, 7, 11, 13, 17];

// create another array by slicing numbers from index 3 to 5
let newArray = numbers.slice(3, 6);
console.log(newArray);

// Output: [ 7, 11, 13 ]
```
```
let languages = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array (from start to end)
let new_arr = languages.slice();
console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++', 'Java' ]

// slicing from the third element
let new_arr1 = languages.slice(2);
console.log(new_arr1); // [ 'C', 'C++', 'Java' ]

// slicing from the second element to fourth element
let new_arr2 = languages.slice(1, 4);
console.log(new_arr2); // [ 'Python', 'C', 'C++' ]
```
### 12.Javascript Array some() : (returns boolen)
???+ info "🔍 some() — What It Does (Open by Default)"

    - `some()` checks whether **at least one element** in the array passes the test implemented by the callback function.
    - Returns `true` if **any** element satisfies the condition, otherwise returns `false`.
    - **Does not modify** the original array.

    **Syntax:**
    ```javascript
    array.some(callback(element[, index[, array]])[, thisArg])
    ```

??? tip "💡 When to Use some()"

    - When you need to **check for presence** of at least one matching condition.
    - Ideal for **early exits**—it stops once a match is found.

??? example "💻 Example: Basic Usage"

    ```javascript
    // a test function: returns true for even numbers
    function isEven(element) {
      return element % 2 === 0;
    }

    // defining an array
    let numbers = [1, 3, 2, 5, 4];

    // checks whether the array contains at least one even number
    console.log(numbers.some(isEven)); // Output: true
    ```

??? example "💻 Example: Using Arrow Function"

    ```javascript
    let nums = [5, 7, 9, 11];

    // checking for even number
    let hasEven = nums.some(num => num % 2 === 0);

    console.log(hasEven); // Output: false
    ```

??? danger "⚠️ Common Mistakes"

    - ❗ `some()` returns a **boolean**, not the element itself.
    - ❗ It **short-circuits**—stops checking once a `true` is returned.

??? info "🧾 Summary Table"

    | Feature             | some()         |
    |---------------------|-----------------|
    | Returns new array?  | ❌ No           |
    | Modifies original?  | ❌ No           |
    | Return type         | ✅ Boolean      |
    | Stops early?        | ✅ Yes          |
    | Use case            | ✅ Existence check |

```
// a test function: returns an even number
function isEven(element) {
  return element % 2 === 0;
}

// defining an array
let numbers = [1, 3, 2, 5, 4];

// checks whether the numbers array contain at least one even number
console.log(numbers.some(isEven));

// Output: true 
```
### Every()
### 13. `.every()` — Check If All Elements Pass a Test

???+ info "What It Does"

    - Tests whether **all elements** in the array **pass a test function**
    - Returns `true` only if **every element** meets the condition
    - Stops checking once a **falsy result** is found

??? example "Example"

    ```javascript
    // Test function: checks if element is even
    function isEven(element) {
      return element % 2 === 0;
    }

    // Array to test
    const numbers = [2, 4, 6, 8];

    // Checks if all elements are even
    console.log(numbers.every(isEven)); // true
    ```

    ✅ Output:
    ```
    true
    ```

??? tip "When to Use"

    - ✅ Validate if **all fields** in a form are filled:
      ```javascript
      const formFields = ["John", "Doe", "john@example.com"];
      const isValid = formFields.every(field => field.trim() !== "");
      console.log(isValid); // true
      ```

    - ✅ Check if **all products are in stock**:
      ```javascript
      const products = [
        { name: "Book", inStock: true },
        { name: "Pen", inStock: true }
      ];
      const allAvailable = products.every(p => p.inStock);
      console.log(allAvailable); // true
      ```

    - ✅ Ensure all numbers are **positive**:
      ```javascript
      const nums = [5, 10, 8];
      const allPositive = nums.every(n => n > 0);
      console.log(allPositive); // true
      ```


###  13: Array splice() : The splice() method modifies an array (adds, removes or replaces elements). 
```
1. Remove Elements:
   Remove 2 elements starting from index 1 (removes 2 and 3 from the array).
   let arr = [1, 2, 3, 4, 5];
   arr.splice(1, 2);  // Removes elements at index 1 and 2
   console.log(arr);  // Output: [1, 4, 5]

2. Add Elements:
   Add elements starting from index 2. This does not remove anything.
   let arr = [1, 2, 3, 4, 5];
   arr.splice(2, 0, 'a', 'b');  // Adds 'a' and 'b' at index 2, without removing 
    any element
   console.log(arr);  // Output: [1, 2, 'a', 'b', 3, 4, 5]

3. Replace Elements:
   Remove 2 elements starting from index 1, and add new elements in their place.
   let arr = [1, 2, 3, 4, 5];
   arr.splice(1, 2, 'x', 'y');  // Removes '2' and '3', and adds 'x' and 'y'
   console.log(arr);  // Output: [1, 'x', 'y', 4, 5]

4. Remove the Last Element:
   If you want to remove just the last element of an array, use splice()
    with the last index of the array:

let arr = [1, 2, 3, 4, 5];
arr.splice(arr.length - 1, 1);  // Removes the last element
console.log(arr);  // Output: [1, 2, 3, 4]
Practical Use Case for splice():
Removing an element by index: When you need to delete a specific element 
from an array, such as when the user deletes a row or item from a list.
 This is exactly what you are doing in the delete() method in your code.

Inserting or replacing elements: If you need to update an existing item or
insert new items into an array at a specific position, splice() is a great
 way to do it.

```

???+ info "✂️ splice() — What It Does (Open by Default)"

    - `splice()` changes the contents of an array by **removing**, **replacing**, or **adding** elements in place.
    - **Modifies** the original array and returns an array of the removed elements.

    **Syntax:**
    ```javascript
    array.splice(start, deleteCount, item1, item2, ...)
    ```
    - `start`: Index to begin changes.
    - `deleteCount`: Number of items to remove.
    - `item1, item2, ...`: Optional values to insert.

??? tip "💡 Use Cases"

    - Insert elements into a specific index.
    - Remove elements from a certain position.
    - Replace elements with new ones.

??? example "💻 Example: Replace One Element"

    ```javascript
    let prime_numbers = [2, 3, 5, 7, 9, 11];

    // replace 1 element from index 4 with 13
    let removedElement = prime_numbers.splice(4, 1, 13);

    console.log(removedElement);     // Output: [ 9 ]
    console.log(prime_numbers);      // Output: [ 2, 3, 5, 7, 13, 11 ]
    ```

??? example "💻 Example: Add Elements Without Deletion"

    ```javascript
    let nums = [1, 2, 5];

    // insert 3 and 4 at index 2
    nums.splice(2, 0, 3, 4);

    console.log(nums); // Output: [1, 2, 3, 4, 5]
    ```

??? danger "⚠️ Common Pitfalls"

    - ❗ `splice()` **mutates** the original array.
    - ❗ Returns the removed elements — not the updated array.

??? info "🧾 Summary Table"

    | Feature             | splice()              |
    |---------------------|------------------------|
    | Returns new array?  | ✅ Removed items only  |
    | Modifies original?  | ✅ Yes                 |
    | Return required?    | ✅ Optional insert     |
    | Purpose              | ✅ Add / Remove / Replace |

```
let prime_numbers = [2, 3, 5, 7, 9, 11];

// replace 1 element from index 4 by 13
let removedElement = prime_numbers.splice(4, 1, 13);
console.log(removedElement);
console.log(prime_numbers);

// Output: [ 9 ]
//         [ 2, 3, 5, 7, 13, 11 ]
```
???+ info "13. 🧩 `Array.from()` — Convert to Array from Iterable or Array-like"
    - Converts array-like or iterable objects (e.g. strings, sets, NodeLists) into a **real array**
    - You can also **map** each element during conversion

    ```js
    // Convert a string to an array of characters
    const str = "Hello";
    console.log(Array.from(str)); // ["H", "e", "l", "l", "o"]
    ```

    ```js
    // Convert a Set to an array
    const uniqueNums = new Set([1, 2, 3]);
    console.log(Array.from(uniqueNums)); // [1, 2, 3]
    ```

    ```js
    // Apply a map function while converting
    const nums = [1, 2, 3];
    const doubled = Array.from(nums, x => x * 2);
    console.log(doubled); // [2, 4, 6]
    ```

    ```js
    // Generate array of N values
    const size = 5;
    const filled = Array.from({ length: size }, (_, i) => i + 1);
    console.log(filled); // [1, 2, 3, 4, 5]
    ```
