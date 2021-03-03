
let botao = document.querySelector('button');

botao.addEventListener('click', function() {

    let cep = document.querySelector('#buscaCep').value;

    let api = `https://viacep.com.br/ws/${cep}/json/`;

    let request = new XMLHttpRequest();

    request.open('GET', api);

    request.onload = function() {
        
        let endereco = JSON.parse(request.responseText);

        let cep = document.querySelector('#cep');
        cep.innerHTML = endereco.cep;

        let logradouro = document.querySelector('#logradouro');
        logradouro.innerHTML = endereco.logradouro;

        let bairro = document.querySelector('#bairro');
        bairro.innerHTML = endereco.bairro;

        let localidade = document.querySelector('#localidade');
        localidade.innerHTML = endereco.localidade;

        let uf = document.querySelector('#uf');
        uf.innerHTML = endereco.uf;

        let ddd = document.querySelector('#numero');
        ddd.innerHTML = endereco.ddd;
    };

    request.send();

});