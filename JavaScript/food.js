class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log(`${this.name} logged in`);
    }
    logout(){
        console.log(`${this.name} logged out`)
    }
}

class Customer extends User{
    placeOrder(foodItem){
        console.log(`${this.name} ordered ${foodItem}`)
    }
}

class DeliveryPartner extends User{
    deliverOrder(orderId){
        console.log(`${this.name} deliver order ${orderId}`)
    }
}

class Admin extends User{
    removeResturant(resturantName){
        console.log(`${resturantName} removed by ${this.name}`)
    }
}

const customer = new Customer("Anupama","suchi@gmail.com");
customer.login();
customer.placeOrder("Pizza");
console.log("----------------");
const rider = new DeliveryPartner("Rahul","rahul@gmail.com");

rider.login();
rider.deliverOrder();
console.log("----------------");

const admin = new Admin("Manager","manager@gmail.com");

admin.login();
admin.removeResturant();