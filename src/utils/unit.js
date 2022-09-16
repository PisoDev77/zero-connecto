function removeUnit(unit){
    return parseFloat(unit, 10);
}

function em(unit, base = 16){
    return `${removeUnit(unit)/base}em`;
}
// exports.em = em;
function rem(unit, base = 16){
    return `${removeUnit(unit)/base}rem`;
}

module.exports = {
    removeUnit,
    em,
    rem
}