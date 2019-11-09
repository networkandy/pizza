const next = document.getElementById('next');
const prev = document.getElementById('prev');
const slides = document.querySelectorAll('.slide');
const time = 4000;
const auto = true;


const nextSlide = () => {
    const current = document.querySelector('.current');

    //remove class from current slide
    current.classList.remove('current');

    //check for next slide
    if(current.nextElementSibling){
        //add class to the next slide
        current.nextElementSibling.classList.add('current');
    }   else {
        //if it reaches the last one go back to the first slide
        slides[0].classList.add('current');
    }
    setTimeout(() =>  current.classList.remove('current'));
}

const prevSlide = () => {
    const current = document.querySelector('.current');

        //remove class from current slide
        current.classList.remove('current');

        //check for next slide
        if(current.previousElementSibling){
            //add class to the next slide
            current.previousElementSibling.classList.add('current');
        }   else {
            //if it reaches the last one go back to the first slide
            slides[slides.length - 1].classList.add('current');
        }
        setTimeout(() =>  current.classList.remove('current'));
}



//run event for next function
next.addEventListener('click', () => {
    nextSlide();
});


//run event for next function
prev.addEventListener('click', () => {
    prevSlide();
});


//run the automatic slide
if(auto){
    setInterval(nextSlide, time);
}