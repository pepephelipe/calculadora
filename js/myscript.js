  /*javascript para "Mi Caculadora"
///	Pier Paolo Zini
/// Curso Mooc "Desarrollo en HTML5, CSS y Javascript de Apps Web, Android..."ç
/// MiriadaX.com
/// Prueba Obligatoria Modulo 4
  */
  // 
  var tester=0;  //con 0 recibe Valor X  (base) y con 1 el valor Y (exponente)
  var memoria=""; // con tester=0 memoriza la base X 
  var cumulo=0; //sirve para memorizar los calculos.
  var testmas=1;
  var e="";
  // inicialización " body onload"
  function inic ()   {
  	num = document.getElementById("num");
  	num.value=0;
  }

  //borra los valores e pone "0" las variables que se utilizan
  function vaciar () {
  	num.value = 0; 
  	lungo.value="";
  	cumulo=0;
  	tester=0;
  	memoria="";
  	testmas=1;
  	
  	document.getElementById("num").style.color="black"; //pone en negro el color del input 
	document.getElementById("_y").style.color="white";
 	document.getElementById("_xy").style.border = "none"; 
  } 
  //raiz cuadrada 
  function cuadrado() {
   num.value = num.value * num.value;
   testmas=1;
  }
  //cambia el signo del numero + o - No está activado
  function masomenos () {
  		num.value= -(num.value);
  }

  function invers() {
  	num.value= 1/num.value;
  	testmas=1;
  }
  function raiz () {
  	num.value=Math.sqrt(num.value);
  	testmas=1;
  }
  function round() {
  	if (num.value >= 0){
  		num.value=Math.floor(num.value);
  		testmas=1;
  	}else{
  		num.value=Math.ceil(num.value)
  		testmas=1;
  	}
  }
  function seno () {
  	num.value=Math.sin(num.value);
  	testmas=1;
  } 
  function coseno () {
  	num.value=Math.cos(num.value);
  	testmas=1;
  }  
  function tang () {
  	num.value=Math.tan(num.value);
  	testmas=1;
  }  
  function _ce() {
  	var primo= num.value;
  	var lungo= primo.length;
  	num.value= primo.substr(0,lungo-1);
  }
  //esponencial x base  y exponente
  // cambio de color del botón y del input en la espera del Y
  function espon() {
  	if (tester===0) {
  		//alert("tester è uguale a 0")
  		memoria=num.value;
  		//num.value=0;
  		tester=1;
  		document.getElementById("_xy").style.border = "thick solid #0000FF";
  		document.getElementById("_y").style.color="red";
  		document.getElementById("num").style.color="red";
  		testmas=1;
  		//document.getElementById("_xy").style.background="linear-gradient(to top, rgba(244,252,110,0.1), rgba(244,252,110,1))";
  	}else{
  		//alert("Tester è uguale a 1")
  		num.value=Math.pow(memoria,num.value);
  		tester=0;
  		memoria="";
  		//se vuelve a poner los estilos estandard
  		document.getElementById("_xy").style.border = "none"; 
		document.getElementById("_y").style.color="white";
		document.getElementById("num").style.color="black";
		//document.getElementById("_xy").style.background="linear-gradient(to top, rgba(255,160,0,0.1), rgba(255,160,0,0.8))";
		testmas=1;
	 }
  }
  //Recibe el valor del teclado
  function _par1(){
  	if(testmas === 1){
  		num.value="(";
  	}else{
  		num.value += "(";
	}
	testmas=0;
  }
  function _par2(){
  	if(testmas === 1){
  		num.value=")";
  	}else{
  		num.value += ")";
	}
	testmas=0;
  }
  function _punto(){
  	if(testmas === 1){
  		num.value="0.";
  	}else{
  		num.value += ".";
	}
	testmas=0;
  }
  function _1(){
  	if(testmas === 1){
  		num.value="1";
  	}else{
  		num.value += "1";
	}
  	testmas=0;
  }
  function _2(){
  	if(testmas === 1){
  		num.value="2";
  	}else{
  		num.value += "2";
	}
  	testmas=0;
  }
  function _3(){
  	if(testmas === 1){
  		num.value="3";
  	}else{
  		num.value += "3";
	}
  	testmas=0;
  }
  function _4(){
  	if(testmas === 1){
  		num.value="4";
  	}else{
  		num.value += "4";
	}
  	testmas=0;  }
  function _5(){
  	if(testmas === 1){
  		num.value="5";
  	}else{
  		num.value += "5";
	}
  	testmas=0;
  }
  function _6(){
   	if(testmas === 1){
  		num.value="6";
  	}else{
  		num.value += "6";
	}
  	testmas=0;
  }
  function _7(){
  	if(testmas === 1){
  		num.value="7";
  	}else{
  		num.value += "7";
	}
  	testmas=0;
  }
  function _8(){
  	if(testmas === 1){
  		num.value="8";
  	}else{
  		num.value += "8";
	}
  	testmas=0;  }
  function _9(){
   	if(testmas === 1){
  		num.value="9";
  	}else{
  		num.value += "9";
	}
  	testmas=0;
  }
  function _0(){
  	 if(testmas === 1){
  		num.value="0";
  	}else{
  		num.value += "0";
	}
  	testmas=0;
  }
  function _tastomeno(){
  	 if(testmas === 1 && num.value === 0){
  		num.value="ERROR";
  	}else{
  		num.value += "-";
	}
  	testmas=0;
  } 
  function _tastopiu(){
  	 if(testmas === 1 && num.value === 0){
  		num.value="ERROR";
  	}else{
  		num.value += "+";
	}
  	testmas=0;
  }    
  function calcola(){
  	try {
     	cumulo=eval(num.value);
    } catch (e) {
	 num.value="ERROR";
	 alert("ERROR: Averiguar las operaciones!");
	}
  	num.value=cumulo;
  	testmas=1;
  }
  function _per() {	 
  	if(testmas === 1 && num.value === 0){
  		num.value="ERROR";
  	}else{
  		num.value += "*";
	}
  	testmas=0;
  }
  
  function _div() {
  	if(testmas === 1 && num.value === 0){
  		num.value="ERROR";
  	}else{
  		num.value += "/";
	}
  	testmas=0;
  }  

