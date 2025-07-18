<!-- 
```
1.Length() Method -> (returns string)
2.repeat(): (retuns string)
3.replace(): (returns the new string )
4.replaceAll(): (returns the new string) it is replace with every word or
                                                     charector in it
5.search(): (returns number)
6.slice() method: (returns new string)
7.split(): (returns string) The split string method in javascript divides
           the given string intro substring and returns an array of substrings.
8.startsWith(): (returns boolean) 
9.substring() : (returns string)
10.To lowercase(),To upper case() :(returns the new string) to covert 
                               LowerCase to convert into upper case
11.trim(): (returns string) 
12.valueOf(): The valueOf() string method in javascript returns the 
                            primitive value of a String object.
```

### 1.Length() Method : (returns string) These methods return a new string with little change from the original string. The length is a string property that is used to find the length of a string. It returns the number of characters in the string including spaces. Read-only means that the strings created in JavaScript are immutable The length property returns the number of characters in a string.

```
var str = "Hello World";
  str.length; // 11
```
### 2. repeat : (retuns string) The repeat() method concatenates a passed string by a specified number of times and return it as a new string.
### A number of times string is to be repeated is passed as an argument in the method, where the number lies between 0 and +Infinity. If a decimal value is passed then it will be converted to an Integer when passed. The method reports an error for a negative number.

``` title="Example.html"
const str = "Tick tock, ";

// repeat the string by 2 times
console.log(str.repeat(2));
// converts the decimal value to integer
console.log(str.repeat(3.5));
// repeat 0 times
console.log(str.repeat(0));

```
### 3.replace : (returns the new string )
```
const message = "bbb ccc";

// replace the first b with c
let result = message.replace('b', 'c');
console.log(result);

resut = "cbb ccc"  here we can see that only starting value is changed here 
```
### 4.replaceAll(): (returns the new string) it is replace with every word or charector in it

### Note: While using regular expression in the replaceAll() method using a global flag (g) is compulsory with it otherwise it will throw a 'TypeError'

```
const str = "Carbon emission is increasing day by day.";

// select all match using both string or regular expression
console.log(str.replaceAll("day", "year"));
console.log(str.replaceAll(/day/g, "month"));

Carbon emission is increasing year by year.
Carbon emission is increasing month by month.
```
### search: (returns number)
### returns the index of the match string search also work as same as the match String match() and String search() The match() method returns an array of matches. The search() method returns the position of the first match.

```
const text = "The quick brown fox jumps over the lazy dog.";
const index = text.search("fox");

console.log(index); // Output: 16
```
### slice method: (returns new string) The slice string method in javascript extracts a part of the string and returns it as a new string.
### slice consist of 2 indexs or argumenst
#### str.slice(startindx , lastindex )- print between those values

```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

output - Orange,Lemon
```
### 7.split: (returns string) The split string method in javascript divides the given string intro substring and returns an array of substrings.
```
const sentence = "Carbon emission is increasing day by day";

// no pattern -> return whole string in array
console.log(sentence.split());
// split at each space
console.log(sentence.split(''));
// split at each space
console.log(sentence.split(' '));
// split at each 'is'
console.log(sentence.split('is'));

console.log("ABCDEF".split("")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

const text = "Java is awesome. Java is fun.";

let pattern = ".";
let newText = text.split(pattern);
console.log(newText); // [ 'Java is awesome', ' Java is fun', '' ]

let pattern1 = ".";
// only split string to maximum to parts
let newText1 = text.split(pattern1, 2);
console.log(newText1); // [ 'Java is awesome', ' Java is fun' ]

const text2 = "JavaScript ;  Python ;C;C++";
let pattern2 = ";";
let newText2 = text2.split(pattern2);
console.log(newText2); // [ 'JavaScript ', '  Python ', 'C', 'C++' ]

// using RegEx
let pattern3 = /\s*(?:;|$)\s*/;
let newText3 = text2.split(pattern3);
console.log(newText3); // [ 'JavaScript', 'Python', 'C', 'C++' ]
```
### 8.startsWith: (returns boolean) The startsWith string method in javascript determines whether a string starts with some given substring or not. If it starts with the desired string then it returns true else return false.
### The search string is passed as the first argument to the method. There is also an optional argument that defines the position from where the method should start checking. The startsWith method is case-sensitive.
``` title="Example"
Example:
const sentence = "Carbon emission is increasing day by day";
console.log(sentence.startsWith("Car"));
console.log(sentence.startsWith("carbon")); // return false case-sensitive
```
### 9.substring: (returns string) The substring method in JavaScript is used to extract a part of a string between two indices or positions. It's a common method and can be used within any JavaScript code, including Angular components.
```
string.substring(startIndex, endIndex)

```
### startIndex: The position where the extraction begins. endIndex (optional): The position where the extraction ends (but does not include the character at this index). If omitted, the method will extract to the end of the string.

