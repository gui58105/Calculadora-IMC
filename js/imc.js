function calcularIMC () {
    var inNome = document.getElementById ("inNome");
    var inAltura = document.getElementById ("inAltura");
    var inPeso = document.getElementById ("inPeso");
    var outImc = document.getElementById ("outImc");
    var outClassificacao = document.getElementById ("outClassificacao");

    var nome = inNome.value;
    var altura = Number(inAltura.value);
    var peso = Number(inPeso.value);

    // fórmula do IMC: peso / altura²

    var imc = (peso / altura**2);
    var classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do Peso"
    } else if (imc < 25) {
        classificacao = "Normal" 
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso"
    } else if (imc < 35) {
        classificacao = "Obesidade Grau I"
    } else if (imc < 40) {
        classificacao = "Obesidade Grau II" 
    } else {
        classificacao = "Obesidade Grau III"
    }

    outImc.textContent = nome + ", o valor do seu IMC/BMI é: " + imc.toFixed(2);
    outClassificacao.textContent = "Sua classificação do IMC/BMI é: " + classificacao;
}
var btCalcularImc = document.getElementById ("btCalcularImc");
btCalcularImc.addEventListener ("click", calcularIMC);
