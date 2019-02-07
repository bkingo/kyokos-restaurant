// tabs in "Menu" section (entree, appetizer, beverages, dessert)
const tabList = document.querySelectorAll('.tablist__tab');
// individual sections of menu
const menuSections = document.querySelectorAll('.menu__section');

const navTrigger = document.querySelector('.nav__trigger');
const navMobile = document.querySelector('.nav--mobile');
const navMobileClose = document.querySelector('.nav--mobile__close');

const navMobileLinks = document.querySelectorAll('.nav--mobile__link');

// open nav menu after clicking on navTrigger
navTrigger.addEventListener('click', () => {
    navMobile.style.display = 'block';
});

// after clicking a mobile nav link close the mobile nav menu
navMobileLinks.forEach(element => {
    element.addEventListener('click', () => {
        navMobile.style.display = 'none';
    });
});


// close nav menu after clicking on "x" icon
navMobileClose.addEventListener('click', () => {
    navMobile.style.display = 'none';
});

// add function to each menu tab such that clicking the element, it will open that corresponding section and close the others
tabList.forEach(function(tab) {
    tab.addEventListener('click', function(e) {
        // set color of selected tab to black and others to gray
        tabList.forEach(function(tab) {
            if (tab !== e.target) {
                tab.style.color = '#9B9E95';
            } else {
                tab.style.color = '#3d373f';
            }
        });

        // search for menu section corresponding to selected tab and close the others
        menuSections.forEach(function(menuSection) {
            if (menuSection.dataset.menu__section === e.target.textContent.toLowerCase()) {
                menuSection.style.display = 'block';
            } else {
                menuSection.style.display = 'none';
            }
        });

        
    });
    
});