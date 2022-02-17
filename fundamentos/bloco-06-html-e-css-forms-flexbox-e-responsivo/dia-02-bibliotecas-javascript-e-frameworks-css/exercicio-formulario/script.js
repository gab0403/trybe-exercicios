
const submit = document.getElementById('botao-enviar');

function submitCancel() {
    submit.addEventListener('click', function(event){
        event.preventDefault();
    });
}
submitCancel()

function criarOptions() {
    let estado = document.getElementById('estado');
    let estadosBrasil = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES','GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    for (let index = 0; index < estadosBrasil.length; index+= 1) {
        let opcao = document.createElement('option');
       opcao.innerText = estadosBrasil[index];
       opcao.value = estadosBrasil[index];
       estado.appendChild(opcao);
        
    }
}
criarOptions()
