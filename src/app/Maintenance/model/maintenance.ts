export class Maintenance {
  id: number;
  status: string;
  lastVisitDate: string;
  comment: string;
  invoice_id: number;
  customer_id: number;
  workshop_id: number;
  vehicle_id: number;
  history_id: number;

  constructor(id: number, status: string, lastVisitDate: string, comment: string, invoice_id: number, customer_id: number, workshop_id: number, vehicle_id: number, history_id: number) {
    this.id = id;
    this.status = status;
    this.lastVisitDate = lastVisitDate;
    this.comment = comment;
    this.invoice_id = invoice_id;
    this.customer_id = customer_id;
    this.workshop_id = workshop_id;
    this.vehicle_id = vehicle_id;
    this.history_id = history_id;
  }
}
