import checkNumInpot from "./checkNumInpot";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowHeight = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll('#view_type');
    const windowProfile = document.querySelectorAll('.checkbox');

    checkNumInpot('#width');
    checkNumInpot('#height');

    function byActionToElems (event, elemToPage, saveInState) {
        elemToPage.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[saveInState] = i;
                        break;
                    case 'INPUT' :
                        if(item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[saveInState] = 'Холодное' : state[saveInState] = 'Теплое'

                            elemToPage.forEach((box, j) => {
                                box.checked = false;
                                if(i == j) {
                                    box.checked = true;
                                }
                            })
                        } else {
                            state[saveInState] = item.value;
                        }                        
                        break;
                    case 'SELECT' :
                        state[saveInState] = item.value;
                        break;
                }
                
                console.log(state);
            });
        });
    };

    byActionToElems('click', windowForm, 'form');
    byActionToElems('input', windowWidth, 'width');
    byActionToElems('input', windowHeight, 'height');
    byActionToElems('change', windowType, 'type');
    byActionToElems('change', windowProfile, 'profile');




};

export default changeModalState;