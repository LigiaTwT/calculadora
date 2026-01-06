function insert(num) {
  let numero = document.getElementById("resultado");
  numero.innerHTML += num;
}

function clean() {
  document.getElementById("resultado").innerHTML = "";
  
}

function back(){
   let back = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = back.substring(0, back.length -1);
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else{
        document.getElementById('resultado').innerHTML="0";
    }
}