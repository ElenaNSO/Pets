const pets = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]
// размер картинок (все картинки — равные друг другу квадраты)
//const PIC_SIZE = document.querySelector('.pets-img').offsetWidth;

// размер области просмотра карусели картинок
//const VIEWPORT_SIZE = 3 * PIC_SIZE + 120 + 'px';

// предварительная настройка каркаса карусели
//const a = document.querySelector('.carusel-area');
//a.style.width = VIEWPORT_SIZE + "px";
//const b = document.querySelector('.pets-orientation');
//b.style.width = 50 + VIEWPORT_SIZE + 50 + "px";

// позиционируем кнопки
//let arrowLeft  = document.querySelectorAll(".button-carousel")[0],
//    arrowRight = document.querySelectorAll(".button-carousel")[1];
//arrowLeft.style.left = "20px";
//arrowLeft.style.top = (10 + PIC_SIZE + 10) / 2 - arrowLeft.offsetHeight / 2 + "px";
//arrowRight.style.right = "10px";
//arrowRight.style.top = (10 + PIC_SIZE + 10) / 2 - arrowRight.offsetHeight / 2 + "px";

const CAROUSEL = document.querySelector('.button-carousel');
const IMAGES_SLAIDER = document.querySelectorAll('.pets-article');
let massImagesSlaider = Array.from(IMAGES_SLAIDER);
//let massPointsSlaider = Array.from(document.querySelectorAll('.slider__dot'));//точки
let ActivElement = 0;

//переход по стрелкам влево
const moveLeft = () => {
    if(ActivElement != 0) {
        massImagesSlaider[ActivElement - 1].classList.add('display-block');
       // massImagesSlaider[ActivElement].classList.add('display-block');
       // massImagesSlaider[ActivElement + 1].classList.add('display-block');
        ActivElement = ActivElement - 1;
        
        massImagesSlaider[ActivElement].classList.add("transition-left");
        massImagesSlaider.style.display = "block";
//SROLL_BODY.classList.add("body-syze-background");
    }
    else {
      massImagesSlaider.forEach(element => {
        element.classList.add('display-close');
        
      });
      IMAGES_SLAIDER[ActivElement + 1].style.display = "block";
      IMAGES_SLAIDER[ActivElement + 1].classList.add("transition-left");
     // IMAGES_SLAIDER[ActivElement + 2].style.display = "block";
      //IMAGES_SLAIDER[ActivElement + 3].style.display = "block";

      //massImagesSlaider.classList.add('display-close');
       // IMAGES_SLAIDER[ActivElement + 1].classList.add('display-block');
        
        
        //IMAGES_SLAIDER[ActivElement + 1].classList.add("transition-left");

        //IMAGES_SLAIDER[ActivElement + 2].classList.add('display-block');
       
        //IMAGES_SLAIDER[ActivElement + 2].classList.add("transition-left");

       
        //IMAGES_SLAIDER[ActivElement + 3].classList.add('display-block');
        //IMAGES_SLAIDER[ActivElement + 3].classList.add("transition-left");
        //ImagesSlaider.style.display = "block";
        ActivElement = massImagesSlaider.length - 1;
    }
    //massPointsSlaider[ActivElement].classList.add('slider__dot_active'); 
}

//переход по стрелкам вправо
const moveRight = () => {
    if(ActivElement != (massImagesSlaider.length - 1)) {
        massImagesSlaider[ActivElement + 1].classList.add('display-block');
        ActivElement =  ActivElement + 1;
    }
    else {
        massImagesSlaider[0].classList.add('display-block');
        ActivElement = 0;
    }
    //massPointsSlaider[ActivElement].classList.add('slider__dot_active');
}

CAROUSEL.addEventListener('click', element => {
  //massImagesSlaider.classList.add('display-close');
   // massImagesSlaider[ActivElement].classList.remove('display-block');
    //massPointsSlaider[ActivElement].classList.remove('slider__dot_active');
    if(element.target.classList.contains('button-arow-left')) {
        moveLeft();
        }
    else {
            if(element.target.classList.contains('button-arow-right')) {
                moveRight();  
            }
        }
})

