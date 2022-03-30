var options = {
    strings: ['A Web-Developer!', 'A Programmer!','An Engineer!','A Student!','An Enthusiast!','An Artist!'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
    
    cursorChar: "|"
};

var typed = new Typed('#element', options);
AOS.init();

let bar=document.getElementById("bar-icon")
let mobileNav=document.getElementById("film")
/*let navName=document.getElementById("navbar")*/
let navOpen=false
function navController(){
    if(!navOpen){
        navOpen=true
        bar.classList.add("bar_open")
        mobileNav.classList.add("open")
        const links = document.querySelectorAll('.link')
        setTimeout(()=>{
            links.forEach(link=>{
                link.style.opacity = '1'
            })
        },1000)
        /*navName.classList.add("ph-my-nav")*/
    }else{

        const links = document.querySelectorAll('.link')
        links.forEach(link=>{
            link.style.opacity = '0'
        })
        setTimeout(()=>{
            bar.classList.remove("bar_open")
            mobileNav.classList.remove("open")
            /*navName.classList.remove("ph-my-nav")*/
            navOpen=false 
        },300)
    }
}