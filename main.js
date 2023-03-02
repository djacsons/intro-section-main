const featMenu = document.getElementsByClassName('flexMenu')[0]
const featLink = document.querySelector('#featLink')
const compMenu = document.getElementsByClassName('flexMenu')[1]
const compLink = document.querySelector('#compLink')
const upperMenu1 = document.querySelector('#upperMenu1')
const closeMenu = document.querySelector('#closeMenu')
const mainMenu = document.querySelector('.dropDowns')
const openMenu = document.querySelector('#openMenu')
const darkScreen = document.querySelector('#darkScreen')
//for changes in mobile heights:
let menuHeightNum = 15
let heightChange = 12

featLink.addEventListener('click', ()=>{
    if (window.innerWidth > 600){
        if (featMenu.classList.contains('invisible')) featMenu.classList.remove('invisible')
        else if (!featMenu.classList.contains('invisible')) featMenu.classList.add('invisible')
    }
    else{
        if (featMenu.classList.contains('invisible')) {
            featMenu.classList.remove('invisible')
            featMenu.classList.remove('featuresMenu')
            menuHeightNum+=heightChange
            upperMenu1.style.height = `${menuHeightNum}rem`
        }
        else if (!featMenu.classList.contains('invisible')) {
            featMenu.classList.add('invisible')
            featMenu.classList.add('featuresMenu')
            menuHeightNum-=heightChange
            upperMenu1.style.height = `${menuHeightNum}rem`
        }
    }

})
compLink.addEventListener('click', ()=>{
    if (window.innerWidth > 600){
        if (compMenu.classList.contains('invisible')) compMenu.classList.remove('invisible')
        else if (!compMenu.classList.contains('invisible')) compMenu.classList.add('invisible')
    }
    else{
        if (compMenu.classList.contains('invisible')){
            compMenu.classList.remove('invisible')
            compMenu.classList.remove('companyMenu')
            menuHeightNum+=heightChange
            upperMenu1.style.height = `${menuHeightNum}rem`
        } 
        else if (!compMenu.classList.contains('invisible')){
            compMenu.classList.add('invisible')
            compMenu.classList.add('companyMenu')
            menuHeightNum-=heightChange
            upperMenu1.style.height = `${menuHeightNum}rem`
        } 
    }
})
const menuCollapse = ()=>{
    if (!featMenu.classList.contains('invisible')){
        featMenu.classList.add('invisible')
        featMenu.classList.add('featuresMenu')
        menuHeightNum-=heightChange
        upperMenu1.style.height = `${menuHeightNum}rem`
    }
    if (!compMenu.classList.contains('invisible')){
        compMenu.classList.add('invisible')
        compMenu.classList.add('companyMenu')
        menuHeightNum-=heightChange
        upperMenu1.style.height = `${menuHeightNum}rem`
    } 
}
closeMenu.addEventListener('click', ()=>{
    mainMenu.style.visibility = 'hidden'
    darkScreen.style.visibility = 'hidden'
    menuCollapse()
})
openMenu.addEventListener('click', ()=>{
    mainMenu.style.visibility = 'visible'
    darkScreen.style.visibility = 'visible'
})
window.addEventListener('resize', ()=>{
    if (window.innerWidth>700){
        menuCollapse()
        mainMenu.style.visibility = 'visible'
    } 
    else mainMenu.style.visibility = 'hidden'
})
