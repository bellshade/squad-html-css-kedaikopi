// tulis kode javascript yang dibutuhkan disini ...
const togglerEl = document.querySelector('#hamburger-menu')
const navbarEl = document.querySelector('.navbar .navbar-nav')
togglerEl.addEventListener('click', () => {
    navbarEl.classList.toggle('active')
})

document.addEventListener('click', (e) => {
    if (!togglerEl.contains(e.target) && !navbarEl.contains(e.target)) {
        navbarEl.classList.remove('active')
    }
})
