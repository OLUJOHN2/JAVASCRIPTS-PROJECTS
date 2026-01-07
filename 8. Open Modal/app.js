const openModalBtnElement = document.querySelector('#openModel');
const modalElement = document.querySelector('.modal');
const modalContentElement = modalElement.querySelector('.modal_content');

openModalBtnElement.addEventListener('click', () => {
    modalElement.classList.add('open');
});

modalContentElement.addEventListener('click', () => {
    modalContentElement.classList.remove('open');
});