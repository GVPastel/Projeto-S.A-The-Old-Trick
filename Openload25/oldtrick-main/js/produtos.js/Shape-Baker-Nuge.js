function img1() {
    document.getElementById("img-principal").src = "./produtos img/Shapes/BAKER/Shape Baker Nuge 8.0 Amarelo - Rock City.png"
  }
  
  function img2() {
    document.getElementById("img-principal").src = "./produtos img/Shapes/BAKER/Shape Baker Nuge 8.0 Amarelo - Rock City2.png"
  }
  
  function mais() {
    var atual = document.getElementById("total").value;
    var novo = atual - (-1); //Evitando Concatenacoes
    document.getElementById("total").value = novo;
  }
  
  function menos() {
    var atual = document.getElementById("total").value;
    if (atual > 0) { //evita números negativos
      var novo = atual - 1;
      document.getElementById("total").value = novo;
    }
  }