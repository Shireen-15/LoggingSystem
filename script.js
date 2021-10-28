var x;
var y;

const firebaseConfig = {
    apiKey: "AIzaSyBcPM0sAUTLOf5GRN4UcuAC5kaYrJupAos",
    authDomain: "logging-system-19e85.firebaseapp.com",
    projectId: "logging-system-19e85",
    storageBucket: "logging-system-19e85.appspot.com",
    messagingSenderId: "535661919780",
    appId: "1:535661919780:web:966a991784ac2d0cf362b1"
  };
  

firebase.initializeApp(firebaseConfig);


function login(){
    x= document.getElementById("input11").value 
    y= document.getElementById("input12").value
    console.log("hello " + x)
    loginUser(x,y)
    
}

function register(){
    a= document.getElementById("input11").value 
    b= document.getElementById("input12").value
    console.log("hello " + a)
    registerUser(a,b)
}


function registerUser(email, password) {

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(cred => {
        console.log("User successfully created!");
       // window.location.href = 'createPost.html';
}).catch(err => {
    console.log(err.message);
})
}


function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('Successfully authenticated!');
            // direct to logic success page
            window.location.href = 'createPost.html';
        }).catch(err => {
            console.log(err.message);
        })
}


