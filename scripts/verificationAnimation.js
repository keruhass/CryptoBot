let thirdInteractionElement = document.querySelector('.main-section_2-block_2-verification')

let firstVerImage = document.getElementById('message-img-1')
let secondVerImage = document.getElementById('message-img-2')
let thirdVerImage = document.getElementById('message-img-3')
let fourthVerImage = document.getElementById('message-img-4')

function movement_1() {
    firstVerImage.style.opacity = '0'
    secondVerImage.style.transform = 'scale(90%) translateY(-20px)'
    secondVerImage.style.opacity = '0.5'
    secondVerImage.style.zIndex = '1'
    thirdVerImage.style.transform = 'translateY(0px)'
    thirdVerImage.style.opacity = '1'
    thirdVerImage.style.zIndex = '2'
}
function movement_2() {
    secondVerImage.style.opacity = '0'
    thirdVerImage.style.transform = 'scale(90%) translateY(-20px)'
    thirdVerImage.style.opacity = '0.5'
    thirdVerImage.style.zIndex = '1'
    fourthVerImage.style.transform = 'translateY(0px)'
    fourthVerImage.style.opacity = '1'
    fourthVerImage.style.zIndex = '2'
}

function thirdAnimation() {
    firstVerImage.style.transform = 'scale(90%) translateY(-20px)'
    firstVerImage.style.opacity = '0.5'
    firstVerImage.style.zIndex = '1'
    secondVerImage.style.transform = 'translateY(0px)'
    secondVerImage.style.opacity = '1'
    secondVerImage.style.zIndex = '2'

    setTimeout(function() {
        movement_1()
    }, 1000)

    setTimeout(function() {
        movement_2()
    }, 2000)
}

let observer_3 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            thirdAnimation()
            observer_3.unobserve(thirdInteractionElement)
        }
    })
}, {
    threshold: 1
})
// observer_3.observe(thirdInteractionElement)
thirdInteractionElement.addEventListener('click', thirdAnimation)