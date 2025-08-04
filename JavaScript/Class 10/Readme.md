## ✂️ Array Methods: `slice()` and `splice()`

### 🔹 `slice()` Method

- `slice(start, end)` returns a **shallow copy** of a portion of an array.
- It **does not modify** the original array.
- The `end` index is **not included** in the result.

```js
let fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

let sliced = fruits.slice(1, 4);
console.log(sliced);    // ['banana', 'cherry', 'date']
console.log(fruits);    // ['apple', 'banana', 'cherry', 'date', 'fig']


🔹 splice() Method

let colors = ['red', 'green', 'blue', 'yellow'];

// Remove 1 item at index 2
let removed = colors.splice(2, 1);

console.log(removed); // Output: ['blue']
console.log(colors);  // Output: ['red', 'green', 'yellow']

// Add 'purple' at index 1
colors.splice(1, 0, 'purple');

console.log(colors); // Output: ['red', 'purple', 'green', 'yellow']

// Replace 1 item at index 2 with 'black'
colors.splice(2, 1, 'black');

console.log(colors); // Output: ['red', 'purple', 'black', 'yellow']
