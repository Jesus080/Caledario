/*Recibir el id del formulario para poder maipular*/
const FRM_CALENDARIO = document.querySelector("#frmCalendario");

//Genereamos el evento del formulario por el medio de submit
FRM_CALENDARIO.addEventListener("submit", calendarioController);

function calendarioController(event) {
   event.preventDefault();
   //recibir datos de caja de textos 
   let dia = parseInt(document.querySelector("#txtDia").value);
   let mes = parseInt(document.querySelector("#txtMes").value);
   let year = parseInt(document.querySelector("#txtYear").value);
   let diaInput = document.querySelector("#txtDia");


   // validar cajas de texto vacias
   if (diaInput.value.trim() == "") {
      alert("Por favor, ingrese un valor en el capos Vacios.");
      return;  // Detener la ejecución si está vacia
   }


   // imprimir resultados TDA
   let imprimirRes = document.getElementById("resultado");
   imprimirRes.textContent = calendarioTDA(dia, mes, year);
}

const calendarioTDA =(dia, mes, year) => {
   let bandera = false;
   switch (mes) {
      case 1:
      case 3:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
         if (dia <= 30) {
            dia++
         } else if (dia == 31 && mes == 12) {
            dia = 1
            mes = 1
            year++
         } else if (dia == 31 && mes != 12) {
            dia = 1
            mes++
         }
         break;
      case 2:
         if (year % 4 == 0) { // es biciesto
            if (dia <= 28) {
               dia++
            } else if (dia == 29) {
               dia = 1
               mes++
            } else {
               bandera = true;
            }
         } else { // no es biciesto
            if (dia <= 27) {
               dia++
            } else if (dia == 28) {
               dia = 1
               mes++
            } else {
               bandera = true;
            }
         }
         break;
      case 4:
      case 6:
      case 9:
      case 11:
         if (dia <= 29) {
            dia++
         } else if (dia == 30) {
            dia = 1
            mes++
         }
         break;
   }
   if(dia>=32){
      bandera = true;
   }
   if(mes>12){
      bandera = true;
   }
  //validando la bandera para retornar resultados
  if(bandera){
   return "Fecha Incorrecta"
  }else{
   return "El dia siguiente es: " + dia + "/" + mes + "/" + year;
  }
   
}



