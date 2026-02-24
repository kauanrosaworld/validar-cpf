let cpf = "256.746.300-38"
let cpfLimpo = cpf.replace(/[^0-9]/g, "")



function validaCpf(cpfLimpo){
    if (cpfLimpo.length!==11) return false

    //Bloqueia CPFs tipo 11111111111
    if(/^(\d)\1+$/.test(cpfLimpo)) return false

    let soma = 0
    let resto

    // Primeiro Dígito
    for (let i = 0; i < 9; i++){
        soma += Number (cpfLimpo[i]) * (10 - i)
    }

    resto = (soma * 10) % 11
    if (resto === 10) resto = 0
    if (resto !== Number(cpfLimpo[9])) return false

    soma = 0

    // Segundo dígito
    for(let i = 0; i < 10; i++){
        soma += Number(cpfLimpo[i]) * (11 - i)
    }

    resto = (soma * 10) % 11
    if (resto === 10) resto = 0
    if (resto !== Number(cpfLimpo[10])) return false

    return true

}

if(validaCpf(cpfLimpo)){
    console.log('CPF válido', cpf);
    
}else console.log('cpf invalido', cpf);