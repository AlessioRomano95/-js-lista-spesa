const listaSpesa = [
  "Pomodori",
  "Cipolle",
  "Basilico",
  "Pepe Nero",
  "Olio d'oliva",
  "Cassa d'acqua",
  "Nutella",
  "Uova",
  "Latte",
  "Farina",
  "Pasta",
  "Carne",
  "Pollo",
  "Prosciutto crudo",
  "Patate",
  "Broccoli",
  "Guanciale",
  "Pecorino",
  "Peperoncino",
];
console.log(listaSpesa);

let i = 0

const listaCompleta = document.getElementById("listaspesa");

while ( i < listaSpesa.length) {
  listaCompleta.innerHTML += `<p id="listaspesa">${listaSpesa[i]}</p>`;
  i++;
  
}