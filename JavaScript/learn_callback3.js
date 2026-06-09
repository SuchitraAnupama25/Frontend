function orderFood(callback){
    console.log("Order placed");
    setTimeout(()=>{
        callback();
    }, 5000);
}

function prepareFood(callback){
    console.log("Food is being prepared");
    setTimeout(()=>{
        callback();
    }, 3000);
}

function findDeliveryPartner(callback){
    console.log("Finding Delivery Partner");
    setTimeout(()=>{
        callback();
    }, 2000);
}

function outForDelivery(callback){
    console.log("Order is out for delivery");
    setTimeout(()=>{
        callback();
    }, 1000);
}

function foodDelivered(){
    console.log("Food delivered successfully");
}

orderFood(()=>{
    prepareFood(()=>{
        findDeliveryPartner(()=>{
            outForDelivery(()=>{
                foodDelivered();
            });
        });
    });
});