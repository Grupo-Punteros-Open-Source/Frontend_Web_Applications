export class Advertising {
  id: number;
  comName:string;
  comImage:string;
  workshopId: number;
  image_url: string;
  slogan: string;
  priceMsg: string;
  disMsg: string;
  repairMsg: string;

  constructor(id: number, comName:string,comImage:string ,workshopId: number, image_url: string, slogan: string, priceMsg: string, disMsg: string,repairMsg: string) {
    this.id = id;
    this.comName= comName;
    this.comImage = comImage;
    this.workshopId = workshopId;
    this.image_url = image_url;
    this.slogan = slogan;
    this.priceMsg = priceMsg;
    this.disMsg = disMsg;
    this.repairMsg = repairMsg
  }
}
