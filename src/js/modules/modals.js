import closeModalWindow from "./closeModalWindow";
import calcSideScroll from "./calcSideScroll";

const modals = () => {
    function bindModals (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const scroll = calcSideScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }
    
                windows.forEach(item => {
                    item.classList.remove('show')
                });

                modal.classList.add('show')
                document.body.style.overflow = 'hidden'
                document.body.style.marginRight = `${scroll}px`
            });
        });

        close.addEventListener('click', () => {
            closeModalWindow('[data-modal]');
        })

        modal.addEventListener('click', (e) => {
            if(e.target === modal && closeClickOverlay) {
                closeModalWindow('[data-modal]');
            }
        })
    };

    function showModalByTime (selector, time) {
        const scroll = calcSideScroll();
        setTimeout(() => {
            document.querySelector(selector).classList.add('show')
            document.body.style.overflow = 'hidden'
            document.body.style.marginRight = `${scroll}px`
        }, time);
    }
    
    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModals('.phone_link', '.popup', '.popup .popup_close');
    bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close', );
    bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    // calcScroll();

    showModalByTime('.popup', 3000);
};





export default modals;
