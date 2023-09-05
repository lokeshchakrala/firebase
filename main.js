function add(){
    username1=document.getElementById("name1").value;
    password1=document.getElementById("pass1").value;
    localStorage.setItem("username of user",username1);
    localStorage.setItem("password of user",password1);
    window.location="index1.html";
}