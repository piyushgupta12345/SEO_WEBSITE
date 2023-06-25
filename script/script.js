const ul = document.querySelector('ul');
const menuBar = document.getElementById('menu')
// const closeBar = document.getElementById('close')

menuBar.addEventListener('click', () => {
    ul.classList.toggle('active')
})


