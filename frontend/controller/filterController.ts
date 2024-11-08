import { makeAutoObservable } from "mobx";

class FilterController {
  public destination: string = "Todos";
  public sector: string = "Todos";
  public showDelayed: string = "Sim";
  public billedLoad: string = "Sim";
  public crossDocking: string = "Sim";
  public shift: string = "Todos";
  public startDate: Date;
  public endDate: Date;
  public itemsPerPage: string = "25";

  constructor() {
    const today = new Date();
    this.startDate = today;
    this.endDate = today;
    makeAutoObservable(this);
  }

  public setDestination = (value: string) => {
    this.destination = value;
  };

  public setSector = (value: string) => {
    this.sector = value;
  };

  public setShowDelayed = (value: string) => {
    this.showDelayed = value;
  };

  public setBilledLoad = (value: string) => {
    this.billedLoad = value;
  };

  public setCrossDocking = (value: string) => {
    this.crossDocking = value;
  };

  public setShift = (value: string) => {
    this.shift = value;
  };

  public setStartDate = (date: Date) => {
    this.startDate = date;
  };

  public setEndDate = (date: Date) => {
    this.endDate = date;
  };

  public setItemsPerPage = (items: string) => {
    this.itemsPerPage = items;
  };
}

const filterController = new FilterController();
export default filterController;
