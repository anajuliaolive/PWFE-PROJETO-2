function selecionar(){
    let sim = document.getElementById("sim").checked; //checked é usado para checar determinado valor
    let nao = document.getElementById("nao").checked;
    if(sim == true){ //se sim for verdadeiro
        document.getElementById("plano").style.display = 'block'; // o plano irá aparecer
    }else if(nao == true){
        document.getElementById("plano").style.display = 'none'; //se não for verdadeiro, o plano não irá aparecer
    }
}

function desconto1(){ 
    let preco =document.getElementById("valor").value; //var preco puxa o id valor
    document.getElementById("preco").textContent = "O preço é sem desconto é: R$"+ preco;
    let res = preco*0.85; //15% de desconto 
    document.getElementById("desconto").textContent = "Já com o desconto o preço é: R$"+ res; 
}
 
function desconto2(){ 
    let preco =document.getElementById("valor").value; 
    document.getElementById("preco").textContent = "O preço é sem desconto é: R$"+ preco;
    let res = preco*0.90; //10% de desconto
    document.getElementById("desconto").textContent = "Já com o desconto o preço é: R$"+ res;
}
  
function nodesconto(){ 
    let preco =document.getElementById("valor").value;
    document.getElementById("preco").textContent = "O preço é: R$"+ preco; 
    document.getElementById("desconto").textContent =""; 
}

function desconto(){ 
let nao = document.getElementById("nao").checked; 
if(nao == true){ //se não for verdadeiro, puxa a função no desconto para não ter desconto
    nodesconto(); // vai puxar a funcão "nodesconto"
    exit(); //é como se chegasse no final do código
}
let escolha= document.getElementById("plano"); //var escolha puxa o id plano
let valor = escolha.options[escolha.selectedIndex].value; //vai pegar oq eu estiver selecionando dentro do select (caixinha de plano)
if(valor == "vida"){ //se valor for igual vida, vc recebe o desconto 1
    desconto1();
}else if(valor == "anima"){ //se valor for igual animal, vc recebe o desconto 2
    desconto2();
}else{ 
    nodesconto(); // se nn tiver o plano vc não recebe desconto
}
}
    