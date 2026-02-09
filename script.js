function validateForm(){

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let zip = document.getElementById("zip").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    if(username === "" || email === "" || phone === "" || zip === "" || password === "" || confirmPassword === ""){
        alert("All fields are mandatory");
        return false;
    }

    let phoneRegex = /^[0-9]{10}$/;
    if(!phoneRegex.test(phone)){
        alert("Phone must be 10 digits");
        return false;
    }

    let zipRegex = /^[0-9]{6}$/;
    if(!zipRegex.test(zip)){
        alert("Zip code must be 6 digits");
        return false;
    }

    let emailRegex = /^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
    if(!emailRegex.test(email)){
        alert("Invalid Email");
        return false;
    }

    let passRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@]).{7,}$/;
    if(!passRegex.test(password)){
        alert("Password must contain capital letter, digit and special character");
        return false;
    }

    if(password !== confirmPassword){
        alert("Passwords do not match");
        return false;
    }

    alert("Form Submitted Successfully");

    $("#submitBtn").text("Submitted");
    $("body").css("background-image","url('https://via.placeholder.com/800')");

    return true;
}

function changeImage(){
    document.getElementById("myImage").src = "https://via.placeholder.com/200";
}

function addText(){
    let node = document.createTextNode("DOM Text Added Successfully");
    document.getElementById("demo").appendChild(node);
}

function deleteText(){
    document.getElementById("demo").innerHTML = "";
}
