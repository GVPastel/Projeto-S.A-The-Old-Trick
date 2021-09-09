localStorage.email;
localStorage.login;
localStorage.password1;
localStorage.password;

localStorage.emailArray;
localStorage.login;
localStorage.password1Array;
localStorage.passwordArray;

var auxemailArray = new Array();
var auxloginArray = new Array();
var auxpassword1Array = new Array();
var auxpasswordArray = new Array();

function cadastrarDados() {
    var a = document.getElementById('email').value;
    var b = document.getElementById('login').value;
    var c = document.getElementById('password1').value;
    var d = document.getElementById('password').value;

    localStorage.setItem("email", a);
    localStorage.setItem("login", b);
    localStorage.setItem("password1", c);
    localStorage.setItem("password", d);

    auxemailArray.push(a);
    auxloginArray.push(b)
    auxpassword1Array.push(c)
    auxpasswordArray.push(d);

    localStorage.setItem("emailArray", auxemailArray);
    localStorage.setItem("loginArray", auxloginArray);
    localStorage.setItem("password1Array", auxpassword1Array);
    localStorage.setItem("passwordArray", auxpasswordArray);

    console.log(localStorage.emailArray, localStorage.loginArray, localStorage.password1Array, localStorage.passwordArray);
    alert("Usuário cadastrado com sucesso");
}

function logar() {
    var l_inf = document.getElementById('loginAutenticacao').value;
    var s_inf = document.getElementById('password1Autenticacao').value;

    var l = localStorage.getItem("loginArray").split(", ");
    var s = localStorage.getItem("password1Array").split(", ");

    var logado = false;
    for(var i=0; i<l.length; i++) {
        if (l_inf == l[i] && s_inf == s[i]) {
            alert("Bem vindo(a)");
            logado = true;
            window.open('index.html', 'janela');
        }
    }
    
    if (logado == false) {
        alert("Usuário ou senha incorreto");
    }
    // else if (loginAutenticacao == "adm" && password1Autenticacao == "adm123") {
    //     window.open ('CadastroProduto', 'janela');
    // }
}