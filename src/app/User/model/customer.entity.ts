export class Customer {
  id: number;
  user_id: number;
  workshop_id: number;

  constructor(id: number, userId: number, workshopId: number) {
    this.id = id;
    this.user_id = userId;
    this.workshop_id = workshopId;
  }
}
