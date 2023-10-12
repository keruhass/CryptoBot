let secondInteractionElement = document.querySelector('.main-section_2-block_1-stat')

let firstImage = document.getElementById('stat-img-1')
let secondImage = document.getElementById('stat-img-2')
let thirdImage = document.getElementById('stat-img-3')

function secondAnimation() {
    firstImage.style.opacity = '0'
    secondImage.style.opacity = '1'

    setTimeout(function() {
        secondImage.style.opacity = '0'
        thirdImage.style.opacity = '1'
    }, 1000)

    setTimeout(function() {
        thirdImage.style.opacity = '0'
        firstImage.style.opacity = '1'
    }, 2000)
}

let observer_2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            secondAnimation()
            observer_2.unobserve(secondInteractionElement)
        }
    })
}, {
    threshold: 1
})
observer_2.observe(secondInteractionElement)