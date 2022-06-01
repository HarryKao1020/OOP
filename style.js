// -------- ES6 Class ----------

// Class 寫法
class Car{
    constructor(brand,color){
        this.brand=brand
        this.color=color
    }
    // 方法
    sayBrand(){
        // console.log('品牌:'+this.brand +';顏色:'+this.color)
        return '品牌:'+this.brand +';顏色:'+this.color
    }
}

const Toyota=new Car("Toyota","red");
console.log(Toyota.sayBrand())
console.log(Toyota)


// 

function Car(brand,color) {
    this.brand=brand
    this.color=color
}
Car.prototype.sayBrand=function () {
    return '品牌:'+this.brand +';顏色:'+this.color
    // console.log('品牌:'+this.brand +';顏色:'+this.color)
}
// 

// 函式建構式 寫法
function Car1(brand,color) {
    this.brand=brand
    this.color=color
}
Car1.prototype.sayBrand1=function () {
    return '品牌:'+this.brand +';顏色:'+this.color
    // console.log('品牌:'+this.brand +';顏色:'+this.color)
}
const Benz=new Car1("Benz","white");
const Marzda=new Car1("Marzda","red")
console.log(Benz)
console.log(Benz.prototype==Marzda.prototype) //undifined = undifined
console.log(Benz.constructor==Marzda.constructor) //true
console.log("Car1's prototype:" + Marzda.prototype)


function Car2(brand,color) {
    this.brand=brand
    this.color=color
    this.sayBrand2=function(){
        return '品牌:'+this.brand +';顏色:'+this.color
    }
}
const BMW=new Car2("BMW","Blue")
console.log(BMW)


// ---------------------------------------------------------------------------------
// 建立一個父的class 函式建構式
function People(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender
    
    this.sayHello=function () {
        console.log("Hi My name is "+this.name)
    }

    this.sayHi=()=>{
        $('body').append("Hello My name is "+this.name+",I'm "+this.age+" years old.")
        console.log("Hello My name is "+this.name)
    }

}

console.log(People.prototype)
console.log(People.prototype.constructor)
var Harry = new People("Harry","23","male")
console.log(Harry.name)
Harry.sayHello();
Harry.sayHi();