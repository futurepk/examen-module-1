let budget = 20;
const prijs = 3.4;
let aantalKoffies = 0;

while (budget >= prijs) {
  aantalKoffies++;
  budget -= prijs;
}

console.log(`Je kunt ${aantalKoffies} koffies kopen.`);
console.log(`Restsaldo: €${budget.toFixed(2)}`);
