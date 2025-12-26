let NomeHeroi = "jãovitiin"
let xp = 20000
let nivel = ""

const niveis = [
    {nome: "ferro", comeca: 0, termina: 1000},
    {nome: "bronze", comeca: 1001, termina: 2000},
    {nome: "prata", comeca: 2001, termina: 5000},
    {nome: "ouro", comeca: 5001, termina: 7000},
    {nome: "platina", comeca: 7001, termina: 8000},
    {nome: "ascendente", comeca: 8001, termina: 9000},
    {nome: "imortal", comeca: 9001, termina: 10000},
    {nome: "radiante", comeca: 10001, termina: 50000},
] 


for (let regra = 0; regra < niveis.length; regra++) {
    const regraVerificada = niveis[regra];

    if(xp >= regraVerificada.comeca && xp <= regraVerificada.termina){
        nivel = regraVerificada.nome
    }
}

console.log(`O Herói de nome ${NomeHeroi} está no nível de ${nivel}`)
