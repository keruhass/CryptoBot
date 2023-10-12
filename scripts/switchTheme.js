
let themeState = true

let stateBtn = document.querySelector('#mode-1')

let page = document.querySelector('html')

//Text

let text_p = document.querySelectorAll('p')
let text_h1 = document.querySelectorAll('h1')
let text_h2 = document.querySelectorAll('h2')
let navText = document.querySelectorAll('.header-nav-bullets a')
let sectionLists = document.querySelectorAll('.section-3-lists')

// Images

let img_phone = document.querySelector('#header-phone')

let themeButton_1 = document.querySelector('#mode-1')
let themeButton_2 = document.querySelector('#mode-2')
let img_stroke_dark = document.querySelector('.main-section_2-block_2-verification img')
let img_screen_dark = document.querySelector('#screen-img')

let img_str_1 = document.querySelector('.exchange-str-1')
let img_str_2 = document.querySelector('.exchange-str-2')

let img_1 = document.querySelector('#message-img-1')
let img_2 = document.querySelector('#message-img-2')
let img_3 = document.querySelector('#message-img-3')
let img_4 = document.querySelector('#message-img-4')

// Block's

let section_1 = document.querySelector('.main-section_1')
let section_3 = document.querySelector('.main-section_3')

let blocks = document.querySelectorAll('.section-2-blocks')

// Button's

let navButton = document.querySelector('.header-nav-button-mode__button')
let createButton = document.querySelector('.main-section_2-block_1-commission-button button')

// Decoration elements 

let circleBorder_1 = document.querySelectorAll('.circle-border-1')
let circleBorder_2 = document.querySelectorAll('.circle-border-2')
let exchangeDecoration = document.querySelector('.main-section_2-block_1-exchange-currencies-str')
let apiBlock = document.querySelector('.main-section_4-api-block')
let numberCircles = document.querySelectorAll('.main-section_3-blocks-content__number')
let numberCircles_h1 = document.querySelectorAll('.main-section_3-blocks-content__number h1')
let footer = document.querySelector('footer')
let footerDecoration = document.querySelector('.footer__decoration-block')

