/* Hier komt jouw JavaScript-code */
let start = 100000;
let intrest = 0.02;
let years = 7;
let afer = start * (1 + intrest) ** years;
console.log(`Op een periode van ${years} jaar stijgt je bezit van ${start} naar ${Math.round(afer)}.`);
console.log(`Dit is met een rentevoet van ${intrest}.`)