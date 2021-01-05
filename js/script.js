document.addEventListener("DOMContentLoaded", () => {
    fetchDogs()

    
})
const contenido = document.getElementById("contenido");
const total = 20;

const fetchDogs= async () => {
	for (let i = 1; i <= total; i++) {
        await getDog(i);
    }
    
};

const getDog = async id => {
	const url = 'https://dog.ceo/api/breeds/image/random/20';
	const res = await fetch(url);
    const dog = await res.json();
    console.log(dog.message)
    dogCard(dog)
 
};

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

var a = 0;
const añadir = () =>{
a = a+1
document.getElementById("demo").textContent = a;
}

var restar = () => {
    if(a>0){
        a= a-1
    document.getElementById("demo").textContent = a;
    }
}
var limpiar =()=>{
    if(a>0){
        a= a-a
    document.getElementById("demo").textContent = a;
    }
}    
