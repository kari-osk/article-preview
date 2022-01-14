let btn = document.querySelector('#btn')
let share = document.querySelector('#share-area')

btn.addEventListener('click', () => {
  share.classList.toggle('show')
  if (btn.style.backgroundColor == '#9eafc2') {
    btn.style.backgroundColor = '#48556a'
  } else {
    btn.style.backgroundColor = '#9eafc2'
  }
})
