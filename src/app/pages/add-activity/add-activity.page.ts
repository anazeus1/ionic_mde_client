import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton, IonButton,
  IonButtons,
  IonContent, IonDatetime,
  IonDatetimeButton,
  IonHeader,
  IonInput, IonItem, IonLabel, IonModal,
  IonNav,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Activity} from "../../models/activity";

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.page.html',
  styleUrls: ['./add-activity.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonDatetimeButton, IonNav, IonButtons, IonBackButton, IonDatetime, IonModal, IonButton, IonItem, IonLabel]
})
export class AddActivityPage implements OnInit {

  beginTime!:Date;
  endTime!:Date;
  color="green";
  constructor() { }

  ngOnInit() {
  }

  add(name: string|number, description: string|number):void {
    let a=new Activity(1,name,this.beginTime,this.endTime,description,this.color)
    console.log(a);
  }
  checkEndTime(time: any){
    debugger
    this.endTime=time;
  }
  checkBeginTime(time: any){
    debugger
    this.beginTime=time;
  }

}
