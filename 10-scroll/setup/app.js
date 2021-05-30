// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels


/* varibales */

const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector('.links');
const navBar = document.getElementById('nav');
const scrollLinks = document.querySelectorAll('.scroll-link');


// ********** set date ************

const currentDate = document.getElementById('date');
currentDate.innerHTML = new Date().getFullYear();

// ********** close links ************

navToggle.addEventListener('click', function(){
    showNavBar();
})

// ********** fixed navbar ************

window.addEventListener('scroll',function(){
    setNavBarFixed();
    showToTopButton();
})

// ********** smooth scroll ************

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();

        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position -= navHeight;
        }

        if(navHeight > 82){
            position += containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position
        })

        linksContainer.style.height = 0;
        navToggle.classList.remove('isActive');
    })
})

// select links


function showNavBar(){

    let linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(linksContainerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
        navToggle.classList.add('isActive')
    }else{
        linksContainer.style.height = 0;
        navToggle.classList.remove('isActive')
    }

}

function setNavBarFixed (){

    const navHeight = navBar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;
     if( scrollHeight > navHeight){
        navBar.classList.add('fixed-nav');
     }else{
         navBar.classList.remove('fixed-nav');
     }

}

function showToTopButton (){

    const toTopButton = document.querySelector('.top-link');
    const scrollHeight = window.pageYOffset;

    if(scrollHeight > 500){
        toTopButton.classList.add('show-link');
    }else{
        toTopButton.classList.remove('show-link');
    }


}

