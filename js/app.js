//Milestrone 3

//1. Creare l'array delle immagini che vogliamo inserire nel Dom 
// let arrayImageSlide = [
//     './img/image1.jpg',
//     './img/image4.jpg',
//     './img/image5.jpg',
//     './img/image6.jpg',
//     './img/image7.jpg',
//     './img/image8.jpg',
//     './img/image10.jpg'
// ]

let arrayImageSlide = [
    {
        image: './img/image1.jpg',
        title: 'Torre Eiffel',
        text: 'Punto di riferimento storico - Francia, Parigi'
    },
    {
        image: './img/image4.jpg',
        title: 'Tempio Indù',
        text: 'Uno dei simboli più rappresentativi di Bali - Indonesia'
    },
    {
        image: './img/image5.jpg',
        title: 'Ponte di Rialto',
        text: 'Uno dei 30 ponti più belli di Italia - Venezia'
    },
    {
        image: './img/image6.jpg',
        title: 'Basilica di Santa Maria della Salute',
        text: 'Punto di riferimento storico - Italia, Venezia'
    },
    {
        image: './img/image7.jpg',
        title: 'Bora Bora',
        text: 'Isola più bella della Polinesia Francese - Bora Bora'
    },
    {
        image: './img/image8.jpg',
        title: 'InterContinental Bora Bora Resort Thalasso Spa',
        text: 'Hotel di Bora Bora, Indonesia isola felice'
    },
    {
        image: './img/image10.jpg',
        title: 'Keizersgracht',
        text: 'Arte = Amsterdam - Olanda'
    }
];

// 2. Creare una variabile dell'indice della slide attiva (0)
let indexSlideActive = 0;

// 3. Creare una variabile che racchiude il nostro carosello
const carouselElement = document.querySelector('.carousel');
console.log(carouselElement);

// 4. Creare un ciclo for per creare tutti gli elementi presenti nell'array
for(let i = 0; i < arrayImageSlide.length; i++) {
    // 1. Salvare in una variabile l'indice dell'array
    const indexSlide = arrayImageSlide[i];

    const imageSlide = indexSlide.image;
    const titleSlide = indexSlide.title;
    const textSlide = indexSlide.text;
    // 2. Creare elementi html di tipo img
    // const imageElement = document.createElement('img');
    // console.log(imageElement);

    // let imageElement = document.querySelectorAll('.slide-carousel');
    // console.log(imageElement)

    // 3. Aggiungere src
    // imageElement.src=[indexSlide];
    // console.log(imageElement);
    // 4. Creare un if per assegnare all'indexSlideActive sia la classe 'slide-carousel' sia la classe 'active' e a tutti gli altri elementi solo la prima classe
    let className = 'slide-carousel';

    if(i === indexSlideActive){
        className += ' active';
    }

    const imageElement =  `
    <div class="${className}">
       <div class="title">${titleSlide}</div>
       <div class="text">${textSlide}</div>
      <img src="${imageSlide}" alt="">
    </div>
    `;

    // console.log(imageElement);

    carouselElement.innerHTML += imageElement;
    // 5. Aggiungere gli elementi
    // carouselElement.append(imageElement);
}

// Milestrone 2

// 1. Creare una variabile che si collega al DOM e prende tutte le slide
const slideElements = document.querySelectorAll('.slide-carousel');
// console.log(slideElements);

// 2. Creare due variabili che si collega al DOM e prende le frecce
const rightBtnElement = document.querySelector('.arrow-right');
const leftBtnElement = document.querySelector('.arrow-left');
// console.log(rightBtnElement, leftBtnElement);

// 3. Creare una funzione per la quale quando si effettua un click nella freccia a destra si scorre fino all'ultima immagine
const lastIndex = slideElements.length - 1;

rightBtnElement.addEventListener('click', function (){

    // if(indexSlideActive < arrayImageSlide.length - 1){
    // // 1. Togliere la classe active dalla slide corrente
    // slideElements[indexSlideActive].classList.remove('active');
    // console.log(arrayImageSlide[indexSlideActive]);
    // // 2. Incrementare l'indice
    // indexSlideActive += 1;
    // console.log(indexSlideActive);
    // // 3. Aggiungere la classe active alla slide successiva
    // slideElements[indexSlideActive].classList.add('active');
    // console.log(arrayImageSlide[indexSlideActive]);
    // };

	// console.log(slideElements[indexSlideActive]);
	slideElements[indexSlideActive].classList.remove('active');

	if (indexSlideActive < lastIndex) {
		indexSlideActive += 1;
	} else {
		indexSlideActive = 0;
	};

	// console.log(slideElements[indexSlideActive]);
	slideElements[indexSlideActive].classList.add('active');

});

// 4. Creare una funzione per la quale quando si effettua un click nella freccia a sinistra si ritorna indietro fino all'indice 0 
leftBtnElement.addEventListener('click', function (){

    // if(indexSlideActive > 0){
    // // 1. Togliere la classe active dalla slide corrente
    // slideElements[indexSlideActive].classList.remove('active');
    // console.log(arrayImageSlide[indexSlideActive]);
    // // 2. Decrementare l'indice
    // indexSlideActive -= 1;
    // console.log(indexSlideActive);
    // // 3. Aggiungere la classe active alla slide precedente
    // slideElements[indexSlideActive].classList.add('active');
    // console.log(arrayImageSlide[indexSlideActive]);
    // };

	slideElements[indexSlideActive].classList.remove('active');

	if (indexSlideActive > 0) {
		indexSlideActive--;
	} else {
		indexSlideActive = lastIndex;
	};

	// console.log(slideElements[indexSlideActive])
	slideElements[indexSlideActive].classList.add('active');

});
