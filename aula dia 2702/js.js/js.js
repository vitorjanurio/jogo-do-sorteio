const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h1");
const resp3 = document.querySelector("h3");
const resp4 = document.querySelector("h4");
const math = Math.floor(Math.random() * 100) + 1;
var  erros = 0;
var  chances = 6;
console.log(math);
frm.addEventListener("submit", (e) =>{

    e.preventDefault()
    const num1 = Number(document.getElementById("num").value);
    
    if(num1 == math){
        resp3.innerHTML = "Parabéns você acertou"
    }else {
        erros++;
        chances--;
        resp1.innerHTML = `${erros}`;
        resp2.innerHTML = `${chances}`;
        if(num1 < math){
            resp4.innerHTML = `Você errou, o numero digitado é menor que o número sorteado`;    
        }else {
            resp4.innerHTML = `Você errou, o numero digitado é maior que o número sorteado`; 
        }
    }
})