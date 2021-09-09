// const adicionarCarrinho = function(){
//     let nome = document.getElementById('NomeP').innerHTML 
//     let preco = document.getElementById('PrecoP').innerHTML
//     carrinho.push([nome, preco, "/img/produt1.js"])
//     localStorage.setItem("carrinho", JSON.stringify(carrinho))
// }

let carrinho = []
let produtoss = []

const carregarProdutos = function(){

    carrinho = JSON.parse(localStorage.getItem("carrinho"))

    let listaProdutos = ""
    carrinho.forEach(produto => {

        listaProdutos =  produto[0] +  produto[1] + produto[2] 
        
    });
    console.log(listaProdutos);
    

    document.getElementById('listaProdutos').innerHTML = listaProdutos
    // carrinho = JSON.parse(localStorage.getItem("carrinho"))

    // let listaDeImagens =""
    // carrinho.forEach(produto => {
    //     listaDeImagens = getElementById('image-produto')
    // });
    // console.log(listaDeImagens);
    // document.getElementById('listaDeImagens').innerHTML = listaDeImagens

}



function adicionarAoCarrinho(cod){

    let produtos = JSON.parse(localStorage.getItem('produtos'))
    
    for(let i = 0; i < produtos.length; i++){
        if(cod == produtos[i].cod){
            alert('adicionado ao carrinho')
            //let carrinho = []
            //if para ver se tem alguma coisa no carrinho
            let carrinho = localStorage.getItem("carrinho") != null ?  JSON.parse(localStorage.getItem("carrinho")) : []

            carrinho.push(produtos[i])
            localStorage.setItem('carrinho', JSON.stringify(carrinho))
        }
        
    }
    console.log(produtos);
    
}


function CarrinhoFinal(){
    let carrinhos = JSON.parse(localStorage.getItem('carrinho'))
    let listavazia = ''

    carrinhos.forEach(element => {
        listavazia += "<div class='row'>" +  "<div class = 'element-img'>" + element.img + "</div> <div class= 'element-nome'>" + element.nome  +  "</div> <div class='element-preco'>" + "R$" + element.preco + "</div> </div>"
        console.log('p');
    });
            
    // alert(listavazia)
    document.getElementById("Lista").innerHTML = listavazia

}

function ValorTotal() {
    var subtotal = 0

    let vazio = ''
    let carro = JSON.parse(localStorage.getItem('carrinho'))
        for(var i = 0; i < carro.length; i++){
            subtotal += parseFloat(carro[i].preco)
        }

        vazio += `<div class="element-preco"> R$ ` + subtotal.toFixed(2) + `</div>`

        document.querySelector('.ValorPr').innerHTML = vazio
        console.log('funciona');
}