```
fullText: string = 'Hello, Angular!';
extractedText: string;
// Extract a substring starting from index 7 to the end
this.extractedText = this.fullText.substring(7);
// Output: 'Angular!'

// Extract a substring from index 7 to 13 (not including 13)
const partialText = this.fullText.substring(7, 13);
console.log(partialText); // Output: 'Angular'
```
### differnce between substring and substr

```
string.substring(startIndex, endIndex)
string.substr(startIndex, length)
```
```
let text = "JavaScript";

// Extracts 6 characters starting from index 4
console.log(text.substr(4, 6)); // Output: "Script"

// Extracts from the end of the string if negative index is provided
console.log(text.substr(-6, 6)); // Output: "Script"

// Extracts to the end if length is omitted
console.log(text.substr(4)); // Output: "Script"
```
``` title="substr"
let text = "JavaScript";

// Extracts 6 characters starting from index 4
console.log(text.substr(4, 6)); // Output: "Script"

// Extracts from the end of the string if negative index is provided
console.log(text.substr(-6, 6)); // Output: "Script"

// Extracts to the end if length is omitted
console.log(text.substr(4)); // Output: "Script"
```
### Use substring() if you need to work with two indices, or if you are concerned about browser compatibility and future-proofing your code. Use substr() if you need to extract a specific number of characters from a certain position, but keep in mind that it is deprecated.

### 11: trim(): (returns string) The trim() string method in javascript removes whitespaces from both ends of the string. Whitespaces are space, tabs, newline, etc.
```title="Example"
const str = "    TutorialsTonight    ";
console.log(str.trim());

oputput- TutorialsTonight
```
### 12: valueOf: The valueOf() string method in javascript returns the primitive value of a String object.
```title="Example"
const str = new String("hello world");
console.log(str.valueOf(str))

output - Hello world without string 
``` -->
 ### STRING METHODS()
```
1.Length() Method -> (returns string)
2.repeat(): (retuns string)
3.replace(): (returns the new string )
4.replaceAll(): (returns the new string) it is replace with every word or
                                                     charector in it
5.search(): (returns number)
6.slice() method: (returns new string)
7.split(): (returns string) The split string method in javascript divides
           the given string intro substring and returns an array of substrings.
8.startsWith(): (returns boolean) 
9.substring() : (returns string)
10.To lowercase(),To upper case() :(returns the new string) to covert 
                               LowerCase to convert into upper case
11.trim(): (returns string) 
12.valueOf(): The valueOf() string method in javascript returns the 
                            primitive value of a String object.
```

### 1. `.length` — Get String Length

???+ info "What `.length` Does"

    - Returns the **number of characters** in a string, including **spaces**
    - It’s a **property**, not a function — so **no parentheses**
    - JavaScript strings are **immutable**, so the length cannot be changed

    **Syntax:**
    ```javascript
    string.length
    ```

??? tip "Use Cases with Examples"

    - Get the **character count**  
      `const msg = "Welcome!"; console.log(msg.length); // 8`

    - Validate **input length** in forms  
      `if (username.length < 3) alert("Username too short!");`

    - Loop or slice strings based on size  
      `for (let i = 0; i < str.length; i++) { console.log(str[i]); }`

??? danger "Common Confusion"

    Developers often confuse `.length` with a method — but it's a property:

    ```javascript
    const str = "Hello World";

    console.log(str.length);   // ✅ 11
    console.log(str.length()); // ❌ TypeError: str.length is not a function
    ```

??? example "Code Example"

    ```javascript
    var str = "Hello World";
    console.log(str.length); // 11
    ```

