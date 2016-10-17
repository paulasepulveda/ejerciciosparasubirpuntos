//Ejercicio N°1 "EL menor de los números"
function numeroMenor(a,b,c){
	var menor=Math.min(a,b,c);
	return menor;
}
//Ejercicio N°2"Es par o impar"
function numeroPar(num){
	if (num%2 ===0){
		alert ("es par");
	}else{
		alert ("es impar");
	}
}
//Ejercicio N°3 "Ordenando números de menor a mayor"


//Ejercicio N°4 "Mayúscula o minuscula"
function mayuscula(cadena){
	var resultado="la palabra "+cadena+" ";
	if (cadena===cadena.toLowerCase()){
		resultado+="son solo minúsculas";
	}else{
		resultado +="es ambas";
	}
	return resultado;
}
//Ejercicio N°6 "Operaciones matématicas"
function suma (a,b){
	return a+b;
}

function resta (a,b){
	return a-b;
}

function multiplicar (a,b){
	return a*b;
}

function dividir (a,b){
	return a/b;
}

function operar (a,b, operacion){
	return operacion(a,b);
}
//Ejercicio N°7"Cuadrado de la Suma de cuadrados"
function sumaCuadrados(a,b){
	var resultado=(a+b);
	var cuadrado=resultado*resultado;
	return cuadrado;
}
//ejercicio N°8 "Número Primo"
function numeroPrimo(num){
	var i= 2;
	while (i*i<num){
	if(num%i==0)
	return (false);
	i++;
	}
	return (true);
}

//Ejercicio N°9 "Multiplos de un número"
function multiplos(n){
	var total=" ";
	var resultado=1;
	for(var i=1;i<=10;i++){
		var resultado=n*i;
		total+=(n*i+" ");
	}
	return total;
}
//Ejercicio N°10 "Cantidad de dígitos"
	

