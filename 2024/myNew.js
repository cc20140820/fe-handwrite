function myNew(constructor, ...args) {
    // 创建对象并设置原型
    const obj = Object.create(constructor.prototype)
    const res = constructor.apply(obj, args)
    return res && (typeof res === 'object' || typeof res === 'function') ? res : obj
}

// 使用示例  
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

// 使用 myNew 创建 Person 的实例  
const person = myNew(Person, 'Alice', 30);

console.log(person.name); // 输出 "Alice"  
console.log(person.age); // 输出 30  
person.greet(); // 输出 "Hello, my name is Alice and I'm 30 years old."
