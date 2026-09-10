// Prototipo cadastro itens do Roblox
// Alunos: João e Arthur
const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stadin
    output: process.stdout
});

funtion perguntar (texto) {
    return new Promise(resolve => {
        r1.question(texto, resposta 
=> {
            resolve(resposta);
        })
    });
}

//===========================================================================================
// CATÁLOGO DE ITENS
// ===========================================================================================

const catalogo = [
    {
        nome: "Espada das Sombras",
        preco: 250,
        raridade: "Raro"
        estoque: 12
    },
    {
        nome: "Passe Bluester"
        preco: 500
        raridade: "Lendario"
        estoque: 5
    },
    {
        nome: "Skin Harpia"
        preco: 600,
        raridade: "Raro"
        estoque: 10
    },
    {
        nome: "pet lanterna"
        preco: 100
        raridade: "Comun"
        estoque: 20


    }
];

asyn function programa() {

// ========================================================================================
// ESCOLHA DO ITEM
// ========================================================================================

    console.log("=== ESCOLHA UM ITEM===");
    catalogo.forEach((item, index) =>
{
        console.log(`${index + 1} - $ {item.nome}`);
});

        const itemEscolhido
    catalogo[escolha - 1];

}
// ===================================================================
// ETAPA 1 - FICHA DOS ITENS (VARIAVEIS, TIPOS E TEMPLATE STINGS)
//====================================================================

        console.log(`=== FICHA DO ITEM ===
Nome: ${itemEscolhida.nome};
preço: R$ ${itemEscolhida.preco} 
Raridade: ${itemEscolhida.raridade}
Estoques: ${itemEscolhida.estoque}
unidades
`);

// =====================================================================
// ETAPA 2 - REGRAS DE NEGÓCIO (OPERADORES E CONDICIONAIS)
// =====================================================================

console.log("=== REGRAS DE NEGÓCIO ===")

if (itemEscolhida.preco >= 0) {
    console.log("Preço inválidade.");
}

if (itemEscolhido.preco < 100) {
    itemEscolhido.raridade = "Comun";
} else if (itemEscolhido.preco < 500) {
      itemEscolhida.raridade = "Raro";                                        
} else {
    
// ===============================================================================
// ETAPA 3 - CADASTRO EM LOTE (LAÇO FOR)
// ===============================================================================

console.log("=== CADASTRO EM LOTE ===");
for (let i = 0; i < 5; i++) {
    console.log(`Item ${i + 1} cadastro com sucesso`)
    
    if (i % 2 === 0) {
        console.log("Item em promoção dessa semana!");
    }
}
console.log("");

// =================================================================================
// ETAPA 4 - CONTROLE DE ESTOQUE (LAÇO WHILE)
// =================================================================================

console.log("=== CONTROLE DE ESTOQUE ===");
while (quantidadeEstoque > 0) {
    quantidadeEstoque-= 2;
    console.log(`Estoque resstante: ${quantidadeEstoque}`);
}
console.log("Item esgotado!");
console.log("");

// =====================================================================================
// ETAPA 5 - CATÁLOGO DE ITENS (LAÇOS FOR...OF)
// =====================================================================================

console.log("=== CATÁLOGO DE ITENS (VITRINE) ===")
const catalogo = [
    "Capa do Lapislazule",
    "Passe Bluestar",
    "Pet lanterna", 
    "Skin Harpia"

];

for (const item of catalogo) {
    console.log(` ${item} `);
}
