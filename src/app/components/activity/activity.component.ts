import {Component, Input, OnInit} from '@angular/core';
import {Activity} from "../../models/activity";
import{NgForOf} from "@angular/common";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-activity',
  standalone:true,
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  imports: [NgForOf, IonicModule]
})
export class ActivityComponent  implements OnInit {
  @Input() activity!:Activity;
  @Input() activity2!:Activity;
  constructor() { }
  emptySlot(){

    debugger;
    return this.activity.end.getTime()-this.activity2.begin.getTime()/(1000*60);
  }

  ngOnInit() {}

}