### 1.Length() Method : (returns string) These methods return a new string with little change from the original string. The length is a string property that is used to find the length of a string. It returns the number of characters in the string including spaces. Read-only means that the strings created in JavaScript are immutable The length property returns the number of characters in a string.

```
var str = "Hello World";
  str.length; // 11
  
```
### 2. `.repeat()` — Repeat a String

???+ info "What `.repeat()` Does"

    - Returns a **new string** with the original string **repeated n times**
    - Takes a **number** as the argument (between 0 and Infinity)
    - If given a **decimal**, it is **converted to an integer**
    - Throws a **RangeError** for negative numbers

    **Syntax:**
    ```javascript
    string.repeat(count)
    ```

??? tip "Use Cases with Examples"

    - Create **visual dividers or padding**  
      `"=".repeat(10); // '=========='`

    - Generate **test content** or fill placeholders  
      `"lorem ".repeat(3); // 'lorem lorem lorem '`

    - Repeat **letters/symbols** dynamically  
      `let stars = "*".repeat(5); console.log(stars); // '*****'`

??? danger "Common Pitfalls"

    - **Negative values** will throw an error  
      `"abc".repeat(-1); // ❌ RangeError`

    - **Very large values** can freeze or crash the page  
      `"abc".repeat(1e9); // ⚠️ Not recommended`

??? example "Code Example"

    ```javascript
    const str = "Tick tock, ";

    console.log(str.repeat(2));     // Tick tock, Tick tock, 
    console.log(str.repeat(3.5));   // Tick tock, Tick tock, Tick tock, 
    console.log(str.repeat(0));     // ''
    ```

### 2. repeat : (retuns string) The repeat() method concatenates a passed string by a specified number of times and return it as a new string.
### A number of times string is to be repeated is passed as an argument in the method, where the number lies between 0 and +Infinity. If a decimal value is passed then it will be converted to an Integer when passed. The method reports an error for a negative number.

``` title="Example.html"
const str = "Tick tock, ";

// repeat the string by 2 times
console.log(str.repeat(2));
// converts the decimal value to integer
console.log(str.repeat(3.5));
// repeat 0 times
console.log(str.repeat(0));

```
### 3. `.replace()` — Replace Part of a String

???+ info "What `.replace()` Does"

    - Returns a **new string** with the **first match replaced**
    - Takes **two arguments**:
      - The **pattern** to search for (string or regex)
      - The **replacement** string or function
    - Only replaces the **first occurrence** by default (unless using regex with `/g`)
    - **Does not modify** the original string

    **Syntax:**
    ```javascript
    string.replace(searchValue, newValue)
    ```

??? tip "Use Cases with Examples"

    - Replace **the first match only**  
      `"hello world".replace("l", "L"); // 'heLlo world'`

    - Substitute values in **template strings**  
      `"My name is NAME".replace("NAME", "Alice"); // 'My name is Alice'`

    - Use **regex** for pattern matching  
      `"a1b2c3".replace(/\d/, "X"); // 'aXb2c3'`

??? danger "Common Pitfalls"

    - Only replaces the **first match**, unless using `/g` flag  
      `"aaa".replace("a", "b"); // 'baa'`  
      `"aaa".replace(/a/g, "b"); // 'bbb'"`

    - Be careful with **special characters** in regex  
      `"1+1=2".replace("+", "-"); // '1-1=2'"  
      `"1+1=2".replace(/\+/, "-"); // safer"`

??? example "Code Example"

    ```javascript
    const message = "bbb ccc";

    // Replace the first 'b' with 'c'
    let result = message.replace('b', 'c');
    console.log(result); // 'cbb ccc'
    ```

### 3.replace : (returns the new string )
```
const message = "bbb ccc";

// replace the first b with c
let result = message.replace('b', 'c');
console.log(result);

resut = "cbb ccc"  here we can see that only starting value is changed here 
```
### 4. `.replaceAll()` — Replace All Occurrences

???+ info "What `.replaceAll()` Does"

    - Returns a **new string** with **all occurrences** of a substring or pattern replaced
    - Supports both **string values** and **regular expressions**
    - Regular expressions **must include the global (`g`) flag**, or it throws an error

    **Syntax:**
    ```javascript
    string.replaceAll(searchValue, newValue)
    ```

