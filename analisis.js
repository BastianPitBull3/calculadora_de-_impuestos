/**FORMULA PARA CALCULAR EL ISR A PAGAR EN EL 2022:
 * 
    INGRESOS ANUALES - DEDUCCIONES = UTILIDAD FISCAL
    UTILIDAD FISCAL - LIMITE INFERIOR = EXCEDENTE
    EXCEDENTE * PORCENTAJE APLICABLE = IMPUESTO MARGINAL
    IMPUESTO MARGINAL + CUOTA FIJA = IMPUESTO DETERMINADO
 */

/**TARIFA ANUAL DE ISR 2022:
 * LIMITE INFERIOR ($) | LIMITE SUPERIOR ($) | CUOTA FIJA ($) | PORCENTAJE APLICABLE (%) |
 * --------------------------------------------------------------------------------------|
 *    0.01             |   7,735.00          |   0.00         |   1.92                   |
 *    7,735.01         |   65,651.07         |   148.51       |   6.40                   |
 *    65,651.08        |   115,375.90        |   3,855.14     |   10.88                  |
 *    115,375.91       |   134,119.41        |   9,265.20     |   16.00                  |
 *    134,119.42       |   160,577.65        |   12,264.16    |   17.92                  |
 *    160,577.66       |   323,862.00        |   17,005.47    |   21.36                  |
 *    323,862.01       |   510,451.00        |   51,883.01    |   23.52                  |
 *    510,451.01       |   974,535.03        |   95,768.74    |   30.00                  |
 *    974,535.04       |   1,299,380.04      |   234,993.95   |   32.00                  |
 *    1,299,380.05     |   3,898,140.12      |   338,944.34   |   34.00                  |
 *    3,898,140.13     |   EN ADELANTE       |   1,222,522.76 |   35.00                  |
 * --------------------------------------------------------------------------------------| 
 */

/*Guardamos la información que necesitamos para calcular el ISR 
  según el LÍMITE INFERIOR y el LÍMITE SUPERIOR                  */
const limitesyTarifas = [
   {
      inf: 0.01,
      sup: 7735,
      cuota: 0,
      porcentaje: 1.92
   },
   {
      inf: 7735.01,
      sup: 65651.07,
      cuota: 148.51,
      porcentaje: 6.40
   },
   {
      inf: 65651.08,
      sup: 115375.9,
      cuota: 3855.14,
      porcentaje: 10.88
   },
   {
      inf: 115375.91,
      sup: 134119.41,
      cuota: 9265.2,
      porcentaje: 16
   },
   {
      inf: 134119.42,
      sup: 160577.65,
      cuota: 12264.16,
      porcentaje:17.92
   },
   {
      inf: 160577.66,
      sup: 323862,
      cuota: 17005.47,
      porcentaje: 21.36
   },
   {
      inf: 323862.01,
      sup: 510451,
      cuota: 51883.01,
      porcentaje: 23.52
   },
   {
      inf: 510451.01,
      sup: 974535.03,
      cuota: 95768.74,
      porcentaje: 30
   },
   {
      inf: 974535.04,
      sup: 1299380.04,
      cuota: 234993.95,
      porcentaje: 32
   },
   {
      inf: 1299380.05,
      sup: 3898140.12,
      cuota: 338944.34,
      porcentaje: 34
   },
   {
      inf: 3898140.13,
      sup: Infinity,
      cuota: 1222522.76,
      porcentaje: 35
   }
];

//Función para calcular el ISR
function calcularISR(){
   var ingresos = document.getElementById("ingresos").value;
   var deducciones = document.getElementById("deducciones").value;
   var utilidad = ingresos - deducciones;

   //Determinamos los datos que vamos a utilizar
   for(var i = 0; i < limitesyTarifas.length; i++){
      if(utilidad < limitesyTarifas[i].sup && utilidad > limitesyTarifas[i].inf){
         var limiteInf = limitesyTarifas[i].inf;
         var limiteSup = limitesyTarifas[i].sup;
         var cuota = limitesyTarifas[i].cuota;
         var porcentaje = limitesyTarifas[i].porcentaje / 100;
      }
   }

   var excedente = utilidad - limiteInf;
   var impuestoMarginal = excedente * porcentaje;
   var impuesto = impuestoMarginal + cuota;

   console.log("ingresos: " + ingresos);
   console.log("deducciones: " + deducciones);
   console.log("utilidad: " + utilidad);
   console.log("excedente: " + excedente);
   console.log("porcentaje: " + porcentaje);
   console.log("impuesto marginal: " + impuestoMarginal);
   console.log("limite inferior: " + limiteInf);
   console.log("limite superior: " + limiteSup);
   console.log("impuesto: " + impuesto);
   document.getElementById("texto-respuesta").innerHTML = "Impuesto determinado: $" + impuesto;
   return impuesto;
}

//Función para calcular el IVA de un producto
function calcularIVA(){
   var precio = document.getElementById("precio").value;
   var iva = precio * 0.16;
   document.getElementById("p-iva").innerHTML = "IVA del producto: $" + iva;
   return iva;
}
