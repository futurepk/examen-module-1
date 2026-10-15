function prijsVanMaat(maat) {
  let prijs = 0;

  switch (true) {
    case maat === "small":
      prijs = 2.5;
      return prijs;
    case maat === "medium":
      prijs = 3.2;
      return prijs;
    case maat === "large":
      prijs = 3.9;
      return prijs;
    default:
      return null;
  }
}

const maten = ["small", "large", "mega"];

for (maat of maten) {
  console.log(
    `${maat}: ${prijsVanMaat(maat) === null ? "onbekende maat" : prijsVanMaat(maat).toFixed(2)}`,
  );
}
