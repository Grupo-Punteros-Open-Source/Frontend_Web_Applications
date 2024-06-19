export class CustomerVehicleEntity {
    id: number;
    plate: string;
    make: string;
    model: string;
    year: number;
    color: string;
    image_url: string;
    mileage: number;

    constructor(idVehicle: number, plate: string, make: string, model: string, year: number, color: string, image_url: string, mileage: number) {
        this.id = idVehicle;
        this.plate = plate;
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.image_url = image_url;
        this.mileage = mileage;
    }
}
