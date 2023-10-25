// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_0HPHqnogFpNgl1RkHEM2U_JllXdjUZA",
    authDomain: "response-39a54.firebaseapp.com",
    databaseURL: "https://response-39a54-default-rtdb.firebaseio.com",
    projectId: "response-39a54",
    storageBucket: "response-39a54.appspot.com",
    messagingSenderId: "612430951212",
    appId: "1:612430951212:web:085a55126b9a632685f289",
    measurementId: "G-BKXL9Z2W72"
  };


// initialize firebase
  firebase.initializeApp(firebaseConfig);

// creating reference of my database bro
var form = firebase.database().ref("ViewData");

document.getElementById("form").addEventListener("submit",submitForm);


function submitForm(e){


    e.preventDefault();
    
    var name = getElementByVal('name');
    var email = getElementByVal('email');
    
    var que = getElementByVal('que');
    var gender = getElementByVal('gender');
    var message = getElementByVal('mymessage');


    // console.log(name,email,que,gender,message);

    saveMessage(name,email,que,gender,message);

    // enable alert

    document.querySelector('.alert').style.display = "block";

    // remove alert

    setTimeout(()=>{
        document.querySelector('.alert').style.display = "none";
    },3000);

    // reset form
    document.getElementById('form').reset();

}


const saveMessage = (name,email,que,gender,message) =>{
       var newContactform = form.push();

       newContactform.set({

        name:name,
        email:email,
        que:que,
        gender:gender,
        message:message,
       });

};


const getElementByVal = (id) => {

    return document.getElementById(id).value;

};




