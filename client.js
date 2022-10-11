const Password = document.getElementById('Pass').value;
const Email=document.getElementById('Email').value;
const btn=document.getElementById("Sub");
btn.addEventListener("click", submit);

function submit(){
    console.log("btn pressed !");
    var xhttp = new XMLHttpRequest();
    const params = `Password=${Password}`
    xhttp.open("GET", "submit?" + params, true);
    xhttp.send();
    console.log("AJAX request sent : " + params);

    xhttp.addEventListener('load', function(){
        if (xhttp.status === 200 && xhttp.readyState === 4){
            var response = JSON.parse(xhttp.responseText.value);
            console.log("AJAX response : " + xhttp.responseText);
        } else {
            console.error("Bad request");
        }

    })
    
}



