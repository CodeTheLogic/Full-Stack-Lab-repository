function validateForm() {
    let roll = document.getElementById("rollno").value.trim();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    if(roll === "" || username === "" || email === "" || phone === "" || password === ""){
        alert("All fields are mandatory");
        return false;
    }

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailRegex.test(email)){
        alert("Invalid Email Format");
        return false;
    }

    return true; // Allows PHP to run
}
