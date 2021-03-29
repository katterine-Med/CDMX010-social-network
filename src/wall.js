import { endSesion } from "./lib/aut.js"

export const wall = (target) => {
  const html = `
<head>
<div class= "headpost">
<h1></h1>
<img class="imghead" src="../Assets/logo.png">

<button class="btnEnd" id="btnEnd"><img src="../Assets/iconologout.png"></button>

</div>
</head>

<div class="postContainer">
<div class="post-card">
<form id="task-form">
<input autofocus type="text" id="post-title" class="form-control"
placeholder="titulo de tu post">
</div> 

<div class= "post">
<textarea id="post-description" row="10" class="form-control"
placeholder="Escribe un post"></textarea>
</div>

<button class="btnpost" id="btnpost" > Comparte! </button>

</form>
</div>

<h3 id="title"></h3>


`;

  target.innerHTML = html;

  // función cerrar sesión//

  const btnEnd = document.getElementById("btnEnd");
  btnEnd.addEventListener('click', (e) => {
    e.preventDefault();
    endSesion();
  });


  const db = firebase.firestore();

  function save() {
    const title = document.getElementById('post-title').value;
    const posted = document.getElementById('post-description').value;

    db.collection('posts').add({
      title,
      posted,
    })
      .then((docRef) => {
        console.log(docRef.id);
        const title = document.getElementById('post-title').value = '';
        const posted = document.getElementById('post-description').value = '';
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const btnpost = document.getElementById('btnpost');
  btnpost.addEventListener('click', (e) => {
    e.preventDefault();
    save();
  });

  // leyendo datos//
  const titleDos = document.getElementById('title');
  db.collection('posts').onSnapshot((querySnapshot) => {
    titleDos.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      console.log(post);

      post.id = doc.id
      console.log(post.id);
      //(`${doc.id} => ${doc.data()}`);
      titleDos.innerHTML += `
     <div class="postContainer2"
   
       <h4></h4>

       <h4>${post.title}</h4>

       <h1></h1>

       <h4>${post.posted}</h4>
       
       <button class="btnDelete" data-id="${post.id}">Eliminar</button>

       <button class="btnMg" data-id="${post.id}">Me Encanta</button>
       <button class="btnEdit" data-id="${post.id}">Editar</button>
       <span class="counter"  data-uid="" ></span> 
       </div>
       `;
       function deletePost(id) {

        return db.collection('posts').doc(id).delete();
      }

       const deleteB = document.querySelectorAll('.btnDelete');
       deleteB.forEach(btn => {
         btn.addEventListener('click', async (e) => {
           const id = e.target.dataset.id;
           console.log(e.target.dataset);
            try { await deletePost(id);
             console.log("se elimino correctamente");
           }
           catch (error) {
             console.error('No estoy borrando', error);
     
           }
          
         }) 
         
       })
       /*
       function edit (id,title,posted){
        document.getElementById('id').value = id;
        document.getElementById('title').value = title;
        document.getElementById('posted').value = posted;
        var boton = document.getElementById('boton');
        boton.innerHTML = 'editar';
 
        boton.onclick = function(){
          var editp =db.collection('post').doc(id);
 
          var id = document.getElementById('id').value;
          var title = document.getElementById('title').value;
          var posted = document.getElementById('fecha').value;
         
          return editp.update()
        }*/
       /*
       const btnEdit =document.querySelectorAll('.btnEdit');
       btnEdit.forEach(btn =>{
         const dataPost = await dataPost(e.target.dataset.ed);
         const postEditing = dataPost.data();
         editProcess = true;
         id = dataPost.id;
          
         postSend ['title'].value = postEditing.title;
         postSend ['posted'].value = postEditing.posted;
         postSend ['btnPost'].innerText = 'save changes';
        
         if (!editProcess){
          await save (title.value, posted.value);
        } else {
          await postEdit(id, {
            title: title.value,
            posted: posted.value,
          }
          

          )
          return db.collection('posts').doc(id).update();
         }
 
     
 
 
       })*/

 
 
      });
    });
  
       
      const btnIlove= document.querySelectorAll('.btnMg');
      btnIlove.forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const id = e.target.dataset.id;
          console.log('hasta aqui all fine')

          const dataPost = await post (e.target.dataset.id);
          const postEdits = dataPost.data();

          
        const arrayLove = postEdits.IloveIt;
          if (dataPost.post(id) === -1) {
          postEdits.push(id);
          dataPost.postEdits = postEdits.length;
        } else if (dataPost.post(id) === 0) {
          btnIlove.disabled = false;
        }
        return db.collection('posts').doc(id).arrayLove();

        var user = firebase.auth().currentUser;
        var name, email, uid, emailVerified;
        if (user != null) {
          email = user.email;
          emailVerified = user.emailVerified;
          uid = user.uid

        })
       
      })
    }
    export default wall;