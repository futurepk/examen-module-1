const koffie = 12;
const prijs = 3.2;
let aantalKoffies = 0;
let teBetalen = 0;

for (let i = 0; i < koffie; i++) {
  aantalKoffies++;
  if (aantalKoffies % 5 === 0) {
    console.log(`Koffie ${aantalKoffies}: gratis!`);
  } else {
    console.log(`Koffie ${aantalKoffies}: € ${prijs.toFixed(2)}`);
    teBetalen += prijs;
  }
}

console.log(`Totaal te betalen: € ${teBetalen.toFixed(2)}`);
