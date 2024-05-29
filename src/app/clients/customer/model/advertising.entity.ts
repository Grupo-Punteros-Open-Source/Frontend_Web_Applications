export class Advertising {

  id: string;
  name:string;
  workshopId: number;
  image_url: string;
  slogan: string;
  Msg1: string;
  Msg2: string;
  Msg3: string;

  constructor(id: string, name:string,workshopId: number, image_url: string, slogan: string, Msg1: string, Msg2: string, Msg3: string) {
    this.id = id;
    this.name= name;
    this.workshopId = workshopId;
    this.image_url = image_url;
    this.slogan = slogan;
    this.Msg1 = Msg1;
    this.Msg2 = Msg2;
    this.Msg3 = Msg3
  }
}
