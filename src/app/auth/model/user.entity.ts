export class User {
    id: string;
    username: string;
    email: string;
    address: string;
    password: string;
    customer: boolean;

    constructor(id: string, username: string, email: string, address: string, password: string, customer: boolean) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.address = address;
        this.password = password;
        this.customer = customer;
    }

}
