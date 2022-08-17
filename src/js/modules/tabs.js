const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector)

    header.addEventListener('click', (e) => {
        const target = e.target;

        if(target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
            tab.forEach((item, i) => {
                if(item === target || item === target.parentNode) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })

    function showTabContent (i = 0) {
        tab[i].classList.add(activeClass)
        content[i].style.display = display;
    }

    const hideTabContent = () => {
        content.forEach(item => {
            item.style.display = 'none'
        })

        tab.forEach(item => {
            item.classList.remove(activeClass)
        })
    }
    hideTabContent();
    showTabContent();
}

export default tabs;