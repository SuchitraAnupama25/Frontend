class Product{
    constructor(name,colour){
        this.name = name;
        this.colour = colour;
    }
    buyProduct(){
        console.log(`Product Name: ${this.name} Product Colour: ${this.colour}`);
    }
}
let value = new Product("Iphone","red");
let data = new Product("Samsung","Black");
value.buyProduct();
data.buyProduct();