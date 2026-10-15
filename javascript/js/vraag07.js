const prijzen = [2.5, 4.8, 3.2, 5.5, 3.9, 2.9];

const hogerDanVier = prijzen.filter((prijs) => prijs < 4);

const metBtw = hogerDanVier.map((prijs) => Number((prijs * 1.12).toFixed(2)));

let som = metBtw.reduce((a, b) => a + b, 0);

console.log(`€ ${metBtw.join(" | €")}`);
console.log(`Som : €${som}`);
