const HashMap = require("./HashMap");

const test = new HashMap(0.75);

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.length()); // 12

// overwrite existing keys
test.set("apple", "green");
test.set("dog", "dark brown");

console.log(test.get("apple")); // green
console.log(test.get("dog"));   // dark brown
console.log(test.length());     // still 12

// trigger resize
test.set("moon", "silver");

console.log(test.length());     // 13
console.log(test.capacity);     // 32

console.log(test.has("frog"));  
console.log(test.remove("frog"));
console.log(test.has("frog"));

console.log(test.keys());
console.log(test.values());
console.log(test.entries());
