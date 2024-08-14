const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const closeButton = document.querySelector('.popup-close')

button.addEventListener('click', () => {
    popup.style.display = 'block'})

closeButton.addEventListener('click', () => {
    popup.style.display = 'none'
})

popup.addEventListener('click', () => {
    popup.style.display = 'none'
})