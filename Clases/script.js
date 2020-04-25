
    let btn_hamburguesa = document.getElementById('btn_hamburguesa');
    let navegador = document.getElementById('navegador');

    const click_del_boton = ()=>{        
        navegador.classList.toggle('active');    
    }
    
    btn_hamburguesa.onclick = click_del_boton;




    let desplegable = document.querySelectorAll('.desplegable');

    desplegable.forEach(function(elemento, indice){
        elemento.addEventListener('click', function(){
            elemento.classList.toggle('active')
        });
    });


