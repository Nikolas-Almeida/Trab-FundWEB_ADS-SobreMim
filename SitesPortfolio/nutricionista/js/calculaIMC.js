var titulo = document.querySelector('.titulo');
titulo.textContent = "Leticia nutricionista";


var pacientes = document.querySelectorAll('.paciente');

// Verificar se altura e peso estao corretas e após isso, calcular o IMC
for(var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];

    // posso fazer a pesquisa do seguinte modo:
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    // e também em apenas uma linha:
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    var tdImc = paciente.querySelector('.info-imc');

    if(!pesoValido){
        console.log('Peso inválido');
        pesoValido = false;
        tdImc.textContent = 'Peso Inválido';
        paciente.classList.add('paciente-invalido');
    }

    // "||" serve como o operador 'ou'
    if(!validaAltura){
        console.log('Altura inválida');
        alturaValida = false;
        tdImc.textContent = 'Altura inválida';
        paciente.classList.add('paciente-invalido');
    }

    // "&&" serve como operador 'e'
    if(pesoValido && alturaValida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

