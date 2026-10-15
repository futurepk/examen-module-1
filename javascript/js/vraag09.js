const namen = ["Brazilië", "Ethiopië", "Colombia", "Kenia", "Peru"];
const voorraden = [12, 3, 9, 0, 15];

function maakBestellijst(namen, voorraden, minimum) {
  if (namen.length !== voorraden.length) {
    throw new Error("De lijsten zijn niet even lang");
  }

  const bestellingen = [];

  for (voorraad of voorraden) {
    let bijbestellen = 0;
    if (voorraad >= minimum) {
      continue;
    } else {
      for (let i = voorraad; i < minimum; i++) {
        bijbestellen++;
      }
      bestellingen.push(
        `${namen[voorraad]}: bestel ${bijbestellen} ${bijbestellen === 1 ? "zak" : "zakken"}`,
      );
    }
  }

  return bestellingen;
}

try {
  const lijst = maakBestellijst(namen, voorraden, 10);
  if (lijst.length === 0) {
    console.log("Niets te bestellen");
  } else {
    console.log(lijst.join("\n"));
    console.log(`Aantal lijnen: ${lijst.length}`);
  }

  const leeg = maakBestellijst(namen, voorraden, 0);

  if (leeg.length === 0) {
    console.log("Niets te bestellen");
  } else {
    console.log(leeg.join("\n"));
    console.log(`Aantal lijnen: ${leeg.length}`);
  }

  maakBestellijst(["Brazilië"], [1, 2], 10);
} catch (error) {
  console.error(error.message);
}
