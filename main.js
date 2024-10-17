document.addEventListener("click", function() {
    const emailList = document.getElementById("email-list");/* ottengo l'elemento con ID email-list dal DOM e lo assegno alla variabile emailList */

    function getRandomEmail() {
        return axios.get('https://flynn.boolean.careers/exercises/api/random/mail')/* Funzione per ottenere una email casuale con Axios */
        .then(response => response.data.response); 
    }
});