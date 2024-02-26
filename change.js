let text =  document.getElementById("p");
let button = document.getElementById("button")

button.addEventListener("click", function(){
    
    if (text.innerText == "Old Text"){
        text.innerText = "New Text";}
    else{ 
        text.innerText = "Old Text"
    }


    }
)