// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkwL0skgH2XiniV_ZY4OcRJmBJ0RgRZug",
  authDomain: "pxymedia-88b12.firebaseapp.com",
  databaseURL: "https://pxymedia-88b12-default-rtdb.firebaseio.com",
  projectId: "pxymedia-88b12",
  storageBucket: "pxymedia-88b12.appspot.com",
  messagingSenderId: "470704012157",
  appId: "1:470704012157:web:33fd346e981cce284b2a14",
  measurementId: "G-5H2S9TPSCE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user=localStorage.getItem("username of user");
document.getElementById("disname").innerHTML="Welcome"+user;

function welc(){
    
    Room=document.getElementById("addroom1").value;
    
    firebase.database().ref("/").child(Room).update({
        pupose:"Adding room name"
    });
    localStorage.setItem("Room name of user",Room);
    window.location="index.html";
}


