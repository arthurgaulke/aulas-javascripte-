const verificarIdade = function (idade) {
    return idade >= 18 ? "permitido" : "Bloqueado";
};
console.log(verificarIdade(16));