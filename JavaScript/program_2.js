//Number of occurances of "e" in the given string
let para = "I live in Bagalore";
let newValue = para.split("");
let count = 0;
for(let i = 0; i <= newValue.length; i++){
    if(newValue[i] == "e"){
    count++;
    }
}
console.log("E occurances:",count);

