
// Rotina diária: Algoritmo da Minha Vida

const rotina = [
  "Acordar",
  "Tomar banho",
  "Tomar café da manhã",
  "Trocar de roupa",
  "Escovar os dentes",
  "Ir para a escola ou trabalho",
  "Sair das atividades do dia",
  "Ir à academia",
  "Jantar",
  "Assistir a um filme",
  "Dormir"
];

console.log("Minha rotina diária:");

rotina.forEach((atividade, indice) => {
  console.log(`${indice + 1}. ${atividade}`);
});
