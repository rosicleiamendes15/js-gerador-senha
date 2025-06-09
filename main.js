document.querySelector('.parametro-senha_botão');
const numeroSenha = document.querySelector('.parametro-senha_texto');
numeroSenha.textContent = 5;
let tamanhoSenha = 12;
const botoes = document.querySelectorAll('.parametro-senha_botao');
botoes[0].onclick = diminuirTamanho;
botoes[1].onclick = aumentarTamanho;


console.log(botoes);

function diminuirTamanho(){
    if (tamanhoSenha > 1)
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha
}
function aumentarTamanho(){
    if(tamanhoSenha < 20)
  tamanhoSenha = tamanhoSenha + 1;
    numeroSenha.textContent = tamanhoSenha
}
const campoSenha + document.querySelector(' #campoSenha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function geraSenha(){
  let numeroAleatorio = Math.random()*letrasMaiusculas.length;
  console.log(numeroAleatorio);
}
campoSenha.textContent = letrasMaiusculas;
campoSenha.value = letrasMaiusculas;