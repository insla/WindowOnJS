import calcSideScroll from "./calcSideScroll";

const images = () => {
    const scroll = calcSideScroll();
    const section = document.querySelector('.works')

    const renderDivForImg = document.createElement('div')
    const renderImg = document.createElement('img')
    renderDivForImg.classList.add('popup_test')

    section.appendChild(renderDivForImg)

    renderDivForImg.style.justifyContent = 'center';
    renderDivForImg.style.alignItems = 'center';
    renderDivForImg.style.display = 'none';

    renderImg.style.width = '500px';
    renderImg.style.height = '500px';


    renderDivForImg.appendChild(renderImg)
    
    section.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        if(target.classList.contains('preview')) {
            document.body.style.overflow = 'hidden'
            renderDivForImg.style.display = 'flex';
            const path = target.parentNode.getAttribute('href')
            renderImg.setAttribute('src', path)
            document.body.style.overflow = 'hidden'
            document.body.style.marginRight = `${scroll}px`
        }

        if(target && target.matches('div.popup_test')) {
            document.body.style.overflow = ''
            renderDivForImg.style.display = 'none';
            document.body.style.marginRight = '0px'        
        }
    });
};

export default images;