
function menu(){
    var menu = document.getElementById('opçoes-menu')
    var main = document.querySelector('main')
    if (menu.style.display == 'none'){
        menu.style.display = 'block'
        menu.classList.add('aparecer-menu')
        main.style.opacity = '0.5'
        main.style.filter = 'grayscale(1)'
    } else {
        menu.style.display = 'none'
        main.style.opacity = '1'
        main.style.filter = 'grayscale(0)'
        menu.classList.add('desaparecer-menu')
    }
}