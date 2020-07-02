import { checkForUrl } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { errorMsg } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const button = document.querySelector('#submitname');
button.addEventListener('click', handleSubmit);

export {
    checkForUrl,
    handleSubmit,
    errorMsg
}