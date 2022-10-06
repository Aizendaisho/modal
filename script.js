'use strict';
const modal = document.querySelector('.modal')
const modales = document.querySelectorAll('.show-modal')
const close = document.querySelector('.close-modal')


modales.forEach(modale=>{
    modale.addEventListener('click',(e)=>{
        modal.classList.remove("hidden")
    })
    
})

close.addEventListener('click',()=>{
    modal.classList.add("hidden")
})