??? tip "Use Cases with Examples"

    - **Clean up repeated words or characters**  
      `"ha ha ha".replaceAll("ha", "ho"); // "ho ho ho"`

    - **Replace multiple occurrences in a sentence**  
      `"foo is foo".replaceAll("foo", "bar"); // "bar is bar"`

    - **Use regex for complex matching**  
      `"123-456-7890".replaceAll(/\d/g, "*"); // "***-***-****"`

??? danger "Common Mistakes"

    - Using a **RegExp without the `g` flag** will throw a `TypeError`
    - `replaceAll()` is **not supported in IE** (use polyfill or fallback to `replace` with regex)

    ```javascript
    const str = "test test";
    console.log(str.replaceAll(/test/, "done")); // ❌ Error — missing 'g' flag
    ```

??? example "Code Example"

    ```javascript
    const str = "Carbon emission is increasing day by day.";

    // Replace all "day" with "year"
    console.log(str.replaceAll("day", "year"));
    // Output: Carbon emission is increasing year by year.

    // Using a regular expression (must include 'g')
    console.log(str.replaceAll(/day/g, "month"));
    // Output: Carbon emission is increasing month by month.
    ```

### 4.replaceAll(): (returns the new string) it is replace with every word or charector in it

### Note: While using regular expression in the replaceAll() method using a global flag (g) is compulsory with it otherwise it will throw a 'TypeError'

```
const str = "Carbon emission is increasing day by day.";

// select all match using both string or regular expression
console.log(str.replaceAll("day", "year"));
console.log(str.replaceAll(/day/g, "month"));

Carbon emission is increasing year by year.
Carbon emission is increasing month by month.
```
### 5. `.search()` — Find Position of First Match

???+ info "What `.search()` Does"

    - Returns the **index** of the **first match** of a substring or regex
    - Returns `-1` if **no match** is found
    - Accepts **string or regular expression** as input

    **Syntax:**
    ```javascript
    string.search(searchValue)
    ```

??? tip "Use Cases with Examples"

    - **Find the position** of a word in a sentence  
      `"The sky is blue".search("blue"); // 11`

    - Use **regex to search patterns**  
      `"Code123".search(/\d/); // 4` — finds the first digit

    - **Case-insensitive search** using regex  
      `"HELLO".search(/hello/i); // 0`

??? danger "Common Mistakes"

    - `search()` **only returns index**, not matched text  
      To get the actual match, use `.match()` instead

    - It **always finds only the first match**, even if multiple exist

    ```javascript
    const str = "abc abc abc";
    console.log(str.search("abc")); // 0 — not 4 or 8
    ```

??? example "Code Example"

    ```javascript
    const text = "The quick brown fox jumps over the lazy dog.";

    const index = text.search("fox");

    console.log(index); // Output: 16
    ```

### 5.search: (returns number)
### returns the index of the match string search also work as same as the match String match() and String search() The match() method returns an array of matches. The search() method returns the position of the first match.

```
const text = "The quick brown fox jumps over the lazy dog.";
const index = text.search("fox");

console.log(index); // Output: 16
```
### 6. `.slice()` — Extract Substring or Array Elements

???+ info "What `.slice()` Does"

    - Extracts a **portion** of a string or array
    - Returns a **new** string/array without modifying the original
    - Accepts two arguments: `startIndex` and `endIndex` (end is **not included**)

    **Syntax:**
    ```javascript
    string.slice(startIndex, endIndex)
    array.slice(startIndex, endIndex)
    ```

??? tip "Use Cases with Examples"

    - **Extract characters from a string**
      ```javascript
      "JavaScript".slice(0, 4); // "Java"
      ```

    - **Slice from a specific index to the end**
      ```javascript
      "Hello World".slice(6); // "World"
      ```

    - **Use with arrays to copy or extract elements**
      ```javascript
      const arr = [1, 2, 3, 4];
      arr.slice(1, 3); // [2, 3]
      ```

    - **Use negative indices to count from the end**
      ```javascript
      "Example".slice(-3); // "ple"
      ```

??? danger "Common Mistakes"

    - `endIndex` is **not included** in the result  
      `slice(1, 3)` gets elements at index 1 and 2 — **not** 3

    - Original data is **not modified**, it’s non-destructive

