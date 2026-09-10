const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(texto) {
    return new Promise(resolve => {
        rl.question(texto, resposta => {
            resolve(resposta);
        });
    });
}


// ============================================================
// CATÁLOGO DE ITENS
// ============================================================

const catalogo = [
    {
        nome: "Espada das Sombras",
        preco: 250,
        raridade: "Raro",
        estoque: 12
    },

    {
        nome: "Passe Bluster",
        preco: 500,
        raridade: "Lendário",
        estoque: 5
    },

    {
        nome: "Pet Lanterna",
        preco: 100,
        raridade: "Comum",
        estoque: 25
    },

    {
        nome: "Skin Hárpia",
        preco: 600,
        raridade: "Raro",
        estoque: 10
    }
];


async function programa() {

    // ============================================================
    // ESCOLHA DO ITEM
    // ============================================================

    console.log("=== ESCOLHA UM ITEM ===");

    catalogo.forEach((item, index) => {
        console.log(`${index + 1} - ${item.nome}`);
    });

    let escolha;
    let itemEscolhido;

    do {
        escolha = Number(
            await perguntar("Digite o número do item: ")
        );

        itemEscolhido = catalogo[escolha - 1];

        if (!itemEscolhido) {
            console.log("Número inválido! Tente novamente.");
        }
    } while (!itemEscolhido);


    // ============================================================
    // ETAPA 1 — FICHA DO ITEM
    // ============================================================

    console.log(`
=== FICHA DO ITEM ===
Nome: ${itemEscolhido.nome}
Preço: R$ ${itemEscolhido.preco}
Raridade: ${itemEscolhido.raridade}
Estoque: ${itemEscolhido.estoque} unidades
`);


    // ============================================================
    // ETAPA 2 — REGRAS DE NEGÓCIO
    // ============================================================

    console.log("=== REGRAS DE NEGÓCIO ===");

    if (itemEscolhido.preco >= 0) {
        console.log("Preço válido.");
    } else {
        console.log("Preço inválido.");
    }


    // Classificação automática
    if (itemEscolhido.preco < 100) {
        itemEscolhido.raridade = "Comum";

    } else if (itemEscolhido.preco < 500) {
        itemEscolhido.raridade = "Raro";

    } else {
        itemEscolhido.raridade = "Lendário";
    }

    console.log(
        `Raridade: ${itemEscolhido.raridade}`
    );


    const emDestaque =
        itemEscolhido.preco > 500 ? true : false;

    console.log(`Item em destaque? ${emDestaque}`);


    const disponivel =
        itemEscolhido.estoque > 0 &&
        itemEscolhido.preco > 0;

    console.log(
        `Disponível para compra? ${disponivel}`
    );


    // ============================================================
    // ETAPA 3 — CADASTRO EM LOTE
    // ============================================================

    console.log("\n=== CADASTRO EM LOTE ===");

    for (let i = 0; i < 5; i++) {

        console.log(
            `Item ${i + 1}: ${itemEscolhido.nome} cadastrado!`
        );

        if (i % 2 === 0) {
            console.log("Item em promoção da semana!");
        }
    }

    // ============================================================
    // ETAPA 4 — CONTROLE DE ESTOQUE
    // ============================================================

    console.log("\n=== CONTROLE DE ESTOQUE ===");

    while (itemEscolhido.estoque > 0) {

        console.log(
            `Estoque atual de ${itemEscolhido.nome}: ${itemEscolhido.estoque}`
        );

        const venda = Number(
            await perguntar(
                "Quantas unidades deseja retirar? "
            )
        );

        if (venda > 0 && venda <= itemEscolhido.estoque) {

            itemEscolhido.estoque -= venda;

            console.log(
                `Venda realizada! Estoque restante: ${itemEscolhido.estoque}`
            );

        } else {

            console.log(
                "Quantidade inválida ou estoque insuficiente!"
            );
        }
    }

    console.log(`${itemEscolhido.nome} está esgotado!`);


    // ============================================================
    // ETAPA 5 — CATÁLOGO ATUALIZADO
    // ============================================================

    console.log("\n=== CATÁLOGO DE ITENS ===");

    for (const item of catalogo) {

        console.log(
            `🛒 ${item.nome} | R$ ${item.preco} | ` +
            `${item.raridade} | Estoque: ${item.estoque}`
        );
    }


    rl.close();
}

programa();
