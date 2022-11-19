const slide = document.querySelector('.slides')
const container = document.querySelector('.container')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
let slideId;
let slides = document.querySelectorAll('.slide')
let index = 1;
const interval = 5000;
const firstClone = slides[0].cloneNode(true)
const lastClone = slides[slides.length - 1].cloneNode(true)

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

slide.append(firstClone);
slide.prepend(lastClone)

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`
const slideSlide = ()=>{

    slideId = setInterval(()=>{
        moveToNextSlide()

    }, interval);
}
const moveToNextSlide = ()=>{
    slides = document.querySelectorAll('.slide')
    if(index >= slides.length -1) return;
    index++
    slide.style.transform = `translateX(${-slideWidth * index}px)`
    slide.style.transition = '1.5s'
}
const moveToPreviousSlide = ()=>{
    slides = document.querySelectorAll('.slide')
    if(index <= 0) return;
    index--
    slide.style.transform = `translateX(${-slideWidth * index}px)`
    slide.style.transition = '1.5s'
}
slide.addEventListener('transitionend', ()=>{
    slides = document.querySelectorAll('.slide')
    if(slides[index].id === firstClone.id){
        slide.style.transition= 'none'
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`

    }
     if(slides[index].id === lastClone.id){
        slide.style.transition= 'none'
        index = 2;
        slide.style.transform = `translateX(${-slideWidth * index}px)`

    }
})

container.addEventListener('mouseover',()=>{
    clearInterval(slideId)

})
container.addEventListener('mouseout',slideSlide)


nextBtn.addEventListener('click', moveToNextSlide)
prevBtn.addEventListener('click', moveToPreviousSlide)


slideSlide()