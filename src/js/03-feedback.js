import {throttle} from "lodash"

const formEl = document.querySelector('form')
const messageInputEl = document.querySelector('textarea[name="message"]')
const emailInputEl = document.querySelector('input[name="email"]')
const localStorageKey = 'feedback-form-state'

formEl.addEventListener('input', throttle(
    evt => {
        const data = { email: emailInputEl.value, message: messageInputEl.value }
        
        localStorage.setItem(localStorageKey, JSON.stringify(data))
    }, 500
))


formEl.addEventListener('submit', (evt) => {
    evt.preventDefault();

    console.log({ email: emailInputEl.value, message: messageInputEl.value })
    
    formEl.reset()

    localStorage.removeItem(localStorageKey)
})

let load = key => {
    try {
        const storageState = localStorage.getItem(key);
        return storageState === null ? undefined: JSON.parse(storageState)
    } catch (error) {
        console.log(error.message);
    }
}

const storageData = load(localStorageKey)

if (storageData) {
    emailInputEl.value = storageData.email;
    messageInputEl.value = storageData.message
}