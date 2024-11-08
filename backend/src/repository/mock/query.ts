function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min: number, max: number): number {
  return parseFloat((Math.random() * (max - min) + min).toFixed(3));
}

function getRandomDate(): string {
  const start = new Date(2024, 6, 10, 4, 0); // 07/10/2024 04:00
  const end = new Date(2024, 6, 10, 6, 0); // 07/10/2024 06:00
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()} ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
}

const statuses = ["EM SEPARAÇÃO", "FINALIZADO"];
const stageoutStatuses = ["Sem stageout", "10%", "20%", "30%", "40%", "50%"];

const resultQuery = Array.from({ length: 60 }, (_, i) => ({
  carga: (8311533 + i).toString(),
  destino: `LJ ${52 + i}`,
  box: (52 + i).toString(),
  data: getRandomDate(),
  status: statuses[getRandomInt(0, statuses.length - 1)],
  tempoDecorrido: `${getRandomInt(0, 100)}%`,
  stsSeparacao: `${getRandomInt(0, 100)}%`,
  stsStageout: stageoutStatuses[getRandomInt(0, stageoutStatuses.length - 1)],
  stsNaoFaturado: stageoutStatuses[getRandomInt(0, stageoutStatuses.length - 1)],
  stsFaturado: `${getRandomInt(0, 100)}%`,
  paletes: getRandomInt(1, 10).toString(),
  itens: getRandomInt(20, 40).toString(),
  caixasGeradas: getRandomInt(50, 150).toString(),
  caixasSeparadas: getRandomInt(0, 50).toString(),
  pesSol: getRandomInt(80, 130).toString(),
  pesSep: getRandomInt(700, 800).toString(),
  m3: getRandomFloat(0.1, 0.3).toString(),
  produtivo: getRandomInt(0, 50).toString(),
}));

export { resultQuery };
