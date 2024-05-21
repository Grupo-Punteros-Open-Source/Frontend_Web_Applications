export class Customer {
  id: number;
  name: string;
  workshopId: number;
  address: string;
  phone: string;
  email: string;
  image_url: string;

  constructor(id: number, name: string, workshopId: number, address: string, phone: string, email: string, image_url: string) {
    this.id = id;
    this.name = name;
    this.workshopId = workshopId;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.image_url = image_url;
  }
}
