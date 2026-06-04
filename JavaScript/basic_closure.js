function counter(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}

let count = counter();
count();
count();
count();
count();

//with closuer 
// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     inner();
// }
// outer();
// outer();
// outer();