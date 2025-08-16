document.getElementById("signupform").addEventListener("submit",function(e){
    e.preventDefault();

    let fullname = document.getElementById("FullName").value.trim();
    let email= document.getElementById("Email").value.trim();
    let username =  document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmpassword = document.getElementById("confirmpassword").value.trim();

   if( fullname === "" || email === "" || username ==="" || password ==="" || confirmpassword === ""){
    alert("plz fill empty details !");
    return;
   }

   if(password.length<6){
    alert("your password must be at least 6 character !");
    return;
   }

   if( password !== confirmpassword){
    alert("password is not matching with confirm password !");
    return;
   }

   let userdata ={
    fullname: fullname,
    email: email,
    username: username,
    password: password
   };

      localStorage.setItem("userData", JSON.stringify(userdata));
    localStorage.setItem("isLoggedIn", "false");

        alert("Signup successful! Please login now.");
    window.location.href = "login.html"; 
});