function Person(name,age){
    this.name=name
    this.age=age
    
}
Person.prototype.sayHi=function () {
    console.log("hi,my name is " +this.name )
}

Object.prototype.sayHello=function() {
    console.log("Hi Hi, I'm " + this.name)
}

// 新增一個Harry的物件
var Person1 = new Person("Harry",23)
Person1.sayHello()

// constructor是甚麼?
console.log(Person1.constructor===Person) //true  




// 新增第二個John
var Person2 = new Person("John",21)
console.log(Person1===Person2) // false
console.log(Person1.constructor===Person2.constructor) //true
console.log(Person1.prototype===Person2.prototype)//true
console.log(Person1.__proto__===Person2.__proto__)//true






// 確認Person是甚麼
// console.log(Person.prototype)
// console.log(Object.getPrototypeOf(Person1)===Person.prototype)
// console.log("p:"+Person1.__proto__)

// console.log(Person1.__proto__==Person.prototype)
