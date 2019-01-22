// tabs in "Menu" section (entree, appetizer, beverages, dessert)
const tabList = document.querySelectorAll('.tablist__tab');
// individual sections of menu
const menuSections = document.querySelectorAll('.menu__section');

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