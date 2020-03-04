//var é para variavel

// var nome= "isabelli";
// var idade= 19;
// var idade2=12;
// var time="japao é top"


//alert é o modal que aparece - ALERT

// //alert(nome + " tem " + idade + " anos");
// //alert(idade+idade2);


//console.log é para aparecer no console do inspecionar - CONSOLE.LOG

// console.log(nome);
// console.log(idade+idade2);

//toUpperCase é para deixar em caixa alta e toLowerCase é caixa normal -TOUPPERCASE & TOLOWERCASE
// console.log(time.toUpperCase());

//array -ARRAY
//var lista = ["maca", "pera", "uva", "banana"];

//push adiciona um elemento no array - PUSH
//lista.push("uva");

//pop apaga o ultimo elemento do array - POP
//lista.pop();

//mostra o tamanho do array - .LENGTH
//console.log(lista.length);

//var palavra="abcde";
//console.log(palavra.length);

//mostra a lista ao contrario - .REVERSE
//console.log(lista.reverse());

//transforma todo mundo em string - TOSTRING()
/*
console.log(lista);
console.log(lista.toString());
*/

//para data, mostra a data -DATA() & GETMONTH()...
//var d= new Date();
//alert(d);
//mostra o mes
//alert(d.getMonth()+1);
//mostra o minuto
//alert(d.getUTCMinutes());



//mostra só o item 1 da lista
//console.log(lista[1]);

//mostra a segunda letra da string
//console.log(lista.toString()[1]);

//troca a virgula por - ou o que colocar nos parenteses - .JOIN(" ")
//console.log(lista.join(" - "));

//especificando os array
/*
var frutas=[{nome:"maca", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
console.log(frutas[0]);
*/


/* ****** CONDIÇÃO ******  */

//prompt exibe uma pergunta no modal
/*
var idade=prompt("qual sua idade?");
if(idade>17){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}
*/


/* ****** REPETIÇÃO ******  */

/* 
    //WHILE

var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}
*/

    //FOR
/*
for(var i=0; i<=5; i++){
    console.log(i);
}
*/

/* **************  function ***************** */ 

// function soma(n1, n2){
//     return n1+n2;
// }
//alert(soma(1,2));

//var validar=0; //global
/*
function validaIdade(idade){
    // var validar; //nao global
    if(idade>=18){
        return true;
    }else{
        return false;
    }
}

var idade = prompt("qual sua idade");
console.log(validaIdade(idade));
*/



/* **************  interacao com o html ***************** */ 

function clicou(){
    //com o INNER vc pode escrever algo no html, substituir quando fazer a acao do clique
    document.getElementById("agradecimento").innerHTML = "tks";

    //mostra o conteudo do  id agradecimento
   //return console.log(document.getElementById("agradecimento"));

 //   alert( "valeu por clicar");
}

function redirecionar(){
    window.open("https://www.google.com/");
}

function trocar(elemento){
   // document.getElementById("mouse"). innerHTML="valeu por passar";
   elemento.innerHTML="valeu por passar";
    //alert("texto trocado");
}
function voltar(elemento){
   // document.getElementById("mouse").innerHTML="passe o mouse";
   elemento.innerHTML="passe o mouse";
}
function funcaochange(elemento){
    console.log(elemento.value);
}
