//modal

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
    event.target === modal && closeModal()
}
function showModal() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        modal.style.display = 'block'
        window.removeEventListener('scroll', showModal)
    }
}

window.addEventListener('scroll', showModal)

setTimeout(function() {
    modal.style.display = 'block';
}, 10000);

