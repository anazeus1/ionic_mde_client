export class Activity {
  id: number ;
  name: string |number;
  begin: Date;
  end: Date ;
  description: string |number;
  color: string;

    constructor(id: number, name: string | number, begin: Date, end: Date, description: string | number, color: string) {
    this.id=id;
    this.name=name;

    this.begin =begin;
    this.end = end;
    this.description=description;
    this.color=color;

  }
  duration() {
    return (this.end.getTime() - this.begin.getTime()) / (1000 * 60);//from millisecond to minutes

  }
  next(){

    return this.duration()*2;
  }

}
