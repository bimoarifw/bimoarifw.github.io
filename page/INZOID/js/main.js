// ShowMenu
const navMenu = document.getElementById('nav-menu'),
    toogleMenu = document.getElementById('nav-toogle')

toogleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu')
})

const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Modal
function modal(){
    var modal = document.getElementById('modal');
    modal.classList.toggle('active')
}
function modal2(){
    var modal = document.getElementById('modal2');
    modal.classList.toggle('active')
}
function modal3(){
    var modal = document.getElementById('modal3');
    modal.classList.toggle('active')
}
// Accordion
const accordionContent = document.querySelectorAll('.accordion__content')

accordionContent.forEach((item, index) => {
    let header = item.querySelector('.accordion__header');
    header.addEventListener('click', () =>{
        item.classList.toggle('open');
        let deskripsi = item.querySelector ('.accordion__description');
        if(item.classList.contains('open')){
            item.querySelector('i').classList.replace('ri-add-line', 'ri-subtract-line');
            deskripsi.style.height = deskripsi.scrollHeight + 'px';
        }else{
            deskripsi.style.height = '0px';
            item.querySelector('i').classList.replace('ri-subtract-line', 'ri-add-line' );
        }
        removeOpen(index);
    }) 
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if (index1 !=index2) {
            item2.classList.remove('open');

            let des = item2.querySelector('.accordion__description');
            des.style.height = '0px';
            item2.querySelector('i').classList.replace('ri-subtract-line', 'ri-add-line' );
        }
    })
}

