function beoordeelTemperatuur(graden) {
  let text = "";

  if (graden !== Number(graden)) {
    throw new Error("Ongeldige invoer");
  }

  switch (true) {
    case graden < 60:
      text = "te koud";
      break;

    case graden > 70:
      text = "te heet";
      break;

    default:
      text = "perfect";
      break;
  }

  return text;
}

try {
  console.log(beoordeelTemperatuur(55));
  console.log(beoordeelTemperatuur(65));
  console.log(beoordeelTemperatuur(70));
  console.log(beoordeelTemperatuur(82));
  console.log(beoordeelTemperatuur("warm"));
} catch (error) {
  console.warn(error.message);
}
