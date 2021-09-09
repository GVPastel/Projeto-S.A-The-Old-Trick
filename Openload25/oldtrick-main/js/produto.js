let produtos = [
  {
      cod: 1,
      nome:'SHAPE BAKER LOGO 8',
      preco: 289.90,
      img:'<img src="./produtos img/Shapes/BAKER/SHAPE BAKER LOGO 8.png" id="img-principal"></img>'

  }, 
  {
      cod: 2,
      nome:'CAMISETA HIGH KIDZ',
      preco: 199.90, 
      img:'<img src="./produtos img/Camisetas/CAMISETA HIGH KIDZ.png" id="img-principal">'
  },
  {
      cod: 3,
      nome:'MOLETOM PRIMITIVE GOKU VERSUS HOOD',
      preco: 593.90,
      img:'<img src="./produtos img/Moletons/MOLETOM PRIMITIVE GOKU VERSUS HOOD.png" >'
  },
  {
      cod: 4,
      nome: 'CAMISETA PRIMITIVE REVOLVER WASHED L/S TEE',
      preco:  319.80,
      img:'<img src= "./produtos img/Camisetas/CAMISETA PRIMITIVE REVOLVER WASHED TEE 1.png">'
  },
  {
      cod: 5,
      nome: 'Shape Baker Theotis Beasley 8.0 Azul/Laranja',
      preco: 358.4,
      img: '<img src = "./produtos img/Shapes/BAKER/Shape Baker Theotis Beasley 8.0.png">'
  },
  {
      cod: 6,
      nome: 'Shape Baker Nuge 8.0 Amarelo - Rock City',
      preco: 299.90,
      img: '<img src = "./produtos img/Shapes/BAKER/Shape Baker Nuge 8.0 Amarelo - Rock City.png">'
  },

]

localStorage.setItem('produtos', JSON.stringify(produtos))



function img1 () {
    document.getElementById ("img-principal").src="./produtos img/Shapes/BAKER/SHAPE BAKER LOGO 8.png" 
}

function img2 () {
    document.getElementById ("img-principal").src="./produtos img/Shapes/BAKER/SHAPE BAKER LOGO 8.png" 
}

function mais(){
    var atual = document.getElementById("total").value;
    var novo = atual - (-1); //Evitando Concatenacoes
    document.getElementById("total").value = novo;
  }
  
  function menos(){
    var atual = document.getElementById("total").value;
    if(atual > 0) { //evita números negativos
      var novo = atual - 1;
      document.getElementById("total").value = novo;
    }
}

