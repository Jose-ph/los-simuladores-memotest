
const cards = document.querySelectorAll('.memory-card');

let hasflip = false;

let firstCard;
let secondCard;












cards.forEach(card => card.addEventListener("click" , flipCard));



function flipCard(){  // this es el elemento que genera el evento (?) algo asi


    //this.classList.toggle('flip'); Esto lo convierte en add

    this.classList.add('flip');


    if(!hasflip){  //primer click

        firstCard = this ;

        hasflip = true;

       // console.log( hasflip , firstCard);
   
    } else{

        hasflip = false;
        secondCard = this;


        //console.log( firstCard , secondCard);    

        //console.log(firstCard.dataset.character);
        //console.log(secondCard.dataset.character);

        if(firstCard.dataset.character === secondCard.dataset.character){

            firstCard.removeEventListener('click',flipCard);
            secondCard.removeEventListener('click', flipCard);
        } else{

            setTimeout(()=>{

            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
        }
            ,500)



 
    }
  

   
    
    //console.log("me tocaron");


    

}























// document.addEventListener('DOMContentLoaded', ()=>{

//     //SOUNDTRACK JUEGO LOS SIMULADORES OST SUSPENSO//

//  const  cartas = [  //cambiar por mazo

//     {name: 'santos',

//     img: 'imagenes_dimensionadas/santos.png'

                
//     },

//     {name: 'santos',

//     img: 'imagenes_dimensionadas/santos.png'

                
//     },

//     {name: 'lampone',

//     img: 'imagenes_dimensionadas/lampone.png'

                
//     },

//     {name: 'lampone',

//     img: 'imagenes_dimensionadas/lampone.png'

                
//     },

//     {name: 'medina',

//     img: 'imagenes_dimensionadas/medina.png'

                
//     },

//     {name: 'medina',

//     img: 'imagenes_dimensionadas/medina.png'

                
//     },

//     {name: 'ravenna',

//     img: 'imagenes_dimensionadas/ravenna.png'

                
//     },

//     {name: 'ravenna',

//     img: 'imagenes_dimensionadas/ravenna.png'

                
//     },
//  // CAMBIAR LA IMAGEN POR OTRA
//     {name: 'milazzo',

//     img: 'imagenes_dimensionadas/milazzo.png'

                
//     },

//     {name: 'milazzo',

//     img: 'imagenes_dimensionadas/milazzo.png'

                
//     },

//     // CAMBIAR LA IMAGEN POR OTRA
//     {name: 'tamazaki',

//     img: 'imagenes_dimensionadas/tamazaki.png'

                
//     },

//     {name: 'tamazaki',

//     img: 'imagenes_dimensionadas/tamazaki.png'

                
//     },

   



// ]

// console.log(cartas);

// const $mesa = document.querySelector(".mesa");

// let cartaElegida = [];
// let cartaElegidaId = [];
// let cartasBorradas= [];

// function repartirCartas(){


//     for(let i= 0; i < cartas.length ; i++ ){

//         let carta = document.createElement("img");
//         carta.setAttribute('src','imagenes_dimensionadas/portada.png');
//         carta.setAttribute('data-id', i);

//         carta.addEventListener('click', girarCarta);

//         $mesa.appendChild(carta);


//     } 

// }

// repartirCartas();


// function girarCarta(){

//     cartaId = this.getAttribute('data-id');

//     cartaElegida.push(cartas[cartaId].name);


//     cartaElegidaId.push(cartaId);

//     let cartaMostrar = cartas[cartaId].img;

    
//    this.setAttribute ('src', cartaMostrar);


//     if (cartaElegida.length === 2){

//         setTimeout(revisarJugada,500);
//     }



// }

// function revisarJugada(){

//     let cartas = document.querySelectorAll('img');

//     const cartaNumeroUno = cartaElegida[0];
//     const cartaNumeroDos = cartaElegida[1];

//     const cartaNumeroUnoId= cartaElegidaId[0];
//     const cartaNumeroDosId= cartaElegidaId[1];

//     if(cartaNumeroUno === cartaNumeroDos){

//         alert("COINCIDEN !!");



//         cartas[cartaNumeroUnoId].setAttribute('src', "imagenes_dimensionadas/tomatoe.png");
//         cartas[cartaNumeroDosId].setAttribute('src', "imagenes_dimensionadas/tomatoe.png");

//         cartasBorradas.push(cartaElegida);
//         console.log(cartasBorradas);
//     }

//     else{

//         cartas[cartaNumeroUnoId].setAttribute('src', 'imagenes_dimensionadas/portada.png');
      
//         cartas[cartaNumeroDosId].setAttribute('src', 'imagenes_dimensionadas/portada.png');
        
//         alert("NO COINCIDEN, TRATA DE NUEVO");
   
//     }

//     cartaElegida = [];
//     cartaElegidaId = [];


//     if (cartasBorradas.length === cartas.length/2){

//        setTimeout(() => {

//         alert("GANASTE");
           
//        },1000); 

//     }


// }
   
   




 





// });

}
