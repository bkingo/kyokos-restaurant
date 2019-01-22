// tabs in "Menu" section (entree, appetizer, beverages, dessert)
const tabList = document.querySelectorAll('.tablist__tab');
// individual sections of menu
const menuSections = document.querySelectorAll('.menu__section');

// add function to each menu tab such that clicking the element, it will open that corresponding section and close the others
tabList.forEach(function(tab) {
    tab.addEventListener('click', function(e) {
        
        selectedTab = tab.textContent.toLowerCase();
        menuSections.forEach(function(menuSection) {
            if (menuSection.dataset.menu__section === selectedTab) {
                menuSection.style.display = 'block';
            } else {
                menuSection.style.display = 'none';
            }
            
        });

        
    });
    
});