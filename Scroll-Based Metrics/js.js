let stars = document.querySelector('#stars')
let moon = document.querySelector('#moon')
let mountains1 = document.querySelector('#mountains3')
let mountains2 = document.querySelector('#mountains4')
let river = document.querySelector('#river')
let boat = document.querySelector('#boat')
let titleName = document.querySelector('.titleName')

window.onscroll = () => {
    let scrolValue = scrollY
    stars.style.left = `${scrolValue}px`
    moon.style.top = `${scrolValue * 4}px`
    mountains1.style.top = `${scrolValue * 2}px`
    mountains2.style.top = `${scrolValue * 1.5}px`
    river.style.top = `${scrolValue}px`
    boat.style.top = `${scrolValue}px`
    boat.style.left = `${scrolValue * 3}px`
    titleName.style.fontSize = `${scrolValue}px`
    if (scrolValue >= 72.5) {
        titleName.style.fontSize = `72.5px`
        if (scrolValue >= 502.5) {
            titleName.style.display = 'none'
        } else {
            titleName.style.display = 'block'
        }
    }
    if (scrolValue >= 117.5) {
        document.querySelector('.main').style.backgroundImage = 'linear-gradient(#376281, #10001f)'
    } else {
        document.querySelector('.main').style.backgroundImage = 'linear-gradient(#200016, transparent)'
    }
    
}