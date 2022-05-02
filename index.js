
const firebaseConfig = {
    apiKey: "AIzaSyBp6hS29VefROCgF_7c-nKadD6PGDRgBBg",
    authDomain: "bunny-615e7.firebaseapp.com",
    projectId: "bunny-615e7",
    storageBucket: "bunny-615e7.appspot.com",
    messagingSenderId: "912373471071",
    appId: "1:912373471071:web:cf9d3248a6a1bcd91588ea"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
var hoy = new Date();


const button = document.querySelector('.button')
const input = document.querySelector('.form-email')

button.addEventListener('click', ()=>{
    var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();

    const email = input.value

    if(email === ""){
        alert("Ingrese un correo valido")
    } else{
        db.collection("users").add({
            correo: email,
            date: fecha,
            hour: hora
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert("Gracias por registrarse espera un correo nuestro muy pronto.")

            input.value = ''
        
        })


    }
    

})

