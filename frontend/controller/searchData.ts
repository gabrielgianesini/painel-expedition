import { makeAutoObservable } from "mobx";

interface SearchData {
  carga: string;
  destino: string;
  box: string;
  data: string;
  status: string;
  tempoDecorrido: string;
  stsSeparacao: string;
  stsStageout: string;
  stsNaoFaturado: string;
  stsFaturado: string;
  paletes: string;
  itens: string;
  caixasGeradas: string;
  caixasSeparadas: string;
  pesSol: string;
  pesSep: string;
  m3: string;
  produtivo: string;
}

class SearchDataController {
  public data: SearchData[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public setData = (data: SearchData[]) => {
    this.data = data;
  };
}

const searchDataController = new SearchDataController();
export default searchDataController;
