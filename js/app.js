const NUM_NUMBER1 = document.getElementById("num1");
const NUM_NUMBER2 = document.getElementById("num2");

const SOLICITE = document.getElementById("solicite");

function calcular() {
   let num_1 = parseInt(NUM_NUMBER1.value);
   let num_2 = parseInt(NUM_NUMBER2.value);

    if (num_1 > num_2) {
        SOLICITE.innerHTML = `el numero mayor es : ${num_1}`;
    } else if (num_2 > num_1) {

        SOLICITE.innerHTML = `el numero mayor es : ${num_2}`;

       } 
      
}