??? example "Code Example"

    ```javascript
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(1, 3);

    console.log(citrus); // Output: [ 'Orange', 'Lemon' ]
    ```

### 6.slice method: (returns new string) The slice string method in javascript extracts a part of the string and returns it as a new string.
### slice consist of 2 indexs or argumenst
#### str.slice(startindx , lastindex )- print between those values

```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

output - Orange,Lemon
```
### 7. `.split()` — Divide a String into Substrings

???+ info "What `.split()` Does"

    - Divides a **string** into an **array** of substrings
    - Takes a **separator** (character, string, or RegExp)
    - Optionally accepts a **limit** to control number of splits

    **Syntax:**
    ```javascript
    string.split(separator, limit?)
    ```

??? tip "Use Cases with Examples"

    - **Split a sentence into words**
      ```javascript
      "Hello World".split(" "); // ["Hello", "World"]
      ```

    - **Split into characters**
      ```javascript
      "ABCDEF".split(""); // ["A", "B", "C", "D", "E", "F"]
      ```

    - **Split with a custom delimiter**
      ```javascript
      "Java;Python;C++".split(";"); // ["Java", "Python", "C++"]
      ```

    - **Split using regular expressions**
      ```javascript
      let langs = "JavaScript ;  Python ;C;C++";
      let result = langs.split(/\s*(?:;|$)\s*/);
      console.log(result); // ["JavaScript", "Python", "C", "C++"]
      ```

    - **Limit the number of results**
      ```javascript
      "Java is fun. Java is fast.".split(".", 2); 
      // ["Java is fun", " Java is fast"]
      ```

??? danger "Common Mistakes"

    - Omitting separator returns entire string as 1 array element  
      ```javascript
      "Text here".split(); // ["Text here"]
      ```

    - Passing empty string splits every character  
      ```javascript
      "Hi!".split(""); // ["H", "i", "!"]
      ```

??? example "Code Example"

    ```javascript
    const sentence = "Carbon emission is increasing day by day";

    console.log(sentence.split());         // [ 'Carbon emission is increasing day by day' ]
    console.log(sentence.split(''));       // ['C','a','r',...]
    console.log(sentence.split(' '));      // ['Carbon','emission','is',...]
    console.log(sentence.split('is'));     // ['Carbon emission ', ' increasing day by day']
    ```

    ```javascript
    const text = "Java is awesome. Java is fun.";

    console.log(text.split("."));          // ['Java is awesome', ' Java is fun', '']
    console.log(text.split(".", 2));       // ['Java is awesome', ' Java is fun']
    ```

    ```javascript
    const text2 = "JavaScript ;  Python ;C;C++";
    let pattern = /\s*(?:;|$)\s*/;

    console.log(text2.split(pattern));     // ['JavaScript', 'Python', 'C', 'C++']
    ```

### 7.split: (returns string) The split string method in javascript divides the given string intro substring and returns an array of substrings.
```
const sentence = "Carbon emission is increasing day by day";

// no pattern -> return whole string in array
console.log(sentence.split());
// split at each space
console.log(sentence.split(''));
// split at each space
console.log(sentence.split(' '));
// split at each 'is'
console.log(sentence.split('is'));

console.log("ABCDEF".split("")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

const text = "Java is awesome. Java is fun.";

let pattern = ".";
let newText = text.split(pattern);
console.log(newText); // [ 'Java is awesome', ' Java is fun', '' ]

let pattern1 = ".";
// only split string to maximum to parts
let newText1 = text.split(pattern1, 2);
console.log(newText1); // [ 'Java is awesome', ' Java is fun' ]

const text2 = "JavaScript ;  Python ;C;C++";
let pattern2 = ";";
let newText2 = text2.split(pattern2);
console.log(newText2); // [ 'JavaScript ', '  Python ', 'C', 'C++' ]

// using RegEx
let pattern3 = /\s*(?:;|$)\s*/;
let newText3 = text2.split(pattern3);
console.log(newText3); // [ 'JavaScript', 'Python', 'C', 'C++' ]
```
### 8. `.startsWith()` — Check How a String Begins

