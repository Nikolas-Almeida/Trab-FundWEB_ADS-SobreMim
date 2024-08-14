var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    // Extraindo informações do paciente do form
    var paciente = obtemPacienteDoForm(form);

    // Cria a tr e a td do pacinete
    var pacienteTr = montaTr(paciente);

    //Exibe mensagem de erro caso algum dado esteja errado
    var erro = validaPaciente(paciente);

    if(erro.length > 0){
        exibeMensagemDeErro(erro);
        return;
    }



    // Adicionando o paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes');
    
    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagemErro = document.querySelector('#mensagemErro');
    mensagemErro.innerHTML = '';
});

//Obtém as informações do paciente
function obtemPacienteDoForm(form){

    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
};

//Monta a tr do paciente
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
};

//Monta a td do paciente
function montaTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

//Faz a validação dos campos do form de adicionar paciente
function validaPaciente(paciente){

    var erros = [];

    //Exibe mensagem de erro caso os valores de peso e altura estão inválidos
    if(!validaPeso(paciente.peso)) erros.push("*O peso está inválido.");
    if(!validaAltura(paciente.altura)) erros.push("*A altura está inválida.");

    //Exibe mensagem de erro caso algum dos campos estejam em branco
    if(paciente.nome.length == 0) erros.push("*Insira um nome.");
    if(paciente.peso.length == 0) erros.push("*Insira o peso do paciente.")
    if(paciente.altura.length == 0) erros.push("*Insira a altura do paciente.")
    if(paciente.gordura.length == 0) erros.push("*Insira a porcentagem de gordura.");

    return erros;
}

//Exibe a mensagem de erro caso algum 'if' da "validaPaciente" seja verdadeiro
function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagemErro");
    ul.innerHTML = ''

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}