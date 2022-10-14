const tabs = document.querySelectorAll('.tap'),
    panels = document.querySelectorAll('.panel'),
    menuBtn = document.getElementById('menu-btn'),
    menu = document.getElementById('menu'),
    logo = document.getElementById('logo');

tabs.forEach(tab => { tab.addEventListener('click', ToggleTap) })

function ToggleTap(e) {
    // taps
    tabs.forEach(tab => { tab.firstElementChild.classList.remove('border-b-4', 'border-softRed') })
    e.target.classList.add('border-b-4', 'border-softRed')


    // panels
    panels.forEach(panel => {
        if (panel.classList.contains('flex')) {
            panel.classList.remove('flex')
        }
        panel.classList.add('hidden')

        if (panel.classList.contains(e.target.getAttribute('data-target'))) {
            panel.classList.remove('hidden')
            panel.classList.add('flex')
        }
    })
}


// Humberger menu
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')

})


// close nav when click links
const Features = document.querySelector('.features'),
    Download = document.querySelector('.download'),
    Faq = document.querySelector('.faq'),
    Login = document.querySelector('.login');

function CloseHamburgerMenu() {
    menuBtn.classList.toggle('open')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
}

Features.addEventListener('click', CloseHamburgerMenu)
Download.addEventListener('click', CloseHamburgerMenu)
Faq.addEventListener('click', CloseHamburgerMenu)
Login.addEventListener('click', CloseHamburgerMenu)