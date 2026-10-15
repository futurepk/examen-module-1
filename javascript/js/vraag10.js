const producten = ["espresso", "latte", "cappuccino", "croissant"];
const prijzen = [2.4, 3.6, 3.3, 2.1];

function prijsVan(product) {
  let prijs = 0;
  switch (true) {
    case product === "espresso":
      prijs = 2.4;
      return prijs;
    case product === "latte":
      prijs = 3.6;
      return prijs;
    case product === "cappuccino":
      prijs = 3.3;
      return prijs;
    case product === "croissant":
      prijs = 2.1;
      return prijs;
    default:
      throw new Error(`Onbekend product: ${product}`);
  }
}

function bepaalKorting(klanttype) {
  let korting = 0;

  switch (true) {
    case klanttype === "student":
      korting = 0.2;
      return korting;

    case klanttype === "personeel":
      korting = 0.25;
      return korting;
    default:
      return korting;
  }
}

function maakKassaticket(producten, aantallen, klanttype = "gewoon") {
  if (producten.length !== aantallen.length) {
    throw new Error("Producten en aantallen passen niet bij elkaar");
  }

  const kassaLijst = [];
  const laagste = [];
  let subtotaal = 0;
  let goedkoopste = "";
  let i = 0;
  let grootTotaal = 0;
  let korting = 0;
  for (product of producten) {
    if (aantallen[i] !== 0) {
      let dePrijs = prijsVan(product) * aantallen[i];
      subtotaal += dePrijs;
      laagste.push(Number(prijsVan(product)).toFixed(2));
      kassaLijst.push(`${aantallen[i]} x ${product} = €${dePrijs.toFixed(2)}`);
    }
    i++;
  }

  if (aantallen.reduce((a, b) => a + b, 0) >= 5 && subtotaal > 10) {
    laagste.sort((a, b) => a - b);
    goedkoopste = laagste[0];
    kassaLijst.push(`Goedkoopste product gratis: -€${goedkoopste}`);
  }

  kassaLijst.push(`Subtotaal: €${subtotaal}`);

  if (bepaalKorting(klanttype) != 0) {
    korting = subtotaal * bepaalKorting(klanttype);
    kassaLijst.push(`Korting ${klanttype}: -${korting.toFixed(2)}`);
  }

  grootTotaal = subtotaal - korting - goedkoopste;

  kassaLijst.push(`Te betalen: €${grootTotaal.toFixed(2)}`);
  return kassaLijst;
}

try {
  const ticket1 = maakKassaticket(
    ["latte", "croissant", "espresso", "cappuccino"],
    [2, 3, 0, 1],
    "student",
  );
  console.log(ticket1.join("\n"));
  console.log("------------");

  const ticket2 = maakKassaticket(["espresso", "latte"], [1, 1]);
  console.log(ticket2.join("\n"));

  console.log("------------");

  const ticket3 = maakKassaticket(["latte", "thee"], [1, 2], "personeel");
  console.log(ticket3.join("\n"));
} catch (error) {
  console.error(error.message);
}
