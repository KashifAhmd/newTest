function navList(){
    const header = document.querySelector("header");
    const navbar = document.querySelector("nav");
    const burger = document.querySelector(".burger");
    const body =document.querySelector('body')

    burger.addEventListener('click', ()=>{
        navbar.classList.toggle("navbar");

        burger.classList.toggle("toggle")
    })

    header.addEventListener('onscroll',()=>{
        burger.classList.remove('toggle')
    })
}
navList()


const accordian = document.querySelectorAll(".qAn")
const arrow = document.querySelectorAll(".angle")
const label = document.querySelectorAll(".label")


for( let i=0; i<accordian.length; i++){
    accordian[i].addEventListener('click', function(){
        accordian[i].classList.toggle('active')
        arrow[i].classList.toggle('up');

    })
}


// for( let i=0; i<arrow.length; i++){
//     arrow[i].addEventListener('click', function(){
//         this.classList.toggle('up');
//     })
// }