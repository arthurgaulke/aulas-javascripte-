const perderEnergia = function (energiaInicial) {
    let energia = energiaInicial;
    while (energia > 0) {
        energia -= 10;
        console.log(energia);
    }
};
perderEnergia(100);