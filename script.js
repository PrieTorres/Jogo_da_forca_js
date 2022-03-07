let palavras = ['maça', 'pera', 'uva', 'morango', 'ovo', 'abacate', 'lasanha', 'carro', 'moto', 'casa', 'furacao', 'teclado', 'guitarra', 'comida', 'peixe', 'feijao', 'leao'];

let indice_random = Math.floor( Math.random()*palavras.length );

let palavra_random = palavras[indice_random];

let palavra_escrita = '';

for(x = 0;  x < Number(palavra_random.length); x++){
    palavra_escrita += 'X ';    
}

let letra = '';

let palavra_oculta = [];

let tentativas = 0;

let cx_imagem = document.body.querySelector('#caixa-imagem');

cx_imagem.innerHTML = '<img src="imgs/imagem_forca_vazia.png">';

let cx_texto = document.body.querySelector('#palavra_escrita');
cx_texto.innerHTML = palavra_escrita;
function reset(){
    indice_random = Math.floor( Math.random()*palavras.length );
    palavra_random = palavras[indice_random];
    palavra_escrita = '';
    for(x = 0;  x < Number(palavra_random.length); x++){
        palavra_escrita += 'X ';    
    }
    tentativas = 0;
    palavra_oculta = [];
    cx_texto.innerHTML = palavra_escrita;
    cx_imagem.innerHTML = '<img src="imgs/imagem_forca_vazia.png">';
}

function acharLetra(){
    letra = document.body.querySelector('#letra').value;
    console.log(`letra --> ${letra}`);
    if(palavra_oculta.length == 0){ // se palavra ainda não tiver sido checada nenhuma vez
        for(let li of palavra_random){
            if(li == letra){
                palavra_oculta.push(letra);
            }else{
                palavra_oculta.push('X');
            }
        }
    }else{
        for(i in palavra_random){
            if(palavra_random[i] == letra){
                palavra_oculta[i] = palavra_random[i];
            }
        }
    }
    if(palavra_escrita != '' && palavra_escrita == palavra_oculta.toString()){
        tentativas ++;
    }
    if(tentativas == 1){
        cx_imagem.innerHTML = '<img src="imgs/imagem_forca_vazia_1.png">';
    }else if(tentativas == 2){
        cx_imagem.innerHTML = '<img src="imgs/imagem_forca_vazia_2.png">';
    }else if(tentativas == 3){
        cx_imagem.innerHTML = '<img src="imgs/imagem_forca_vazia_3.png">';
    }else if(tentativas == 4){
        cx_imagem.innerHTML = '<img src="imgs/imagem_forca_vazia_4.png">';
    }else if(tentativas == 5){
        cx_imagem.innerHTML = '<img src="imgs/imagem_forca_vazia_5.png">';
    }else if(tentativas == 6){
        cx_imagem.innerHTML = '<img src="imgs/imagem_forca_vazia_6.png">';
    }else if(tentativas >= 7){
        window.alert('voce perdeu!');
        cx_imagem.innerHTML = '<img src="imgs/imagem_forca_vazia_7.png">';
        reset();
    }
    palavra_escrita = palavra_oculta.toString();

    if(palavra_oculta.indexOf('X') == -1 && palavra_oculta.length > 1){
        window.alert('você ganhou!!!');
    }
    cx_texto.innerHTML = palavra_escrita;

    document.body.querySelector('#letra').value = '';
    return palavra_oculta;
}

function addPalavra(){
    let palavra_nova = document.body.querySelector('#nova-palavra').value;
    if(palavras.indexOf(palavra_nova) == -1){
        palavras.push(palavra_nova);
    }else{
        window.alert('essa palavra já existe na lista!');
    }
    document.body.querySelector('#nova-palavra').value = '';
}

