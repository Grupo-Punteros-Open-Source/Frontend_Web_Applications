export class Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
    image_url: string;
    workshopId: number;

    constructor(id: number, name: string, quantity: number, price: number, image_url: string, workshopId: number) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.image_url = image_url;
        this.workshopId = workshopId;
    }
}