???+ info "What `.startsWith()` Does"

    - Checks whether a string **starts with** a specified substring
    - Returns a **boolean** (`true` or `false`)
    - It is **case-sensitive**

    **Syntax:**
    ```javascript
    string.startsWith(searchString, position?)
    ```

    - `searchString`: the text to search for
    - `position` *(optional)*: the index at which to begin the search (default is `0`)

??? tip "Use Cases with Examples"

    - **Check for a prefix**
      ```javascript
      "Hello World".startsWith("Hello"); // true
      ```

    - **Check with lowercase mismatch**
      ```javascript
      "Hello World".startsWith("hello"); // false
      ```

    - **Start checking from a specific position**
      ```javascript
      "JavaScript is fun".startsWith("Script", 4); // true
      ```

??? danger "Common Mistakes"

    - `.startsWith()` is **case-sensitive**  
      ```javascript
      "Test".startsWith("test"); // false
      ```

    - Not checking from intended position  
      Always specify the correct `position` if checking later parts of a string.

??? example "Code Example"

    ```javascript
    const sentence = "Carbon emission is increasing day by day";

    console.log(sentence.startsWith("Car"));     // true
    console.log(sentence.startsWith("carbon"));  // false (case-sensitive)
    console.log(sentence.startsWith("emission", 7)); // true (starts at index 7)
    ```

### 8.startsWith: (returns boolean) The startsWith string method in javascript determines whether a string starts with some given substring or not. If it starts with the desired string then it returns true else return false.
### The search string is passed as the first argument to the method. There is also an optional argument that defines the position from where the method should start checking. The startsWith method is case-sensitive.
``` title="Example"
Example:
const sentence = "Carbon emission is increasing day by day";
console.log(sentence.startsWith("Car"));
console.log(sentence.startsWith("carbon")); // return false case-sensitive
```
### 9. `.substring()` — Extract a Portion of a String

???+ info "What `.substring()` Does"

    - Extracts characters **between two indices**
    - Returns a **new string**
    - Does **not modify** the original string
    - If `endIndex` is omitted, extracts till the end of the string
    - If `startIndex > endIndex`, it swaps them internally

    **Syntax:**
    ```javascript
    string.substring(startIndex, endIndex)
    ```

    - `startIndex`: index at which to begin extraction (included)
    - `endIndex`: index before which to stop (excluded)

??? tip "Use Cases with Examples"

    - **Extract substring from index 0 to 5**
      ```javascript
      const text = "JavaScript";
      console.log(text.substring(0, 5)); // "JavaS"
      ```

    - **Omit end index to go till end**
      ```javascript
      console.log(text.substring(4)); // "Script"
      ```

    - **Automatically swaps indices**
      ```javascript
      console.log(text.substring(6, 4)); // "Sc"
      ```

??? danger "Common Mistakes"

    - `.substring()` treats negative values as `0`
      ```javascript
      console.log("hello".substring(-2)); // "hello"
      ```

    - Unlike `.slice()`, it does not support negative indexes

??? example "Code Example"

    ```javascript
    const fullText = "Hello, Angular!";

    // Extract from index 7 to end
    const extractedText = fullText.substring(7);
    console.log(extractedText); // "Angular!"

    // Extract from index 7 to 13 (not including 13)
    const partialText = fullText.substring(7, 13);
    console.log(partialText); // "Angular"
    ```

### 9.substring: (returns string) The substring method in JavaScript is used to extract a part of a string between two indices or positions. It's a common method and can be used within any JavaScript code, including Angular components.
```
string.substring(startIndex, endIndex)

```
### 10. `.substring()` — With `startIndex` and Optional `endIndex`

???+ info "What It Does"

    - Extracts characters **from `startIndex` to `endIndex` (exclusive)**
    - If `endIndex` is omitted, extraction continues **to the end of the string**
    - If `startIndex > endIndex`, the method automatically swaps them
    - **Does not include the character at `endIndex`**

??? example "Examples"

    ```typescript
    fullText: string = 'Hello, Angular!';
    extractedText: string;

    // Extract from index 7 to the end
    this.extractedText = this.fullText.substring(7);
    console.log(this.extractedText); // "Angular!"

    // Extract from index 7 to 13 (not including 13)
    const partialText = this.fullText.substring(7, 13);
    console.log(partialText); // "Angular"
    ```

