// Prototipo cadastro itens do Roblox
// Alunos: João, Arthur G. e Victor S.

// ===================================================================
// ETAPA 1 - FICHA DOS ITENS (VARIAVEIS, TIPOS E TEMPLATE STINGS)
//====================================================================

const nomeItem = "Capa do Lapislazule";
const precoItem = 300; 
let raridadeItem = "Raro"
let quantidadeEstoque = 12;

console.log; (`=== FICHA DO ITEM ===
Nome: ${nomeItem}
Preço: R$ ${precoItem}
Raridade: ${raridadeItem}
Estoque: ${quantidadeEstoque} unidades
`);

// =====================================================================
// ETAPA 2 - REGRAS DE NEGÓCIO (OPERADORES E CONDICIONAIS)
// =====================================================================

if (precoItem >= 0) {
    console.log("Preço válido. ");
}   else {
    console.log("Erro: o preço não pode ser negativo!");
}

if (precoItem < 100) {
    raridadeItem = "Comun";
}    else if (precoItem >= 100 && precoItem < 500) {
    raridadeItem = "Lendario";
}
console.log (`Raridade classificada automatica: ${raridadeItem}`)

const emDestaque = precoItem > 500 ? true : false;
console.log(`Item em destaque? ${emDestaque}`);

const disponivelParacompra = quantidadeEstoque > 0 && precoItem > 0;
console.log(`Disponivel para compra? ${disponivelParacompra}\n`);

// ===============================================================================
// ETAPA 3 - CADASTRO EM LOTE (LAÇO FOR)
// ===============================================================================

console.log("=== CADASTRO EM LOTE ===");
for (let i = o; i < 5; i++) {
    console.log(`Item ${i + 1} cadastro com sucesso`)
    
    if (i % 2 === 0) {
        console.log("Item em promoção dsa semana!");
    }
}
console.log("");

// =================================================================================
// ETAPA 4 - CONTROLE DE ESTOQUE (LAÇO WHILE)
// =================================================================================

console.log("=== CONTROLE DE ESTOQUE ===");
while (quantidade > 0) {
    quantidadeEstoque_= 2;
    console.log(`Estoque resstante: ${quantidadeEstoque}`);
}
console.log("Item esgotado!");
console.log("");

// =====================================================================================
// ETAPA 5 - CATÁLOGO DE ITENS (LAÇOS FOR...OF)
// =====================================================================================

console.log("=== CATÁLOGO DE ITENS (VITRINE) ===")
const catalago = [
    "Capa do Lapislazule",
    "Passe Bluestar",
    "Pet lanterna", 
    "Skin Harpia"
];

for (const item of catalogo) {
    console.log(` \("-")/ ${item}`);
}
