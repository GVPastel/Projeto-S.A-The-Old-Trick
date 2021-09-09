const mostrarProduto = function (idProduto) {

    let nome = ""
    let preco = ""
    //let descricao = document.getElementById('DescricaoP').innerHTML;
    let imagem = ""
    

    if (idProduto == 'produto1'){
        nome = document.getElementById('NomeP').innerHTML 
        preco = document.getElementById('PrecoP').innerHTML
        imagem = document.getElementById('ImagemP').src;
    
    }
    
    
    let produtos = JSON.parse(localStorage.getItem("produto"))
    let isAdd = false;

    if (produtos != null){

        produtos.forEach(element => {
            if (element[0] == nome){
                isAdd = true;
            }
        });
    }
    
    if (!isAdd){
        produtos.push([nome, preco, imagem]);
        localStorage.setItem("produto", JSON.stringify(produto))
    }

}

let produto = []

const CarregarProdutos = function () {

    produto = JSON.parse(localStorage.getItem("produto"))

    let ListaDeProdutos = ""
    produto.forEach(produtos => {

        ListaDeProdutos = produtos[0] + produtos[1] + produtos[2] + produtos[3]
    })
    console.log(ListaDeProdutos);

    document.getElementById('ListaDeProdutos').innerHTML = ListaDeProdutos
}