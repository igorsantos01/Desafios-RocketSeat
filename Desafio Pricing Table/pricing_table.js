const buttonClick = document.querySelectorAll('.button')
const articleAlt = document.querySelectorAll('.table')
const divAlt = document.querySelectorAll('div')

buttonClick[0].addEventListener('click', function(){
    buttonClick[1].classList.replace('buttonClick', 'button')

    buttonClick[2].classList.replace('buttonClick', 'button')

    articleAlt[1].classList.replace('newTable','table')

    articleAlt[2].classList.replace('newTable','table')

    divAlt[1].classList.remove('newBanner')

    divAlt[2].classList.remove('newBanner')

    buttonClick[0].classList.replace('button','buttonClick')
    
    articleAlt[0].classList.replace('table','newTable')
    
    divAlt[0].classList.add('newBanner')
})

buttonClick[1].addEventListener('click', function(){
    
    buttonClick[0].classList.replace('buttonClick', 'button')

    buttonClick[2].classList.replace('buttonClick', 'button')

    articleAlt[0].classList.replace('newTable','table')

    articleAlt[2].classList.replace('newTable','table')

    divAlt[0].classList.remove('newBanner')

    divAlt[2].classList.remove('newBanner')

    buttonClick[1].classList.replace('button','buttonClick')

    articleAlt[1].classList.replace('table','newTable')

    divAlt[1].classList.add('newBanner')
})

buttonClick[2].addEventListener('click', function(){
    buttonClick[0].classList.replace('buttonClick', 'button')

    buttonClick[1].classList.replace('buttonClick', 'button')

    articleAlt[0].classList.replace('newTable','table')

    articleAlt[1].classList.replace('newTable','table')

    divAlt[0].classList.remove('newBanner')

    divAlt[1].classList.remove('newBanner')

    buttonClick[2].classList.replace('button','buttonClick')

    articleAlt[2].classList.replace('table','newTable')
    
    divAlt[2].classList.add('newBanner')
})


