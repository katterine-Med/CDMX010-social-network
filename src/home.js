import { onNavigate } from './router.js';

export const home = (target) => {
    // const rootDiv =document.getElementById('root');
  const html = `
    
  
  <div id="home">

    <div class="description">
    <h1 class = "rsTitle"> ¡A pueblear! <h1>
    <p class="rsDesc"> Ahora tendrás a quién preguntarle qué camión tomar para llegar el nevado de Toluca y no morir en el intento. <br>
    Si comiste unas tlayudas deliciosas ó si te hospedaste en un lugar super chulo, y quieres hacer una recomendación estas en el lugar indicado, ¡Date vuelo con tus recomendaciones! </p>
    </div>
    <div class="flexContainer">
    <button type= "button" class= "buttonHome" id= "signUpButton" href="#"> Regístrate </button>
    <button type= "button" class= "buttonHome" id= "logInButton" href="#"> Inicia sesión </button>
    <p><a id="contact" href="#">Creadoras :3</a> <p>
    </div>
    
    </div>

    
    
    `
    
    /*"Acerca de" será pantalla de publicacion*/
    target.innerHTML = html;

    document.getElementById('logInButton').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/login')
    })

    document.getElementById('signUpButton').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/signUp')
    })

    document.getElementById('contact').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/contact')
    })

  

    /*document.getElementById('mainMenu').addEventListener('click', (e) => {
            e.preventDefault()
            onNavigate('/')
        })*/

}
export default home;
