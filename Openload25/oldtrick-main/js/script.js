localStorage.login;
localStorage.sobrenome;
localStorage.email;
localStorage.senha;

localStorage.loginArray;
localStorage.sobrenomeArray;
localStorage.emailArray;
localStorage.senhaArray;

var auxLoginArray = new Array();
var auxSobrenomeArray = new Array();
var auxemailArray = new Array();
var auxSenhaArray = new Array();

function cadastrarDados() {
    var a = document.getElementById('login').value;
    var b = document.getElementById('sobrenome').value;
    var c = document.getElementById('email').value;
    var d = document.getElementById('email').value;

    localStorage.setItem("login", a);
    localStorage.setItem("sobrenome", b);
    localStorage.setItem("email", c);
    localStorage.setItem("senha", d);

    auxLoginArray.push(a);
    auxSobrenomeArray.push(b)
    auxemailArray.push(c)
    auxSenhaArray.push(d);

    localStorage.setItem("loginArray", auxLoginArray);
    localStorage.setItem("sobrenomeArray", auxSobrenomeArray);
    localStorage.setItem("emailArray", auxemailArray);
    localStorage.setItem("senhaArray", auxSenhaArray);

    console.log(localStorage.loginArray, localStorage.sobrenomeArray, localStorage.emailArray, localStorage.senhaArray);
    alert("Usuario cadastrado com sucesso\nLogin: " + localStorage.login + "\nSobrenome: " + localStorage.senha + "\nEmail: " + localStorage.email + "\nSenha: " + localStorage.senha);
}

function logar() {
    var l_inf = document.getElementById('loginAutenticacao').value;
    var s_inf = document.getElementById('senhaAutenticacao').value;

    var l = localStorage.getItem("loginArray").split(", ");
    var s = localStorage.getItem("senhaArray").split(", ");

    var logado = false;
    for(var i=0; i<l.length; i++) {
        if (l_inf == l[i] && s_inf == s[i]) {
            alert("Match - Usuario e senha existem no sistema");
            logado = true;
            window.open('index.html', 'janela');
        }
    }
    
    if (logado == false) {
        alert("Usuario ou senha não existem no sistema!");
    }
}