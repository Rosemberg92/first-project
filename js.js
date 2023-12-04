/****FUNCIÓN NOMBRE MAYUSCULAS****/
function nombre_mayusculas() {
var frase = document.getElementById("inputNOMBRE");
var valor_frase = frase.value;

    let strin = valor_frase.toLowerCase().split("").join("").split(" ");
    for(let i = 0 ; i < strin.length ; i++){
        let len = strin[i].length-1;
        if (len > 0){
            strin[i] = strin[i].substring(0,1).toUpperCase() +strin[i].substring(1, len) + strin[i].substr(len).toUpperCase();
        }else {
            strin[i] = strin[i].toUpperCase();
        }
    }
    frase.value = strin.join(" ");
}

/****FUNCION DIRECCIÓN MAYÚSCULAS****/
function direccion_mayusculas() {
    var frase = document.getElementById("inputAddress");
    var valor_frase = frase.value;
        let strin = valor_frase.toLowerCase().split("").join("").split(" ");
        for(let i = 0 ; i < strin.length ; i++){
            let len = strin[i].length-1;
            if (len > 0){
                strin[i] = strin[i].substring(0,1).toUpperCase() +strin[i].substring(1, len) + strin[i].substr(len).toUpperCase();
            }else {
                strin[i] = strin[i].toUpperCase();
            }
        }
        frase.value = strin.join(" ");
    }

    /****FUNCION SEXO****/
function sexFunction() {
var sexo = document.getElementById("sexo").value;
if (sexo == "f" || sexo == "F") {
    document.getElementById("sexo").value = "Femenino";
}
else if (sexo == "m" || sexo == "M"){
    document.getElementById("sexo").value = "Masculino";
}
else if (sexo == "i" || sexo == "I"){
    document.getElementById("sexo").value = "Indefinido";
}
else {
    alert("No válido, favor ingresar sexo como Masculino, Femenino o Indefinido");
    document.getElementById("sexo").value = "";
}
}

/*****FUNCION DÍAS *****/
function costoTotal(){
    var hab = document.getElementById("hab").value;
    var d1 = document.getElementById("checkIn").value;
    var d2 = document.getElementById("checkOut").value;
    var adicionales = document.getElementsByName("adicionales");
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil (time / (1000 * 60 * 60 * 24));
        if (adicionales[0].checked){
             document.getElementById("valorTOTAL").innerHTML = ((hab*days) + (50000 * days));
        }
        else{
        document.getElementById("valorTOTAL").innerHTML = ((hab*days));
        }
    }
/****FUNCION MOSTRAR EN PANTALLA *****/
function final() {
var habitaciones = document.getElementById("hab");
    var habi = habitaciones.options[habitaciones.selectedIndex].text;
    var sexo = document.getElementById("sexo").value;
    var edad = document.getElementById("inputEdad").value;
    var direccion = document.getElementById("inputAddress").value;
    var nombre = document.getElementById("inputNOMBRE").value;
    var rut = document.getElementById("inputRUT").value;
    var hab = document.getElementById("hab").value;
    var d1 = document.getElementById("checkIn").value;
    var d2 = document.getElementById("checkOut").value;
    var adicionales = document.getElementsByName("adicionales");
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil (time / (1000 * 60 * 60 * 24));
        if (adicionales[0].checked){
             document.getElementById("valorTOTAL").innerHTML = ((hab*days) + (50000 * days));
        }
        else{
        document.getElementById("valorTOTAL").innerHTML = ((hab*days));
        }
    var total = document.getElementById("valorTOTAL").innerHTML;
    alert ("Nombre: "+nombre+"\n Rut: "+rut+"\n Dirección: "+ direccion+"\n Edad: "+edad+"\n Sexo: "+sexo+"\n Cantidad de Habitaciones: "+habi+"\n Check-in: "+d1+"\n Check-out: "+d2+"\n Valor Total: "+total)
    }

