var options = {
    strings: ['A Web-Developer!', 'A Programmer!', 'An Engineer!', 'A Student!', 'An Enthusiast!', 'An Artist!'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,

    cursorChar: "_"
};

var typed = new Typed('#element', options);
AOS.init();

let bar = document.getElementById("bar-icon")
let mobileNav = document.getElementById("film")
let navAnim = document.getElementById("navbar")

let navOpen = false
function navController() {
    if (!navOpen) {
        navOpen = true

        navAnim.classList.add("nav-color")
        const links = document.querySelectorAll('.link')
        setTimeout(()=>{
            bar.classList.add("bar_open")
            mobileNav.classList.add("open")
        },100)
        setTimeout(() => {
            links.forEach(link => {
                link.style.opacity = '1'
            })
        }, 1000)

    } else {

        const links = document.querySelectorAll('.link')
        links.forEach(link => {
            link.style.opacity = '0'
        })
        setTimeout(() => {
            bar.classList.remove("bar_open")
            mobileNav.classList.remove("open")
            setTimeout(()=>{
                navAnim.classList.remove("nav-color")
            },1000)

            navOpen = false
        }, 300)
    }
}