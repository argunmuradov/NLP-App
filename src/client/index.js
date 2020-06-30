import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const button = document.querySelector('#submitname');
button.addEventListener('click', handleSubmit);

/*const callApi = (text) => {
    fetch('/sentiment', {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: document.getElementById('name').value })
    })

    .then(res => res.json())
    .then(function (res) {
        console.log('recieving from server...')
        document.getElementById('results').innerHTML = res.polarity
    })
    
}*/
