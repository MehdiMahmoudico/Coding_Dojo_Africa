function login(Element){
    var logins = document.getElementById("logins");
    if(logins.innerText.length == 5){
        logins.innerText="logout";
    }else{logins.innerText="login"}
}

function add(Element){
    var def = document.getElementById("def");
    def.remove();
}

function liked(){
    alert("Ninja was liked")
}