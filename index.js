const form = document.getElementById("myForm");
form.addEventListener("submit", function(event){
event.preventDefault();
    if (validateForm()) 
    {
      form.submit();
    }
});
function validateForm(){
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(username.trim()==="")
    {
      alert("Please enter username");
      return false;
    }
    if(!emailRegex.test(email)){
      alert("Please enter valid email address");
      return false;
    }
    if(!passwordRegex.test(password)){
      alert("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter and one digit");
      return false;
    }
    return true;
}
