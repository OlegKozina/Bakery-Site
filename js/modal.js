const modal = document.querySelector('.backdrop');

const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');


modalBtnClose.addEventListener('click', toggleModal);


const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
modalBtnOpen.forEach((el)=>{
    el.addEventListener('click', toggleModal)
}
   
)




