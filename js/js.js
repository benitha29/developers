document.getElementById('loginform').addEventListener('submit',function(e){
    e.preventDefault();
constusername = this.document.getElementById('username').Value
constpassword = this.document.getElementById('password').Value
const message = this.document.getElementById('message');

constvalidusername = 'user';
const validpassword = 'paas123';

if(username === validusername && password === validpassword){
    message.style.color = 'green';
    message.textcontent = 'login successful !';
}
else{
    message.style.color = 'red';
    message.textcontent = 'invalid username or password';
}
});