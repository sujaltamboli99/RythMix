// Only attach event listener if login form exists on the page
const loginForm = document.getElementById("loginform");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        let storeddata = localStorage.getItem("userData");

        if (!storeddata) {
            alert("your account is not found ! plz sign up !");
            return;
        }

        let userdata = JSON.parse(storeddata);

        // Check username or email match
        let isUserMatch = (username === userdata.username || username === userdata.email);

        if (isUserMatch && password === userdata.password) {
            alert("login succesfully!");
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "index.html";
        } else {
            alert("invalid username or password !");
        }
    });
}

// Only run auto-redirect if we're on the login page and already logged in
if (loginForm && localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "index.html";
}
