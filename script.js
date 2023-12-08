const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const closebut = document.getElementById('close-button')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

closebut.addEventListener('click', () =>{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})