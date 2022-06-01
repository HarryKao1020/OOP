// 用函式建構式建立一個原型物件 - 父class
function Person(name,age,gender){
    this.name=name
    this.age=age
    this.gender=gender
    var bloodtype ="A"
}
console.log(Person.prototype.__proto__===Object.prototype) //true
console.log(Person.__proto__===Function.prototype) //true
console.log(Function.prototype.__proto__===Object.prototype) //true

// 在prototype建立一個方法 -- 讓物件可以共用
// People.prototype.sayHi=()=>{
//     console.log("Hi,I'm "+this.name)
// }
Person.prototype.sayHi=function(){
    console.log("Hi,I'm "+this.name)
    $(".title1").append("Hi,I'm "+this.name+"<br>")
}

// 以People創立一個物件
var Harry = new Person("Harry",23,"male")
Harry.sayHi()
var Petter = new Person("Petter",28,"male")
Petter.sayHi()

console.log(Harry.__proto__.__proto__===Object.prototype)

// 繼承people 創立一個doctor的子class
var Doctor=function(name,age,division) {
    Person.call(this,name,age)
    this.division=division
}
// 在prototype上加一個原型鍊，接到Person的prototype
Doctor.prototype=Object.create(Person.prototype)

// 因為上面那句導致子類別的prototype.constructor 指向 父類別的constructor 所以要把他指定回來
Doctor.prototype.constructor = Doctor.constructor

// 在子類別新增自己的方法
Doctor.prototype.sayDivision=function(){
    console.log("Hello,I'm "+this.name+",my division is "+this.division)
}

// 建立一個醫生物件
var LinDoctor = new Doctor("Lin",30,"Psychiatry")
// 子類別
LinDoctor.sayHi()
LinDoctor.sayDivision()


console.log(Person.prototype.isPrototypeOf(Doctor))
console.log(Person.prototype.isPrototypeOf(LinDoctor))