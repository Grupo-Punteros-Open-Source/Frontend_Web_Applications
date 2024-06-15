export class Detail {
  id: number;
  description: string;
  amount: number;
  maintenance_id: number;

  constructor(id: number, description: string, amount: number, maintenance_id: number) {
    this.id = id;
    this.description = description;
    this.amount = amount;
    this.maintenance_id = maintenance_id;
  }
}
