export class History {
  id: number;
  service_date: string;
  description: string;
  cost: number;
  mileage: number;

  constructor(id: number, service_date: string, description: string, cost: number, mileage: number) {
    this.id = id;
    this.service_date = service_date;
    this.description = description;
    this.cost = cost;
    this.mileage = mileage;
  }
}
