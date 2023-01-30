console.log("hola mundo!!!")

document.getElementById("email").onclick = function(){
    console.log("capturamos el evento click");
    document.getElementById("info").innerHTML = "juanperez@email.com"
}

document.getElementById("tel").onclick = function(){
    console.log("capturamos el evento click");
    document.getElementById("info").innerHTML = "(500) 814-0676"
}