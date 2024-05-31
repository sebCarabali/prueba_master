function f(x, y, z) {
    const a = x + y;
    const b = a * z;
    const c = Math.sin(b);
    return c;
}

// se convierte en 

function calculateSinSumXYTimesZ(x, y, z) {
    const sumXY = x + y;
    const sumXYTimesZ = sumXY * z;
    const sinSumXYTimesZ = Math.sin(sumXYTimesZ);
    return sinSumXYTimesZ;
}