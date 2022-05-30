class Car{
    brand
    // 方法
    sayBrand(brand){
        this.brand=brand
        console.log(brand)
    }
}

const Toyota=new Car();
Toyota.sayBrand("Benz");