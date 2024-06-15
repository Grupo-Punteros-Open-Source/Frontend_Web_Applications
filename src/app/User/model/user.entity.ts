export class User {
  id: number;
  username: string;
  password: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  image_url: string;

  constructor(id: number, username: string, password: string, name: string,
              address: string, phone: string, email: string, imageUrl: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.image_url = imageUrl;
  }
}
