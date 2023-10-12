let interactionElement = document.querySelector('.main-section_2-block_1-exchange')

let firstValue = document.getElementById('value-2_1')
let secondValue = document.getElementById('value-2_2')
let thirdValue = document.getElementById('value-2_3')

let firstValueImage = document.querySelector('#value-2_1 img')
let secondValueImage = document.querySelector('#value-2_2 img')
let thirdValueImage = document.querySelector('#value-2_3 img')

function reassignment_1() {
    firstValue = document.getElementById('value-2_1')
    secondValue = document.getElementById('value-2_2')
    thirdValue = document.getElementById('value-2_3')

    firstValueImage = document.querySelector('#value-2_1 img')
    secondValueImage = document.querySelector('#value-2_2 img')
    thirdValueImage = document.querySelector('#value-2_3 img')
}

function reassignment_2() {
    firstValue = document.getElementById('value-2_3')
    secondValue = document.getElementById('value-2_1')
    thirdValue = document.getElementById('value-2_2')

    firstValueImage = document.querySelector('#value-2_3 img')
    secondValueImage = document.querySelector('#value-2_1 img')
    thirdValueImage = document.querySelector('#value-2_2 img')
}

function reassignment_3() {
    firstValue = document.getElementById('value-2_2')
    secondValue = document.getElementById('value-2_3')
    thirdValue = document.getElementById('value-2_1')
    
    firstValueImage = document.querySelector('#value-2_2 img')
    secondValueImage = document.querySelector('#value-2_3 img')
    thirdValueImage = document.querySelector('#value-2_1 img')
}

function movement() {
    firstValue.style.marginLeft = '34px'
    secondValue.style.marginLeft = '68px'
    thirdValue.style.marginLeft = '0'

    firstValue.style.zIndex = '2'
    secondValue.style.zIndex = '3'
    thirdValue.style.zIndex = '1'

    firstValueImage.style.opacity = '0'
    secondValueImage.style.opacity = '1'
    thirdValueImage.style.opacity = '0'
}

function animation() {
    movement()
    setTimeout(function() {
        reassignment_2()
        movement()
    }, 1000)

    setTimeout(function() {
        reassignment_3()
        movement()
    }, 2000)
    setTimeout(function() {
        reassignment_1()
    }, 3000)
}
let options = {
    threshold: 1,
}
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animation()
            observer.unobserve(interactionElement)
        }
    })
}, options)
observer.observe(interactionElement)