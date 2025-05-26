document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Invalid password!');

    
  } else {
    alert('Account created successfully!');
     window.location.href = "homes.html";

  }
});
