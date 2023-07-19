const phoneInput = document.querySelector('#phone_input')
const phoneCheck = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /\+996 \d{3} \d{2}-\d{2}-\d{2}/

phoneCheck.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
})

//TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tab_content_item_active')
    })
}


const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    const targetElement = event.target
    if (targetElement.classList.contains('tab_content_item_active')){
        tabs.forEach((tab, tabIndex) => {
            if(targetElement === tab) {
                hideTabContent()
                showTabContent()
            }
        })
    }
}

const slider = () => {
    index++;
    if(index > tabs.length -1) {
        index = 0
    }
    hideTabContent()
    showTabContent(index)
}
interval = setInterval(slider, 3000)