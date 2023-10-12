let fourthInteractionElement = document.querySelector('.main-section_2-block_2-anonymous')

let firstAnoImage = document.getElementById('anonymous-img-1')
let secondAnoImage = document.getElementById('anonymous-img-2')
let thirdAnoImage = document.getElementById('anonymous-img-3')
let fourthAnoImage = document.getElementById('anonymous-img-4')

function movement_1_1() {
    firstAnoImage.style.opacity = '0'
    secondAnoImage.style.transform = 'scale(90%) translateY(-15px)'
    secondAnoImage.style.opacity = '0.5'
    secondAnoImage.style.zIndex = '1'
    thirdAnoImage.style.transform = 'translateY(0px)'
    thirdAnoImage.style.opacity = '1'
    thirdAnoImage.style.zIndex = '2'
}
function movement_2_2() {
    secondAnoImage.style.opacity = '0'
    thirdAnoImage.style.transform = 'scale(90%) translateY(-15px)'
    thirdAnoImage.style.opacity = '0.5'
    thirdAnoImage.style.zIndex = '1'
    fourthAnoImage.style.transform = 'translateY(0px)'
    fourthAnoImage.style.opacity = '1'
    fourthAnoImage.style.zIndex = '2'
}

function fourthAnimation() {
    firstAnoImage.style.transform = 'scale(90%) translateY(-15px)'
    firstAnoImage.style.opacity = '0.5'
    firstAnoImage.style.zIndex = '1'
    secondAnoImage.style.transform = 'translateY(0px)'
    secondAnoImage.style.opacity = '1'
    secondAnoImage.style.zIndex = '2'

    setTimeout(function() {
        movement_1_1()
    }, 1000)

    setTimeout(function() {
        movement_2_2()
    }, 2000)
    console.log('1')
}

let observer_4 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fourthAnimation()
            observer_4.unobserve(fourthInteractionElement)
        }
    })
}, {
    threshold: 1
})
// obserAno_3.observe(thirdInteractionElement)
fourthInteractionElement.addEventListener('click', fourthAnimation)