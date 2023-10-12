let line_1 = document.getElementById('main-section_1-pagination__line-1')
let line_2 = document.getElementById('main-section_1-pagination__line-2')
let line_3 = document.getElementById('main-section_1-pagination__line-3')

let line_1_1 = document.getElementById('main-section_1-pagination__line-1-1')
let line_2_2 = document.getElementById('main-section_1-pagination__line-2-2')
let line_3_3 = document.getElementById('main-section_1-pagination__line-3-3')

let lineNumber = document.querySelector('.main-section_1-pagination__firstcounter')
let counter = 1

let slider = document.querySelector('.main-section_1-slider-line')
let offset = 0

line_1.style.background = '#41A4DF'
line_1_1.style.background = '#41A4DF'
document.querySelector('.main-section_1-slider').addEventListener('click', function() {

    if (window.innerWidth >= 1200) {
        if (offset == 0) {
            counter = 2
            offset = 488
            slider.style.marginTop = -offset + 'px'
            document.querySelector('.main-section_1-slider-line-block_1').style.opacity = '0'
            document.querySelector('.main-section_1-slider-line-block_2').style.opacity = '1'
            document.querySelector('.main-section_1-slider-line-block_3').style.opacity = '0'

            line_1.style.background = 'rgba(255, 255, 255, 0.24)'
            line_2.style.background = '#41A4DF'
            line_3.style.background = 'rgba(255, 255, 255, 0.24)'

            line_1_1.style.background = 'rgba(255, 255, 255, 0.24)'
            line_2_2.style.background = '#41A4DF'
            line_3_3.style.background = 'rgba(255, 255, 255, 0.24)'

            lineNumber.innerHTML = '0' + counter;
        } else {
            if (offset == 488) {
                counter = 3
                offset = 976
                slider.style.marginTop = -offset + 'px'
                document.querySelector('.main-section_1-slider-line-block_1').style.opacity = '0'
                document.querySelector('.main-section_1-slider-line-block_2').style.opacity = '0'
                document.querySelector('.main-section_1-slider-line-block_3').style.opacity = '1'

                line_1.style.background = 'rgba(255, 255, 255, 0.24)'
                line_2.style.background = 'rgba(255, 255, 255, 0.24)'
                line_3.style.background = '#41A4DF'

                line_1_1.style.background = 'rgba(255, 255, 255, 0.24)'
                line_2_2.style.background = 'rgba(255, 255, 255, 0.24)'
                line_3_3.style.background = '#41A4DF'

                lineNumber.innerHTML = '0' + counter;
            } else {
                if (offset == 976) {
                    counter = 1
                    offset = 0;
                    slider.style.marginTop = -offset + 'px'
                    document.querySelector('.main-section_1-slider-line-block_1').style.opacity = '1'
                    document.querySelector('.main-section_1-slider-line-block_2').style.opacity = '0'
                    document.querySelector('.main-section_1-slider-line-block_3').style.opacity = '0'

                    line_1.style.background = '#41A4DF'
                    line_2.style.background = 'rgba(255, 255, 255, 0.24)'
                    line_3.style.background = 'rgba(255, 255, 255, 0.24)'

                    line_1_1.style.background = '#41A4DF'
                    line_2_2.style.background = 'rgba(255, 255, 255, 0.24)'
                    line_3_3.style.background = 'rgba(255, 255, 255, 0.24)'

                    lineNumber.innerHTML = '0' + counter;
                }
            }
        }
    } else {


        if (offset == 0) {
            counter = 2
            offset = 605
            slider.style.marginTop = -offset + 'px'
            document.querySelector('.main-section_1-slider-line-block_1').style.opacity = '0'
            document.querySelector('.main-section_1-slider-line-block_2').style.opacity = '1'
            document.querySelector('.main-section_1-slider-line-block_3').style.opacity = '0'
            line_1.style.background = 'rgba(255, 255, 255, 0.24)'
            line_2.style.background = '#41A4DF'
            line_3.style.background = 'rgba(255, 255, 255, 0.24)'
            line_1_1.style.background = 'rgba(255, 255, 255, 0.24)'
            line_2_2.style.background = '#41A4DF'
            line_3_3.style.background = 'rgba(255, 255, 255, 0.24)'
            lineNumber.innerHTML = '0' + counter;
        } else {
            if (offset == 605) {
                counter = 3
                offset = 1210
                slider.style.marginTop = -offset + 'px'
                document.querySelector('.main-section_1-slider-line-block_1').style.opacity = '0'
                document.querySelector('.main-section_1-slider-line-block_2').style.opacity = '0'
                document.querySelector('.main-section_1-slider-line-block_3').style.opacity = '1'
                line_1.style.background = 'rgba(255, 255, 255, 0.24)'
                line_2.style.background = 'rgba(255, 255, 255, 0.24)'
                line_3.style.background = '#41A4DF'
                line_1_1.style.background = 'rgba(255, 255, 255, 0.24)'
                line_2_2.style.background = 'rgba(255, 255, 255, 0.24)'
                line_3_3.style.background = '#41A4DF'
                lineNumber.innerHTML = '0' + counter;
            } else {
                if (offset == 1210) {
                    counter = 1
                    offset = 0;
                    slider.style.marginTop = -offset + 'px'
                    document.querySelector('.main-section_1-slider-line-block_1').style.opacity = '1'
                    document.querySelector('.main-section_1-slider-line-block_2').style.opacity = '0'
                    document.querySelector('.main-section_1-slider-line-block_3').style.opacity = '0'
                    line_1.style.background = '#41A4DF'
                    line_2.style.background = 'rgba(255, 255, 255, 0.24)'
                    line_3.style.background = 'rgba(255, 255, 255, 0.24)'
                    line_1_1.style.background = '#41A4DF'
                    line_2_2.style.background = 'rgba(255, 255, 255, 0.24)'
                    line_3_3.style.background = 'rgba(255, 255, 255, 0.24)'
                    lineNumber.innerHTML = '0' + counter;
                }
            }
        }
    }
})