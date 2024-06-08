export class Vehicle {
  id: string;
  customerId: number;
  plate: string;
  make: string;
  model: string;
  year: number;
  color: string;
  imageUrl: string;
  mileage: number;
  status: string;
  lastVisitDate: string;
  comments: string;

  constructor(id: string, customerId: number, plate: string, make: string, model: string, year: number,
              color: string, imageUrl: string, mileage: number, status: string,
              lastVisitDate: string, comments: string) {
    this.id = id;
    this.customerId = customerId;
    this.plate = plate;
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.imageUrl = imageUrl;
    this.mileage = mileage;
    this.status = status;
    this.lastVisitDate = lastVisitDate;
    this.comments = comments;
  }
}