---

### Difference: `substring()` vs `substr()` (deprecated)

???+ info "Key Differences"

    - `substring(startIndex, endIndex)`
      - Extracts between two **indices**
    - `substr(startIndex, length)`
      - Extracts **number of characters** starting from an index
    - `substr()` supports **negative index** (counts from end)
    - `substr()` is **deprecated** — avoid using in modern code

??? example "Side-by-Side Code Examples"

    ```javascript
    let text = "JavaScript";

    // Using substring
    console.log(text.substring(4, 10)); // "Script"

    // Using substr: extract 6 characters starting at index 4
    console.log(text.substr(4, 6)); // "Script"

    // Using substr with negative index
    console.log(text.substr(-6, 6)); // "Script"

    // Omitting length extracts to the end
    console.log(text.substr(4)); // "Script"
    ```

??? danger "Avoid Using `substr()` in New Code"

    While `substr()` may still work in some environments, it is deprecated and not recommended for long-term use.

    ✅ Prefer `substring()` or `slice()` for extracting parts of strings.

### 10.startIndex: The position where the extraction begins. endIndex (optional): The position where the extraction ends (but does not include the character at this index). If omitted, the method will extract to the end of the string.

```
fullText: string = 'Hello, Angular!';
extractedText: string;
// Extract a substring starting from index 7 to the end
this.extractedText = this.fullText.substring(7);
// Output: 'Angular!'

// Extract a substring from index 7 to 13 (not including 13)
const partialText = this.fullText.substring(7, 13);
console.log(partialText); // Output: 'Angular'
```
### differnce between substring and substr

```
string.substring(startIndex, endIndex)
string.substr(startIndex, length)
```
```
let text = "JavaScript";

// Extracts 6 characters starting from index 4
console.log(text.substr(4, 6)); // Output: "Script"

// Extracts from the end of the string if negative index is provided
console.log(text.substr(-6, 6)); // Output: "Script"

// Extracts to the end if length is omitted
console.log(text.substr(4)); // Output: "Script"
```
``` title="substr"
let text = "JavaScript";

// Extracts 6 characters starting from index 4
console.log(text.substr(4, 6)); // Output: "Script"

// Extracts from the end of the string if negative index is provided
console.log(text.substr(-6, 6)); // Output: "Script"

// Extracts to the end if length is omitted
console.log(text.substr(4)); // Output: "Script"
```
### Use substring() if you need to work with two indices, or if you are concerned about browser compatibility and future-proofing your code. Use substr() if you need to extract a specific number of characters from a certain position, but keep in mind that it is deprecated.

### 11. `.trim()` — Remove Whitespace from Both Ends

???+ info "What It Does"

    - Removes **leading and trailing whitespaces** from a string
    - Whitespace includes **spaces, tabs, and newlines**
    - The original string is **not modified**, a new trimmed string is returned

??? example "Example"

    ```javascript
    const str = "    TutorialsTonight    ";
    console.log(str.trim()); // "TutorialsTonight"
    ```

    ✅ Output:
    ```
    TutorialsTonight
    ```

??? tip "When to Use"

    - Clean user input before validation
    - Remove accidental spaces from form fields or pasted text
    - Normalize strings before storing or comparing

### 11: trim(): (returns string) The trim() string method in javascript removes whitespaces from both ends of the string. Whitespaces are space, tabs, newline, etc.
```title="Example"
const str = "    TutorialsTonight    ";
console.log(str.trim());

oputput- TutorialsTonight
```
### 12. `.valueOf()` — Get Primitive Value of a String Object

???+ info "What It Does"

    - Returns the **primitive string value** of a `String` object
    - Useful when dealing with objects created via `new String()`
    - Normally called **automatically** by JavaScript in most string operations

??? example "Example"

    ```javascript
    const str = new String("hello world");
    console.log(str.valueOf());
    ```

    ✅ Output:
    ```
    hello world
    ```

??? tip "When to Use"

    - When working with string **objects**, not primitives
    - To safely extract the **plain string** value from a `String` object
    - When comparing or serializing string objects

### 12: valueOf: The valueOf() string method in javascript returns the primitive value of a String object.
```title="Example"
const str = new String("hello world");
console.log(str.valueOf(str))

output - Hello world without string 
```
# 📚 Above examples only but in one place