function _verifica(uno) {	
		var _lungo=uno.length;
		var i=0;		
		if (_lungo > 13){
				num.value= "ERROR!!"
				return "errore";
			}
		if (!isNaN(uno)) {
			//alert("Non è un numero");
			var punto=uno.indexOf(".");
			var parte1="";
			var parte2="";
			var parte3="";
			var uso1=0;
			var uso2=0;
			var uso22=0;
			var uso3=0;
			var uso4=0;
			if(punto !== -1){
				parte1=uno.substr(0,punto);
				//alert("parte1 "+parte1 + " Lungo: " +_lungo);
				parte2=uno.substr(punto+1,_lungo);
				//alert("parte2 "+parte2);
				uso1=parseInt(parte1);
				uso2=parte2.length;
				//alert("Uso2: "+uso2);
				uso22=parseInt(parte2);
				parte3="1";
				i=1;
				while (i <= uso2) {
                  parte3 +="0";
                  i++
				}
				//alert("parte3 "+parte3);
				uso3=parseInt(parte3);
				//alert("uso2: " + uso2);
				//alert("uso22: " + uso22);
				//alert("uso3: " + uso3);
				uso22=uso22/uso3;
				//alert("uso22 dopo conversione: " + uso22);
				if (uso1 < 0) {
					uso4=uso1-uso22
				}else
				{
					uso4=uso1+uso22
				}
			}else{ 
				//alert("Non esiste punto");
				uso4=parseInt(uno);
			}
			return uso4;
		}else{
			//alert("É già numero!");
			return uno;
		}
}	