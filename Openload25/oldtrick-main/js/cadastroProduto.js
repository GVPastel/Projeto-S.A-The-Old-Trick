
let addprodutos = [];
let nomeProduto = document.getElementById('nomeProduto')
let precoProduto = document.getElementById('precoProduto')
let imgProduto = document.getElementById('imgProduto')
let photo = null
let div = document.querySelector('#AAA')
let imgg = div.querySelectorAll('img')
let imgPush = JSON.parse(localStorage.getItem('produtos'))

imgProduto.addEventListener('change', function(){
    const reader = new FileReader()

    reader.addEventListener('load', () => {
        photo = reader.result
    })

    reader.readAsDataURL(this.files[0]) 
})


function adProdutos(){
    addprodutos = JSON.parse(localStorage.getItem('produtos'))
    
    let imgDale = ''
    let item = {
        cod: 26,
        nome: nomeProduto.value,
        preco: precoProduto.value,
        img: photo
    }
    addprodutos.push(item)

    localStorage.setItem('produtos', JSON.stringify(addprodutos))

    imgDale = document.getElementById('BBBB')
    
    console.log(addprodutos);

    for(let i = 0; i < imgPush.length; i++) {
        imgg[0].src = imgPush[24].img
    }
    
}