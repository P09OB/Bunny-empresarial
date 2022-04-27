const authModal = document.createElement('section');
authModal.classList.add('modal');
authModal.innerHTML = `
<div class="modal__backdrop"></div>
<article class="modal__content">
    <input class="modal__close" type="image" src="./imag/cancel.png">
    <h1>"Gracias por registrarse"</h1>
</article>
`;

document.body.appendChild(authModal);

const modalClose = document.querySelector('.modal__close');


function handleModalAppear() {
    authModal.style.opacity = 1;
    authModalContent.style.transform = 'translate(0px, 0px)';
}

function handleCloseModal() {
    authModal.style.opacity = 0;
    authModalContent.style.transform = 'translate(0px, -500px)';
    document.body.style.overflow = 'hidden scroll';
    setTimeout(function () {
        authModal.style.display = 'none';
    }, 500);
}

modalClose.addEventListener('click', handleCloseModal);
