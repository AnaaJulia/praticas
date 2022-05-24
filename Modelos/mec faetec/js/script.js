function calcularpedido(){
 //entrada
 sanduiche = document.getElementById('sanduiche').value;
 bebida = document.getElementById('bebida').value;
 batata = document.getElementById('batata').value;
 quantSanduiche = document.getElementById('quantSanduiche').value;
 quantBebida = document.getElementById('quantBebida').value;
 quantBatata = document.getElementById('quantBatata').value;


//saida
//sanduiche
 if(sanduiche == "Big Mac"){
  precoSanduiche= "14.90";
 Imagem = "img/bigmac.jpg"
 }

 else if(sanduiche == "Quarterão"){
    precoSanduiche= "13.90";
    Imagem = "img/quarterao.jpg"

}
 else{
    precoSanduiche= "12.90";
    Imagem = "img/"

}

// bebida
 if(bebida == "P"){
    precoBebida= "5.90";
    Imagem = ""


 }

 else if(bebida == "M"){
    precoBebida= "6.90";
    Imagem = ""

 }

 else{
  precoBebida= "7.90";
  Imagem = ""

 }

//batata
if(batata == "P"){
 precoBatata="5.90";
 Imagem = ""


}

else if(batata == "M"){
    precoBatata="6.90";
    Imagem = ""

}

else{
    precoBatata="7.90";
    Imagem = ""

}

total = (quantSanduiche*precoSanduiche)+(quantBebida*precoBebida) + (quantBatata*precoBatata)

//processamento
document.getElementById('total').value = total.toFixed(2);

//saida
document.getElementById('total').value =  total.toFixed(2)
document.getElementById('foto').src = imagem;

}