function checkUser() {
    let name = prompt("Enter your Name");
    let age = prompt("Enter your age");
    
    if (age >= 18 ){
    alert("Welcome " + name + " You are an adult.");
    }
    else {
    alert("Sorry " + name + " You are not allowed.");
    }
}
    checkUser();