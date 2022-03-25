const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);


const jumbo = new Vue({

    // mi collego all'elemento con id 'app'
    el: '#app',

    data: {
        // prendo l'array con le slide
        slides,

        /* e dichiaro questa key per avere
        la posizione della slide all'interno dell'array*/
        index: 0,

        title: ''
    },

    // creo i metodi
    methods: {
        // creo una condizione in cui per passare alla slide successiva, l'indice deve aumentare di uno
        nextSlide() {
            if (this.index < this.slides.length -1) {
                this.index++;
            }
                
        },

        // invece per tornare alla slide precedente, l'index deve scendere di 1
        previewSlide() {
            if (this.index > 0) {
                this.index--;
            }
        },

        // creo una funzione in cui aggiungo la classe active solo se l'indice equivale alla foto grande
        addActiveClass(element) {
            
            // ciclo ogni elemento dell'array con findIndex
            const indexArray = this.slides.findIndex(
                (slide) => slide.title === element.title   // se il valore title dell'elemento è uguale al titolo dell'indice dell'immagine
            )

            //se i titoli sono uguali, aggiungo la classe active e thumb,
            if (indexArray === this.index) {
                    return 'thumb active'
            }

            //altrimenti solo la classe thumb
            return 'thumb'

            
        },

        // creo una funzione che permette di aggiungere la classe active al click
        /*activeOnClick(element) {

            const clickAdd = this.slides.findIndex(
                (slide) => slide.title === element.title
            )
            
            if (clickAdd === this.index) {
                return `:class = "thumb active"`;
            } else {
                return `:class = "thumb"`;
            }
        },*/

        // creo una funzione che attiva e disattiva la visualizzazione al click
        toggleActive(elemento) {

            const slideImg = document.getElementsByClassName('thumb');

            if (elemento === this.index) {

                return slideImg.classList.add('active');
            }
        },

        selectSlide(element) {              
            this.title = element.title;
            }
    },
});