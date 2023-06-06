const textArea = document.querySelector(".areaUno");
const textAreaMensaje = document.querySelector(".areaDos");

var imagen = document.getElementById("imagen");
var textoUno = document.getElementById("textoUno");
var textoDos = document.getElementById("textoDos");
var btnCopiar = document.getElementById("btnCopiar");

let matriz = [
        
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];

function copiar()
{
    textAreaMensaje.select();
    textAreaMensaje.setSelectionRange(0,99999);
    document.execCommand('copy')
    alert("Texto copiado!!");
    textArea.focus();
}

function btnEncripta()
{

    if(textArea.value == "")
    {
        alert("Ingrese texto!!");
        textArea.focus();
    }
    else{
        const texo = encriptar(textArea.value);
        textAreaMensaje.value = texo;
        textArea.value = "";
        imagen.style.visibility = "hidden";
        textoUno.style.visibility = "hidden";
        textoDos.style.visibility = "hidden";
        btnCopiar.style.visibility = "visible";
    }
}

function btnDesencriptar(){
    if(textArea.value == "")
    {
        alert("Ingrese texto!!");
        textArea.focus();
    }
    else{
        const texo = desencriptar(textArea.value);
        textAreaMensaje.value = texo;
    }
}

function encriptar(stringEncripta){
    
    stringEncripta = stringEncripta.toLowerCase();

    for( let i = 0; i < matriz.length; i++ )
    {
        if(stringEncripta.includes(matriz[i][0]))
        {
            stringEncripta = stringEncripta.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return stringEncripta;
}

function desencriptar(stringEncripta){
    stringEncripta = stringEncripta.toLowerCase();

    for( let i = 0; i < matriz.length; i++ )
    {
        if(stringEncripta.includes(matriz[i][1]))
        {
            stringEncripta = stringEncripta.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    return stringEncripta;
}

function soloLetra(string){//solo letras y numeros
    var out = '';
    //Se añaden las letras validas
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';//Caracteres validos
	
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
	     out += string.charAt(i);
    return out;
}