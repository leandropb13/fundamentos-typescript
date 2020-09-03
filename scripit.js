var x = 5;
var y = 9;

var somar = (x + y);
var subtrair = (x - y);
var dividir = (x / y);
var multiplicar = (x * y);
/*
alert("soma é: " + somar);
alert("subtração é: " + subtrair);
alert("divisão é: " + dividir);
alert("multiplicação é: " + multiplicar);
*/
var ternario = somar >= 0 ? alert("é maior") : alert("é menor");

function somando(a, b){
    alert("O valor da soma é " + (a+b ));
}

somando(1,3);

for(var i=0; i< 10; i++ ){
    console.log("O valor de i ->" + i);
}

// o number é um ponto flutuante,
// hexa, octal e binario
let meuOctal : number = 0o13;
alert(meuOctal);

let meuBinario: number = 0b11;
alert(meuBinario);

let meuHexa: number = 0xAB13;
alert(meuHexa);

let texto: string = "Olá Typescripit";
alert(texto);

let logradouro: string = "Rua 7 de Setembro";
let numero: string = "123b";
let cidade: string = "Blumenau";
let estado: string = "SC";
//alert("Endereço" + logradouro + ", " + numero + ". " + cidade + " - " + estado);

// com interpolação de string
alert(`Endereço: ${logradouro}, ${numero}. ${cidade} - ${estado} `);

//tipo array em TS
let meuArray: number [] = [1,2,3,4];
alert(meuArray);

//pode ser feito com o <> irá ter o mesmo efeito, e com isso fica tipado o array
let meuArray2: Array<number> = [1,2,3,4];

//operador com tuplas
//exemplo de tuplas sao os dicionarios
//palavra(string) -> significado(string)
let campeaoBrasileiro: [string, number] = ["Palmeiras", 2016];
let campeaoBrasileiro1: [string, number] = ["Corinthians", 2015];
let campeaoBrasileiro2: [string, number] = ["Cruzeiro", 2014];

alert(campeaoBrasileiro[0] + "-" + campeaoBrasileiro1[1]);

let campeaoBrasileiro3: [string, number] = ["Palmeiras, 2016"];
campeaoBrasileiro3[0] = "teste";

alert(campeaoBrasileiro3);

//enums
//pode ser alterado
enum Estado {Desabilitado, Habilitado}

let meuEstado: Estado = Estado.Habilitado;
alert(meuEstado);

//imprimir a string do enum
//pode ser usado com o proprio magic number(index), com a posicao do enum
let textoEnum: string = Estado[Estado.Desabilitado];
alert("Usando o magic number(index) ->" + textoEnum);

//tipo de dados any(qualquer coisa)
let v: any =2;
alert(v);

//como o tipo da variavel é any ele deixa chamar qq metodo que exista
//por exemplo o toExponential que é do number, sem avisar erro de compilação.
alert(v.toExponential());
//agora se tentar chamar qq metodo que nao existe, nao ira ter aviso
//so vai ter erro quando executar
alert(v.toMetodo());