let list = document.querySelector('.list');
let menu = document.querySelector('#menu');
let cross = document.querySelector('#cross');

menu.addEventListener('click', (()=>{
   list.style.transform = 'translateY(0%)'
   cross.style.visibility= 'visible';
   menu.style.visibility= 'hidden';
}))
cross.addEventListener('click', (()=>{
    list.style.transform = 'translateY(-100%)'
    menu.style.visibility= 'visible';
    cross.style.visibility = 'hidden';
 }))
