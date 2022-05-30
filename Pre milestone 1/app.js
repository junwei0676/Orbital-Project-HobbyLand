function validate(){
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if (username=='user'&&password=='password'){
        alert('log in success');
        return false;
    }
    else{
        alert('Username/password incorrect');
    }
}