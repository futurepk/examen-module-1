const origines = ["Brazilië", "Ethiopië", "Colombia"];

origines.push("Kenia");
origines.unshift("Peru");

origines.splice(2, 1);

console.log(origines.join(", "));
console.log(`Aantal origines = ${origines.length}`);

if (origines.includes("Ethiopië")) {
  console.log("Ethopië staat nog in de lijst");
} else {
  console.log("Ethiopië staat niet in de lijst");
}

console.log(`Colombia staat op index: ${origines.indexOf("Colombia")}`);
