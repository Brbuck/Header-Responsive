const menu = document.querySelector('.nav-ul')
const button = document.querySelector('.toggle')

button.addEventListener('click', () =>{
    menu.classList.toggle('show')
})