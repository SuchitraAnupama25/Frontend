let product = "Five star";//global variable //global scope
function outer(){
    let p1 = "Ramesh";//local variable //local scope
    function inner(){
        let p2 = "Suresh";//nested scope
        // console.log("Product Name:",product);
        // console.log("Actor 1:",p1);
        // console.log("Actor 2:",p2);
        if(true){
            let msg = "add complete";//block scope
            console.log("Product name:",product);
            console.log("Actor 1",p1);
            console.log("Actor 2",p2);
        }
        console.log(msg);
    }
    inner();
    console.log("Actor 2 outside:",p2)
}
outer();
// console.log("Product Name outside:",product);
// console.log("Actor 1 outside:",p1);
