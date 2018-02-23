  /*javascript para "Mi Caculadora"
///	Pier Paolo Zini
/// Curso Mooc "Desarrollo en HTML5, CSS y Javascript de Apps Web, Android..."ç
/// MiriadaX.com
/// Prueba Obligatoria Modulo 4
  */
  // 
  var tester=0;  //con 0 recibe Valor X  (base) y con 1 el valor Y (exponente)
  var memoria=""; // con tester=0 memoriza la base X 
  var memoria1="";
  var cumulo=0; //sirve para memorizar los calculos.
  var testmas=0;
  var testmen=0;
  var testper=0;
  var testdiv=0;
  var contaset=0;
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
  	memoria1="";
  	testmas=0;
  	testmen=0;
  	testper=0;
  	testdiv=0;
  	contaset=0;
  	document.getElementById("num").style.color="black"; //pone en negro el color del input 
	document.getElementById("_y").style.color="white";
	document.getElementById("num").style.color="black";
	document.getElementById("_xy").style.background="linear-gradient(to top, rgba(255,160,0,0.1), rgba(255,160,0,0.8))";
	document.getElementById("_plus").style.background="linear-gradient(to top, rgba(255,160,0,0.1), rgba(255,160,0,1))";
	document.getElementById("_meno").style.background="linear-gradient(to top, rgba(255,160,0,0.1), rgba(255,160,0,1))";
	document.getElementById("_tot").style.background="linear-gradient(to top, rgba(255,160,0,0.1), rgba(255,160,0,1))";

  } 
  //raiz cuadrada 
  function cuadrado() {
   num.value = num.value * num.value;
  }
  //cambia el signo del numero + o -
  function masomenos () {
  		num.value= -(num.value);
  }

  function invers() {
  	num.value= 1/num.value;
  }
  function raiz () {
  	num.value=Math.sqrt(num.value);
  }
  function round() {
  	if (num.value >= 0){
  		num.value=Math.floor(num.value);
  	}else{
  		num.value=Math.ceil(num.value)
  	}
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
  		num.value=0;
  		tester=1;
  		document.getElementById("_y").style.color="green";
  		document.getElementById("num").style.color="red";
  		document.getElementById("_xy").style.background="linear-gradient(to top, rgba(244,252,110,0.1), rgba(244,252,110,1))";
  	}else{
  		//alert("Tester è uguale a 1")
  		num.value=Math.pow(memoria,num.value);
  		tester=0;
  		memoria="";
  		//se vuelve a poner los estilos estandard 
		document.getElementById("_y").style.color="white";
		document.getElementById("num").style.color="black";
		document.getElementById("_xy").style.background="linear-gradient(to top, rgba(255,160,0,0.1), rgba(255,160,0,0.8))";
	 }
  }
  //Recibe el valor del teclado
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

  function _mas() {
  	var pas1=0;
  	pas1=num.value;
  	pas1=_verifica(pas1);
  	if (pas1==="errore"){return;}
  	//alert("pas1 dopo verifica: " +pas1);
  	//alert("Cumulo: " + cumulo);
  	cumulo += pas1;
  	//alert("Cumulo dopo la somma: " + cumulo);
  	num.value=cumulo;
  	testmas=1;
  	contaset=1;
  	document.getElementById("_plus").style.background="linear-gradient(to top, rgba(244,252,110,0.1), rgba(244,252,110,1))";
  	document.getElementById("_meno").style.background="linear-gradient(to top, rgba(244,252,110,0.1), rgba(244,252,110,1))";
 	document.getElementById("_tot").style.background="linear-gradient(to top, rgba(244,252,110,0.1), rgba(244,252,110,1))";
  }
  function _menos() {
    var pas2=0;
    pas2=num.value;
    pas2=_verifica(pas2);
    if (pas2==="errore"){return;}
    //alert("pas2 dopo verifica: " +pas2);
  	//alert("Cumulo: " + cumulo);
  	cumulo -= pas2;
  	//alert("Cumulo dopo la somma: " + cumulo);
  	num.value=cumulo;
  	testmas=1;
  	contaset=1;
  	document.getElementById("_plus").style.background="linear-gradient(to top, rgba(244,252,110,0.1), rgba(244,252,110,1))";
  	document.getElementById("_meno").style.background="linear-gradient(to top, rgba(244,252,110,0.1), rgba(244,252,110,1))";
 	document.getElementById("_tot").style.background="linear-gradient(to top, rgba(244,252,110,0.1), rgba(244,252,110,1))";
  }
  function _per() {
  	if (contaset===1) {
  		    var pas3=0;
		    pas3=num.value;
		    pas3=_verifica(pas3);
		    if (pas3==="errore"){return;}
		    alert("pas3 dopo verifica: " +pas3);
		  	alert("Cumulo: " + cumulo);
		  	cumulo *= pas3;
		  	alert("Cumulo dopo la somma: " + cumulo);
		  	num.value=0;
		  	testper=1;

  	}
  	if (contaset===0){
		if (tester===0) {
			//alert("tester è uguale a 0")
			memoria1=num.value;
			num.value=0;
			tester=1;
			testmas=2;
			document.getElementById("_y").style.color="green";
			document.getElementById("num").style.color="red";
			document.getElementById("_xy").style.background="linear-gradient(to top, rgba(255,0,0,0.1), rgba(255,0,0,0.3))";
		}else{
			//alert("Tester è uguale a 1")
			num.value=Math.pow(memoria,num.value);
			tester=0;
			memoria="";
			//se vuelve a poner los estilos estandard 
			document.getElementById("_y").style.color="white";
			document.getElementById("num").style.color="black";
			document.getElementById("_xy").style.background="linear-gradient(to top, rgba(255,160,0,0.1), rgba(255,160,0,0.8))";
		}  		

  	}

  }  
  function _div() {
    var pas4=0;
    pas4=num.value;
    pas4=_verifica(pas4);
    if (pas4==="errore"){return;}
    alert("pas4 dopo verifica: " +pas4);
  	alert("Cumulo: " + cumulo);
  	cumulo *= pas4;
  	alert("Cumulo dopo la somma: " + cumulo);
  	num.value=0;
  	testdiv=1;
  }  
  function total() {
  	/*if () {

  	}*/
	document.getElementById("_plus").style.background="linear-gradient(to top, rgba(255,160,0,0.1), rgba(255,160,0,1))";
	document.getElementById("_meno").style.background="linear-gradient(to top, rgba(255,160,0,0.1), rgba(255,160,0,1))";
	document.getElementById("_tot").style.background="linear-gradient(to top, rgba(255,160,0,0.1), rgba(255,160,0,1))";
  }
	//esta funcion me sirve para controlar si la variable es un numero. 
	//si no es un numero, verifica si tiene el punto del decimal y separa las dos partes
	//antes de convertir con parseInt que nio funciona con los decimales.
	//
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