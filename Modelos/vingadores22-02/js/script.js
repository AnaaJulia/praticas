function trocar(caminho , entrada , legenda){
    document.getElementById('imagem_principal').src = caminho;
    
    document.getElementById('titulo').innerText = entrada;
    
    document.getElementById('legenda').innerText = legenda;
    }