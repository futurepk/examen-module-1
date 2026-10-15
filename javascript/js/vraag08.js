const juryscores = [7, 9, 2, 8, 10, 8];

function eerlijkGemiddelde(scores) {
  if (scores.length < 3) {
    throw new Error("Er zijn minstens 3 scores nodig.");
  }

  const kopie = [...juryscores].sort((a, b) => a - b);
  let som = 0;
  for (let i = 1; i < kopie.length - 1; i++) {
    som += kopie[i];
  }

  return som / (kopie.length - 2);
}

try {
  console.log(`Eerlijk gemiddelde: ${eerlijkGemiddelde(juryscores)}`);
  console.log(`Originele scores: ${juryscores.join(", ")}`);
  console.log(eerlijkGemiddelde([6, 9]));
} catch (fout) {
  console.error(fout.message);
}
