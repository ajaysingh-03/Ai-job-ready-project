let sliderContent = document.querySelector(".slider-content");
let btn = document.querySelectorAll(".btn");
let firstImg = sliderContent.querySelectorAll("img")[0];
let firstImgWidth = firstImg.clientWidth + 20;  


btn.forEach(button =>{
    button.addEventListener("click", ()=>{
        sliderContent.scrollLeft += button.id == "prevBtn" ? -firstImgWidth : firstImgWidth;
    })
})  

document.addEventListener("DOMContentLoaded", ()=>{

    let aboutUs = document.querySelector(".aboutUs");
    let contact = document.querySelector(".contact");
    let footer = document.getElementById("footer");
    aboutUs.addEventListener("click", function(){
        footer.scrollIntoView({  
            behavior:'smooth',
        })
    })
    contact.addEventListener("click",()=>{
        footer.scrollIntoView({
            behavior:'smooth',
        })
    })
})



//clicking on any image and get directed to for page
let images = document.querySelectorAll("img");
images.forEach(img =>{
    img.addEventListener("click", ()=>{
        window.location.href="./form.html"
    })
})
//clicking on any get button and get directed to for page
let getBtn = document.querySelector(".button-29");
getBtn.addEventListener("click", ()=>{
    window.location.href="./form.html";
});

//form repeater
// form repeater
$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})
