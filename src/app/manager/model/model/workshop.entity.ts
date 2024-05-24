export class Workshop {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  logo_url: string;
  business_hours: string;

  constructor(id: number, name: string, address: string, phone: string, email: string, logo_url: string, business_hours: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.logo_url = logo_url;
    this.business_hours = business_hours;
  }
}
