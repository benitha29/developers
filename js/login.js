document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const useremail = document.getElementById("benitha5@gmail.com").value;
    const password = document.getElementById("benitha").value;
     const errorMsg = document.getElementById("error-msg");

    if (useremail === "benitha5@gmail.com" && password === "benitha") {
        alert("Login successful!");
        errorMsg.textContent = "";
        window.location.href = "homes.html";
        // window.localStorage.setItem("useremail", useremail);

        
    } else {
        errorMsg.textContent = "Invalid useremail or password.";
    }
});
