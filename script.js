
//let resultado = verificarPatente(120, 5)

function verificarPatente (vitoria, derrota)
{
    let saldoRanqueada = vitoria - derrota

    if (saldoRanqueada <= 10)
        console.log("Ferro")
    else if (saldoRanqueada >= 11 && saldoRanqueada <= 20)
        console.log("Bronze")
    else if (saldoRanqueada >= 21 && saldoRanqueada <= 50)
        console.log("Prata")
    else if (saldoRanqueada >= 51 && saldoRanqueada <= 80)
        console.log("Ouro")
    else if (saldoRanqueada >= 81 && saldoRanqueada <= 90)
        console.log("Diamante")
    else if (saldoRanqueada >= 91 && saldoRanqueada <= 100)
        console.log("Lendário")
    else if (saldoRanqueada >= 101)
        console.log("Imortal")
    
}

verificarPatente(105,1)



