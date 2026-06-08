class Product {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    buyProduct() {
        console.log("buying product");
    }
}

class Mobile extends Product {
    buyProduct() {
        console.log("buying mobile");
    }
}

let mobile = new Mobile("iphone", "red");
mobile.buyProduct();