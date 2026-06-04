let password = "admin123";
function login(userPassword){
    if(userPassword === password){
        console.log("Login Successful");
    }else{
        console.log("Invalid Password");
    }
}

password = "hacked";
login("admin123");

function createLoginSystem(){
    let password = "admin123";
    let login = function(userPassword){
        if(userPassword === password){
            console.log("Login Succesful");
        }else{
            console.log("Invalid password");
        }
    };
    let changePassword = function(oldPassword, newPassword){
        if(oldPassword === newPassword){
            password = newPassword;
            console.log("Password updated");
        }else{
            console.log("wrong old password");
        }
    };
    return{login,changePassword};
}
const auth = createLoginSystem();

//login with initial password
auth.login("admin123");//login Successfully

//change password
auth.changePassword("admin123","react123");//password updated

//try old password
auth.login("admin123");//invalid password

//try new password
auth.login("react123");//login successful

//direct access isn't possible
console.log(auth.password)//undefined