    import {checkForUrl} from './nameChecker'

    function errorMsg()
    {
        return "The request was timed out due to internal server issues.";
    }

    async function handleSubmit(event) {
        event.preventDefault()
        document.getElementById('results').innerHTML ="checking the URL..."
        // check what text was put into the form field
        let formText = document.getElementById('name').value
            document.getElementById('results').innerHTML = "URL accepted..."
            console.log("::: Form Submitted :::")
            const response = await fetch('http://localhost:8080/lang', {
                method: "POST",
                credentials: "same-origin",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: formText })
            })
            try{
                const data = await response.json();
                console.log('recieved', data);
                document.getElementById('results').innerHTML = 'The language of this article is: ' +  data.text
            }
            catch(error) {
                console.log("error", error);
            }
        
    }

    export { handleSubmit, 
    errorMsg }
