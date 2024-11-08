import { makeAutoObservable } from "mobx";

export interface Stage {
  description: string;
  percentage: number;
}

class StageExpeditionStore {
  stages: Stage[] = [
    { description: "Separação", percentage: 75 },
    { description: "Saída Gradual", percentage: 50 },
    { description: "Não Faturados", percentage: 25 },
    { description: "Faturados", percentage: 90 },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  updateStage(index: number, percentage: number) {
    this.stages[index].percentage = percentage;
  }
}

const stageExpeditionStore = new StageExpeditionStore();
export default stageExpeditionStore;
