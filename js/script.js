document.addEventListener("DOMContentLoaded", () => {
    fetchDogs()

    
})
const contenido = document.getElementById("contenido");
const total = 6;

const fetchDogs= async () => {
	for (let i = 1; i <= total; i++) {
        await getDog(i);
    }
    
};

const getDog = async id => {
	const url = 'https://dog.ceo/api/breeds/image/random/6';
	const res = await fetch(url);
    const dog = await res.json();
    console.log(dog.message)
    dogCard(dog)
 
};

const dogCard = (dog) =>{
    const doggie = document.createElement('div');
    doggie.classList.add('dog');

    const createCard = `
    <div class="col-4">
        <div class="card my-3" style="width: 19rem;">
            <img src="${dog.message['0']}" class="card-img-top img-dog" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Regala amor ♥ .</p>
          <h6>Apadríname</h6>
          <a id="add" onClick="getInfo()" class="btn btn-info">+</a>
          <a onClick="restar()" class="btn btn-danger">-</a>
        </div>
      </div>
</div>
    `;

    doggie.innerHTML = createCard;
    contenido.appendChild(doggie);
}

var a = 0;
const getInfo = () =>{
a = a+1
document.getElementById("demo").textContent = a;
}

var restar = () => {
    if(a>0){
        a= a-1
    document.getElementById("demo").textContent = a;
    }
    
}
