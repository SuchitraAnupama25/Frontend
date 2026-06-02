let str = "madam";
function palindrome(word){
    let arr = word.split("").reverse().join("");
    console.log("Rev value:",arr);
    return arr == str;
}
console.log("Output:",palindrome(str));
 