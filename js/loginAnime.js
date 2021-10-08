let btn = document.querySelector('.btn')
let btnSlide = document.querySelector('.btnSlide')
let form1 = document.querySelector('.form1')
let form2 = document.querySelector('.form2')
btnSlide.addEventListener('click', () => {
    let l = btn.style.left
    btn.style.left = (l == "" || l == "0px") ? '120px' : '0px'
    form1.style.left = (l == "" || l == "0px") ? '0px' : "-300px"
    form2.style.left = (l == "" || l == "0px") ? '300px' : "0px"
})