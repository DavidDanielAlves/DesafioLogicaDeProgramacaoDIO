let nomeDoHeroi = "David";
let XpDoHeroi = 10500;
let nivelDoHeroi = ""

function verificarNivelDoHeroi(XpDoHeroi) {
    if (XpDoHeroi >= 1000) {
        nivelDoHeroi = 'Ferro';
    }

    if (XpDoHeroi <= 1001 && XpDoHeroi >= 2000) {
        nivelDoHeroi = 'Bronze';
    }

    if (XpDoHeroi <= 2001 && XpDoHeroi >= 5000) {
        nivelDoHeroi = 'Prata';
    }

    if (XpDoHeroi <= 6001 && XpDoHeroi >= 7000) {
        nivelDoHeroi = 'Ouro';
    }

    if (XpDoHeroi <= 7001 && XpDoHeroi >= 8000) {
        nivelDoHeroi = 'Platina';
    }

    if (XpDoHeroi <= 8001 && XpDoHeroi >= 9000) {
        nivelDoHeroi = 'Ascendente';
    }

    if (XpDoHeroi <= 9001 && XpDoHeroi >= 10000) {
        nivelDoHeroi = 'Imortal';
    }

    if (XpDoHeroi >= 10001) {
        nivelDoHeroi = 'Radiante';
    }
}

verificarNivelDoHeroi(XpDoHeroi);

console.log(`O nível atual do Heroi é ${nivelDoHeroi}`)