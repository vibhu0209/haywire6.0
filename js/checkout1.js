const form = document.getElementById('contactForm');
const alert = document.querySelector(".alert");

const firebaseConfig = {
    apiKey: "AIzaSyAYpcaPpIVGx7dXO2NYA4ZHVx9T19_FJyA",
    authDomain: "haywire60-16812.firebaseapp.com",
    databaseURL: "https://haywire60-16812-default-rtdb.firebaseio.com",
    projectId: "haywire60-16812",
    storageBucket: "haywire60-16812.appspot.com",
    messagingSenderId: "596575516012",
    appId: "1:596575516012:web:936ab444acbb01e22faf49"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  
  const database = firebase.database()

  const ref = database.ref("details")


form.addEventListener("submit",(e)=>{
    
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    ref.push({
        name:name,
        address:email,
        phone_number:message
    })

    alert.style.display="block"

    setTimeout(()=>{
        alert.style.display="none"
    },2000)

    form.reset()

})