???+ info "1. 🔢 `.length` — Get String Length"
    - Returns the number of characters (including spaces) in a string.
    - It’s a property, not a function (no parentheses needed).

    ```
     <span style="font-weight: bold; font-size: 1.2em;">var str = "Hello World";</span><br>
    <span style="font-weight: bold; font-size: 1.2em;">console.log(str.length); // Output: 11</span>
    ```

???+ info "2. 🔁 `.repeat()` — Repeat a String"
    - Repeats a string a specified number of times.
    - Decimal values are converted to integers.
    - Negative values throw an error.

    ```js
    const str = "Tick tock, ";
    console.log(str.repeat(2));     // Tick tock, Tick tock,
    console.log(str.repeat(3.5));   // Tick tock, Tick tock, Tick tock,
    console.log(str.repeat(0));     // (empty string)
    ```

???+ info "3. ♻️ `.replace()` — Replace First Match"
    - Replaces the **first** match of a substring or pattern.
    - Returns a new string.

    ```js
    const message = "bbb ccc";
    let result = message.replace("b", "c");
    console.log(result); // Output: "cbb ccc"
    ```

???+ info "4. 🔁 `.replaceAll()` — Replace All Matches"
    - Replaces **all occurrences** of a string or pattern.
    - Regex must use `/g` (global flag) or it throws a `TypeError`.

    ```js
    const str = "Carbon emission is increasing day by day.";
    console.log(str.replaceAll("day", "year"));
    console.log(str.replaceAll(/day/g, "month"));
    ```

???+ info "5. 🔍 `.search()` — Find Index of First Match"
    - Returns the index of the first match.
    - Similar to `.match()` but returns a number.

    ```js
    const text = "The quick brown fox jumps over the lazy dog.";
    console.log(text.search("fox")); // Output: 16
    ```

???+ info "6. ✂️ `.slice()` — Extract a Portion of a String"
    - Extracts part of a string using indices.

    ```js
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(1, 3);
    console.log(citrus); // [ 'Orange', 'Lemon' ]
    ```

???+ info "7. 🧩 `.split()` — Divide String into Array"
    - Splits string into array of substrings using a delimiter.

    ```js
    const sentence = "Carbon emission is increasing day by day";
    console.log(sentence.split());            // [ 'Carbon emission is increasing day by day' ]
    console.log(sentence.split(""));          // [ 'C', 'a', 'r', ... ]
    console.log(sentence.split(" "));         // [ 'Carbon', 'emission', 'is', ... ]
    console.log(sentence.split("is"));        // [ 'Carbon emission ', ' increasing day by day' ]
    ```

???+ info "8. 🟢 `.startsWith()` — Check Start of String"
    - Checks if string starts with given substring (case-sensitive).

    ```js
    const sentence = "Carbon emission is increasing day by day";
    console.log(sentence.startsWith("Car"));     // true
    console.log(sentence.startsWith("carbon"));  // false
    ```

???+ info "9. 📍 `.substring()` — Extract Characters by Index"
    - Extracts characters between two indexes.

    ```js
    const str = "Hello, Angular!";
    console.log(str.substring(7));       // Angular!
    console.log(str.substring(7, 13));   // Angular
    ```

    **Difference vs `substr()`**:

    ```js
    let text = "JavaScript";
    console.log(text.substr(4, 6));     // Script
    console.log(text.substr(-6, 6));    // Script
    ```

???+ info "10. 🔠 `.toLowerCase()` / `.toUpperCase()` — Change Case"
    - Converts string to all lowercase or all uppercase.

    ```js
    let greeting = "Hello World";
    console.log(greeting.toLowerCase()); // hello world
    console.log(greeting.toUpperCase()); // HELLO WORLD
    ```

???+ info "11. 🚿 `.trim()` — Remove Whitespace"
    - Removes whitespace from both ends of a string.

    ```js
    const str = "    TutorialsTonight    ";
    console.log(str.trim()); // TutorialsTonight
    ```

???+ info "12. 🧱 `.valueOf()` — Get Primitive Value"
    - Returns the primitive string value from a `String` object.

    ```js
    const str = new String("hello world");
    console.log(str.valueOf()); // "hello world"
    ```
