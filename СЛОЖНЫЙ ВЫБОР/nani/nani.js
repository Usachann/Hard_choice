const buttonYes = document.querySelector('.button__yes')
const buttonNo = document.querySelector('.button__no')
const title = document.querySelector('.header__nani')

buttonYes.addEventListener('click', () => {
    title.textContent = 'Ебашь тада'
})

buttonNo.addEventListener('click', () => {
   buttonNo.styledisplay = 'no'
   title.textContent = 'Ультраплох!'
   setTimeout(() => {
    title.textContent = 'Позорище'
   }, 1000)
})
