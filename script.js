const API = "https://official-joke-api.appspot.com/random_joke";

function callApi() {
    fetch(API).then((response) =>{
        return response.json()
     }).then((data) =>{
         console.log(data.setup)
         document.getElementById("joke_text").innerHTML = data.setup
     })
}


document.getElementById("btn").addEventListener("click",callApi)