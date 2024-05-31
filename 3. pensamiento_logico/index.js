
function generarNumberoImparesHasta(n) {
    if (n < 0) {
        throw new Error("No se admiten número negativos");
    }
    const result = []
    for(let i = 1; i <= n; i += 2) {
        result.push(i);
    }
    return result;
}

const reuslt = generarNumberoImparesHasta(11);
console.log('Resultaod:', reuslt);