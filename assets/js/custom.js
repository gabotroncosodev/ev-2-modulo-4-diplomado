//llama al evento addEventListener al hacer click
document.addEventListener("click",function(elementoPresionado){
    //evalua si dentro del elemento presionado hay un objeto con la clase foto-portfolio
    if(elementoPresionado.target.classList.contains("foto-portfolio")){
        //crea un objeto llamado src donde guardará la ruta del la imagen
        const src = elementoPresionado.target.getAttribute("src");
        //mediante querySelector obtiene el primer objeto con la clase "modal-img" obteniendo así el src de la imagen
        document.querySelector(".modal-img").src = src;
        //crea un objeto llamadomyModal de tipo Bootstrap.Modal donde obtiene una referencia desde, modalGaleriaPortfolio, que es el id del div que almacena el modal 
        var myModal = new bootstrap.Modal(document.getElementById('modalGaleriaPortfolio'));
        //muestra el modal en pantalla
        myModal.show();
    }
})

//crear un modal con un cuestionario para el profe

/* 
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
}) */