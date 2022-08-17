import checkNumInpot from "./checkNumInpot";
import closeModalWindow from "./closeModalWindow";

const forms = (state) => {
    const form = document.querySelectorAll('form');
    const inputForm = document.querySelectorAll('input');
    const message = {
        loading: 'Загрузка',
        success: 'Запрос отправлен',
        failure: 'Что-то пошло не так'
    };

    checkNumInpot('input[name = "user_phone"]');

    const clearInput = () => {
        inputForm.forEach(item => {
            item.value = ''
        })
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        })

        return await res.text();
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {   
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage)

            const formData = new FormData(item);

            if(item.getAttribute('data-calc') === 'end') {
                for(let key in state){
                    formData.append(key, state[key])
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                    setTimeout(() => {
                        closeModalWindow('[data-modal]');
                    }, 1500);
                })
                .then(() => {
                    for (let member in state) delete state[member];
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInput();
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 4000);
                })
                
        })
    });
}

export default forms;
