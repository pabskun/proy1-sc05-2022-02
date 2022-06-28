//Acceder a un elemento usando el selector de css
//const inputNombre2 = document.querySelector('#txt-nombre');
//Acceder a un elemento mediante getElementById
const inputNombre = document.getElementById('txt-nombre');
const inputPeso = document.getElementById('txt-peso');
const inputEstatura = document.getElementById('txt-estatura');
const btnCalcular = document.getElementById('btn-calcular');

//Forma tradicional
//function calcularImc() {

//};

//Forma actual (moderna, función de flecha)
const calcularImc = () => {
    let nombre = inputNombre.value;
    let peso = Number(inputPeso.value);
    let estatura = Number(inputEstatura.value);
    let imc = peso / Math.pow(estatura, 2);

    console.log(nombre, imc.toFixed(2));
    console.log('Saludos', nombre, 'su imc es de:', imc.toFixed(2));

    console.log(nombre + imc);

    console.log(`Saludos ${nombre} su imc es de: ${imc.toFixed(2)}`);
};


btnCalcular.addEventListener('click', calcularImc);