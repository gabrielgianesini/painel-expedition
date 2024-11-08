import { makeAutoObservable } from "mobx";

class InfoCardStore {
  dataInfoCard = [
    { title: "Cargas", value: 0 },
    { title: "Faturadas", value: 0 },
    { title: "Separação", value: 0 },
    { title: "Paletes", value: 0 },
    { title: "Paletes Faturados", value: 0 },
    { title: "Paletes Fechados", value: 0 },
    { title: "Itens", value: 0 },
    { title: "Caixas Geradas", value: 0 },
    { title: "Caixas Separadas", value: 0 },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setValue(title: string, newValue: number) {
    const card = this.dataInfoCard.find((item) => item.title === title);
    if (card) {
      card.value = newValue;
    }
  }
}

const infoCardStore = new InfoCardStore();
export default infoCardStore;
