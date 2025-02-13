//Object.entries() 方法返回对象中键/值对的数组：
const person = {
    firstName: "Bill",
    lastName: "Gates",
    age: 50,
    eyeColor: "blue"
};
console.log(Object.entries(person));




const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };
let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
    text += fruit + ": " + value + " ";
}
console.log(text)