function validate(event){
    event.preventDefault();
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if (username=='user@mail.com'&&password=='password'){
        alert('log in success');
        window.location.replace("/profile.html");
    }
    else{
        alert('Username/password incorrect');
        return;
    }
}