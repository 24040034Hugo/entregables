 function cuadrado(){
      var num1=document.form1.num1.value;
      var resultado=num1*num1;
      document.form1.resultado.value=resultado;
    if (num1 === "") {
      alert("Por favor, ingresa un número.");
    } else {
      alert("El cuadrado es: " + resultado);
    }
  }
  function borrar(){
      document.form1.num1.value="";
      document.form1.resultado.value="";
  }