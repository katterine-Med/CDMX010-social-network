import {onNavigate} from "./router.js"
import {iniciarSesion} from "./lib/aut.js"
export const login = (target) =>{
    const html= `


<form action  id = 'formLogIn'>
<section class = "formLogIn" >
<input class="controls" type="text" name="nombre" id="emaillogin" placeholder="Ingrese Correo">
<input class="controls" type="password" name="nombre" id="passwordlogin" placeholder="Ingrese Contraseña">
<button class= "btnLogIn" type="button" id ="entrar"> Iniciar Sesión</button>

</section>

`
target.innerHTML = html


   const btnentrar=document.getElementById("entrar")
    btnentrar.addEventListener("click",(e) =>{
    const email=document.getElementById("emaillogin").value;
    const password=document.getElementById("passwordlogin").value;
    iniciarSesion(email,password)
    
})
document.getElementById("entrar").addEventListener('click', (e) => {
    e.preventDefault()
    onNavigate('/wall')
})
// document.getElementById("entrar").addEventListener('click', (e) => {
//     e.preventDefault()
//     onNavigate('/wall')
// });
const formValidation= () => {
    
}

const inputs = document.querySelectorAll('#formLogIn input');
inputs.forEach((input)=> {
    input.addEventListener('keyup', () =>{
  
    });
});


}

//Funcion que revisa que el usuario haya ingresado datos para continuar a la siguiente pagina




export default login;
