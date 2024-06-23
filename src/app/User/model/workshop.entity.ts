export class Workshop {
  id: number;
  user_id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  image_url: string;

  constructor(id: number, user_id: number, name: string, address: string, phone: string, email: string, image_url: string) {
    this.id = id;
    this.user_id = user_id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.image_url = image_url;
  }
}