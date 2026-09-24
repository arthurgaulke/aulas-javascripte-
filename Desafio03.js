function verifiqueEstoque (quantidade) {
if (quantidade < 5) {
    return "Estoque Critico";
 }   else {
    return "Estoque Normal";
 }

}
console.log(verifiqueEstoque(3));