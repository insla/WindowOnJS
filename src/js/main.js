import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images'

window.addEventListener('DOMContentLoaded', () => {
    let modalState = {};

    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content');
    tabs('.decoration_slider', '.no_click', '.contents', 'after_click');
    forms(modalState);
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    changeModalState(modalState);
    timer('2022-12-31');
    images()
})