function darkTheme() {

    themeButton_1.style.opacity = '0'
    themeButton_2.style.opacity = '1'

    text_h1.forEach(function(item) {
        item.style.color = 'white'
    })
    text_h2.forEach(function(item) {
        item.style.color = 'white'
    })
    text_p.forEach(function(item) {
        item.style.color = 'white'
    })
    navText.forEach(function(item) {
        item.style.color = 'white'
    })
    sectionLists.forEach(function(item) {
        item.style.color = 'white'
    })

    page.style.backgroundColor = '#0D0D12'
    page.style.transition = 'all 0.5s ease'

    img_phone.src = 'https://psv4.userapi.com/c237031/u148033992/docs/d37/0843eebeaebe/img_phone_dark.png?extra=_lx054H5GDhzjoaaPtjOr11jQpwIeE4U37me7yaMjtBWo7UTfpMxb9KhiJA0xnx9XC6XASl5vqmmlPohyCPMbuKk5Ona09fkMUsU7yw0bvfmJhhgDIAUt8kx2G0WIMSWhwpRK9Jqea04MqQeBEoMzF-C2w'

    img_1.src = 'https://s3-alpha-sig.figma.com/img/1624/dee6/ab0c7a1dfd3f83f496a949901eed2706?Expires=1698019200&Signature=VP0I-bwniWtH~FkPB5Jq0LrqrQrRqwlI6a-dwVy6suwG5GTXRk772dQUHjAsIX83p8xm4DTDjC0~NeigSQWGEomrmhbCbF~n1z9cMziL0i7YjjQTX0bpqRGEfP3JE4H2B5Ozurnx1OgYCpllHgP8yh59IRSh6KPQegIvB6CF6BSQZtiNQrtGeJgVi8ba0ti90BDrEfNQc5uhc0Xo-UP1GhExe94hQiJwt1C5lep2sy384d51ygZkOy8XA8VFXZ6L665j99ZzGkLiw5LOcEuiL0xxw1pZavjtWAn4K4drXZ2G6V5k1YsUD9-nfHjodNSbnznnXxd5W9H0yne6ccO~Vw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    img_2.src = 'https://s3-alpha-sig.figma.com/img/e2ae/e76d/850b3d876fe5d4c359cea7ab24e9d7d6?Expires=1698019200&Signature=SnUZnp2dt62Ez~FJQHA~m2JsxJntNPBiPGGj7g~Rfvcgdr4ctv5EDIEBX7elpEOuL~dF4Hh2WJyXfENB4BcjpzawOYVYwNb8ZNj0TUrSMPmew337MflbH-tuBWbGIqkbv8m0mi1p1tnJ7AqmTauxhkRSttutzy6lH7ub6B9XlsAZNwIHK666TbMbb4IxU~9LAzr~x8FxN4EEyxWOGwi4IIKB-3OVyNgv2qKVM3AJ9Cx9TeBufFB~34xblYxm3G2VyluSJsjnM0XJAWFqhS65zJz5WuyrtgJrEPJd2JAzOFxtkKDe7nDqINcbvHZlwEGTtZth80Nffpk3aMkwO5i5pQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    img_3.src = 'https://s3-alpha-sig.figma.com/img/b7f6/0f21/c57c00df6f9ffc7c5da2d13a975f49f4?Expires=1698019200&Signature=o8GWh0Tko01K~irDAHomI1Vg~IEvCrEN93nU2wJcd-EiInMnd7a0JOZ~19fcBK-BLhzrvacwNq-pC0vbiczx~-4BGi9vuhyF708uGXUyPpwhDlchsNHITU9Mgkpgfa1fqZD8H26HqlUzmGMJtwarMoG9Cz4G6py6kOzndzrqxDtyAYc39Ap3~Uk13LQeHgccYniEKYDATti4wF~ogzfLw7z~s9xuwtQDFzZF7qCEk9gS6~x~g1hRZhia58bcp9Uc-f~IqTGd5Yoy0fuG2iZlozL~Tqzdo0U3-WyPBTvq-wwyXjRx2wnbDdf9NeCrsD6CL8Fz2oOtu6bDEaJw79WnhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    img_4.src = 'https://s3-alpha-sig.figma.com/img/1624/dee6/ab0c7a1dfd3f83f496a949901eed2706?Expires=1698019200&Signature=VP0I-bwniWtH~FkPB5Jq0LrqrQrRqwlI6a-dwVy6suwG5GTXRk772dQUHjAsIX83p8xm4DTDjC0~NeigSQWGEomrmhbCbF~n1z9cMziL0i7YjjQTX0bpqRGEfP3JE4H2B5Ozurnx1OgYCpllHgP8yh59IRSh6KPQegIvB6CF6BSQZtiNQrtGeJgVi8ba0ti90BDrEfNQc5uhc0Xo-UP1GhExe94hQiJwt1C5lep2sy384d51ygZkOy8XA8VFXZ6L665j99ZzGkLiw5LOcEuiL0xxw1pZavjtWAn4K4drXZ2G6V5k1YsUD9-nfHjodNSbnznnXxd5W9H0yne6ccO~Vw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    
    img_str_1.src = 'https://psv4.userapi.com/c236331/u148033992/docs/d1/20233d71e92e/Vector_626.png?extra=wqZzECXFN7h-KVNFonhU8niMqT0uSYC0_bL3KVGDRcvCM1XdvbHwkCZd4lZZX3uKdN_AyNsYrc7ZIU5xtfzdx-VM329LFPXeym8mnCc0XdFNtNuwQdm8CRHppnYbC-pVhZNQBNHhOQ9PG3UrWTqCztlU-g'
    img_str_2.src = 'https://psv4.userapi.com/c236331/u148033992/docs/d54/38696afcf46f/Vector_629.png?extra=Gt_OfEOV95gHce4oFh7gipdAjXOo4-rmpr4MuctiRX7fDXC--grREp5ihFFZVDZnNiK_UJabLy_rhKrvgjPuvDRkUdBE2J4pfNARzEK9ikk41ghGgfzfCiUSyED2yEszOBCJK_9dciuRuhj_vLD-JJkChQ'

    img_stroke_dark.src = 'https://psv4.userapi.com/c237031/u148033992/docs/d4/c29980e10d35/img_stroke.png?extra=mNciiuz1IFgEE3JNch2y_8zDR69V8sym8A4iZW2WxQyQVVOnHHiITRHNVZ_2PO8bz2Cn_KFWsC_8EzT9or0RwSeBfbEdHIGXHuho9ZiPtmDM3ZyXJDwp4BV09kU3DfmxQ-bSUXV5nGB9fWjz6q0JnM_aGQ'
    img_screen_dark.src = 'https://sun9-75.userapi.com/impg/3EavocXtY9H8r79JnUGDyQ8hUsyFmsp2YGrGTQ/1BIsEIW5FlY.jpg?size=857x668&quality=96&sign=d438f23ac5644f2ccffc65d7f2c9e7de&type=album'
    img_screen_dark.style.borderBottomLeftRadius = '30px'
    img_screen_dark.style.borderBottomRightRadius = '30px'

    section_1.style.backgroundColor = '#18181D'
    section_3.style.backgroundColor = '#18181D'

    blocks.forEach(function(item) {
        item.style.backgroundColor = '#18181D'
    })

    navButton.style.backgroundColor = 'transparent'
    navButton.style.border = '1px solid rgba(255, 255, 255, 0.60)'
    createButton.style.border = '0'
    createButton.style.background = 'linear-gradient(233deg, #9FCCFA -20.48%, #0974F1 97.38%)'

    circleBorder_1.forEach(function(item) {
        item.style.border = '4px solid #0D0D12'
        item.style.transition = '0.5s ease'
    })
    circleBorder_2.forEach(function(item) {
        item.style.border = '4px solid #18181D'
    })
    numberCircles.forEach(function(item) {
        item.style.background = 'none'
        item.style.backgroundColor = '#FFF'
    })
    numberCircles_h1.forEach(function(item) {
        item.style.color = 'black'
    })
    exchangeDecoration.style.border = '1px solid black'
    exchangeDecoration.style.backgroundColor = 'rgba(17, 17, 17, 0.40)'
    apiBlock.style.border = '1px solid #0D0D12'

    footer.style.backgroundColor = '#18181D'
    footerDecoration.style.backgroundColor = '#0D0D12'

    themeState = false
    
}
function lightTheme() {
    
    themeButton_1.style.opacity = '1'
    themeButton_2.style.opacity = '0'

    text_h1.forEach(function(item) {
        item.style.color = ''
    })
    text_h2.forEach(function(item) {
        item.style.color = ''
    })
    text_p.forEach(function(item) {
        item.style.color = ''
    })
    navText.forEach(function(item) {
        item.style.color = ''
    })
    sectionLists.forEach(function(item) {
        item.style.color = ''
    })

    page.style.backgroundColor = ''
    page.style.transition = 'all 0.5s ease'

    img_phone.src = 'https://psv4.userapi.com/c237031/u148033992/docs/d1/dae5b9aa3795/img_phone.png?extra=xUGO03HVPvVL0344mTbDxHAqPybjY5bJt3UraggBnDMioCq50MXyKyG-7NVs6e886OVteFRw_Y5R4fLXQqjWyJdYokIM9RJlDKchPd_MTXEbbhLI01g8FpI1L_VgsH0BnagMzwHJAT8ldqHW4qyTWIIt6Q'

    img_1.src = 'https://psv4.userapi.com/c237031/u148033992/docs/d40/5ddd11c65059/img_message_1.png?extra=_XA-HVPxM-ydIz1mxsl01cn-i7CNHbtcK2Do3gZ6h8wTwNxTz6jRd5G0ApM0I7Td9rsQidxtmzRVo2t_4YGjf1DpRI3CTsQFW9aNCDaIQJzm9t1Dr10QtGMwXhsInttNcoKzhLFFZY1aVS2WwmQ-IZ7nrQ'
    img_2.src = 'https://psv4.userapi.com/c237031/u148033992/docs/d42/1ab73b733598/img_message_2.png?extra=WQj9_nMr_1hJMHwVaGdM6wKOQflsJZOB5sncTADt_IUpN9nNxisDWSjR4wLU9bPoBF3LjiA1y4YyUOmgaCxe1irR2nKlmCRAHDmGelfZj1CcL7361MqFA8cVybcDxZX2UMwSeu-7aYFnaAHOU7OGI1Z4Iw'
    img_3.src = 'https://psv4.userapi.com/c237031/u148033992/docs/d34/fed0507cbec4/img_message_3.png?extra=xKwGaLkZAyKZmodJJnd3DO_Uzf1ounmF1LYlbMR61wQHDWzuOP7lqXaJznHcH9GlFC0GSOHwdYgf70gHWtZudO8ZuvJM7imcrX3FgUGZvAj5ylD2AgpKHEtFM5aGRy8H_2sfvVScqOnq-jtuCES_Ud4ZfQ'
    img_4.src = 'https://psv4.userapi.com/c237031/u148033992/docs/d40/5ddd11c65059/img_message_1.png?extra=_XA-HVPxM-ydIz1mxsl01cn-i7CNHbtcK2Do3gZ6h8wTwNxTz6jRd5G0ApM0I7Td9rsQidxtmzRVo2t_4YGjf1DpRI3CTsQFW9aNCDaIQJzm9t1Dr10QtGMwXhsInttNcoKzhLFFZY1aVS2WwmQ-IZ7nrQ'
    
    img_str_1.src = 'https://psv4.userapi.com/c237031/u148033992/docs/d5/da9216468578/Vector_629.png?extra=JAWDRh1sHUimkfQ-pmn_SRE5VIEsDHaOUO4Un4Kwzh7iiJ3Fu4NGoK3imW1JY7hx29TofnZnWYv1luMoXt1xbg6qj_8Yg3eDs8v213vhIuco6NltcLeJZNCrQfdLcFWrNScl-TNJOLfCvvT-jVc8jdC33g'
    img_str_2.src = 'https://psv4.userapi.com/c237031/u148033992/docs/d29/bb5e8852afcb/Vector_626.png?extra=ZtdzkVCmb2mw6AOxOJVz0V1y9qaQIYG2pS1ZleUcGrQB2GMV-SsU_-DCN8IA0dcDTEa_ywUhEsfwWomGpm3fEGqD94lANCpmBGXpCNe1Okg1jT23IlnHOHcFlTQcYdf6qFPIhop2K36B_zjRiIPRdFvyoQ'

    img_stroke_dark.src = 'https://psv4.userapi.com/c237031/u148033992/docs/d51/2edc50cfe6fc/img_stroke.png?extra=r3BpLMeaRsEKUlJyslH0R6TaZgxdA6oqAuGhvgEE0mpp_gXjnz9q7LNf4pyVu8itBp1Pb-OgYQLMRytyLaMLWJo10P02_lg5HDB49nQMdhux6ANBU7tgW8TDmF7xET8PyuOydBfaVnDIRFP6zgV0TlUhLw'
    img_screen_dark.src = 'https://psv4.userapi.com/c237031/u148033992/docs/d44/7ace014ead81/img_screen.png?extra=g7uOtpQ6tH1T7HQP8sdppEp5p3G1V0hwfOBy9pQ77Hulf9X_3T-u9a-HilCV6rHdS8ek9pJAF3u3VLXRHIJva-4EeIzSAbqdJzLA1r4Rhr0EzLd6_Sdm4VN_WGx_IxBdNvt_AxPxY-GKo2GgSgKfhK61pQ'
    img_screen_dark.style.borderBottomLeftRadius = ''
    img_screen_dark.style.borderBottomRightRadius = ''

    section_1.style.backgroundColor = ''
    section_3.style.backgroundColor = ''

    blocks.forEach(function(item) {
        item.style.backgroundColor = ''
    })

    navButton.style.backgroundColor = ''
    navButton.style.border = ''
    createButton.style.border = ''
    createButton.style.background = ''

    circleBorder_1.forEach(function(item) {
        item.style.border = ''
        item.style.transition = '0.5s ease'
    })
    circleBorder_2.forEach(function(item) {
        item.style.border = ''
    })
    numberCircles.forEach(function(item) {
        item.style.background = ''
        item.style.backgroundColor = ''
    })
    numberCircles_h1.forEach(function(item) {
        item.style.color = ''
    })
    exchangeDecoration.style.border = ''
    exchangeDecoration.style.backgroundColor = ''
    apiBlock.style.border = ''

    footer.style.backgroundColor = ''
    footerDecoration.style.backgroundColor = ''
    
    themeState = true
}
stateBtn.addEventListener('click', function() {
    if (themeState == true) {
        darkTheme()
    } else {
        if (themeState == false) {
            lightTheme()
        }
    }
})