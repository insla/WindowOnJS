const closeModalWindow = (elem) => {
    const windows = document.querySelectorAll(elem);

    windows.forEach(item => {
        item.classList.remove('show')
    });

    document.body.style.overflow = ''
    document.body.style.marginRight = '0px'
};

export default closeModalWindow;