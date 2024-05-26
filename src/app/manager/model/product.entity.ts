export class Product {
    id:string;
    name: string;
    quantity: number;
    price: number;
    description:string;
    image_url: string;
    workshopId: number;

    constructor(productId: string, name: string, quantity: number, price: number, description: string, image_url: string, workshopId: number) {
        this.id = productId;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.description = description;
        this.image_url = image_url;
        this.workshopId = workshopId;
    }



}
