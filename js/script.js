document.addEventListener("DOMContentLoaded", () => {
    fetchDogs()
})
//Id de la etiqueta donde se mostrará el contenido
const contenido = document.getElementById("contenido");
const total = 20;

//Trae los perritos hasta 20 como limite
const fetchDogs= async () => {
	for (let i = 1; i <= total; i++) {
        await getDog(i);
    }
    
};
// fetch con promesa
const getDog = async id => {
	const url = 'https://dog.ceo/api/breeds/image/random/20';
	const res = await fetch(url);
    const dog = await res.json();
    console.log(dog.message)
    dogCard(dog)
 
};

//Se crea la card con los perritos
const dogCard = (dog) =>{
    const doggie = document.createElement('div');
    doggie.classList.add('dog');

    const createCard = `
    <div class="col-lg-4 col-sm-6">
        <div class="card my-3" style="width: 19rem;">
            <img src="${dog.message['0']}" class="card-img-top img-dog" alt="...">
        <div class="card-body">
          <h5 class="card-title">Apadríname <i class="fas fa-paw"></i></h5>
          <p class="card-text">"Tienes el poder de hacerme feliz". Regala amor y apadrina a este hermoso perrito. </p>
          <div class="botons mt-5">
          <span>Apadrinar<a id="add" class="btn" onClick="añadir()"><i class="icon fas fa-plus"></i></a></span>
          <span>Quitar<a onClick="restar()" class="btn"><i class="icon fas fa-minus-circle"></i></a></span>
        </div>
      </div>
    </div>
    `;

    doggie.innerHTML = createCard;
    contenido.appendChild(doggie);
}

// Contador de perritos apadrinados

var resultado = 0;
const añadir = () =>{
    resultado = resultado+1
document.getElementById("valor").textContent = resultado;
}

var restar = () => {
    if(resultado>0){
        resultado= resultado-1
    document.getElementById("valor").textContent = resultado;
    }
}
var limpiar =()=>{
    if(resultado>0){
        resultado= resultado-resultado
    document.getElementById("valor").textContent = resultado;
    }
}    
