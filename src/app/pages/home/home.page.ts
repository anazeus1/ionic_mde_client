import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCol,
  IonContent, IonDatetime,
  IonHeader,
  IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel,
  IonList, IonRow,
  IonTabBar,
  IonTabButton, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ActivityComponent} from "../../components/activity/activity.component";
import {Activity} from "../../models/activity";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonTabBar, IonTabButton, IonIcon, IonList, IonRow, IonCol, IonItemGroup, IonItemDivider, IonLabel, IonItem, IonText, IonButton, IonDatetime, ActivityComponent]
})
export class HomePage implements OnInit {
  activities:Activity[]=[
    new Activity(1, "GTI", new Date("2012-04-23T08:30:43.511Z"), new Date("2012-04-23T08:45:43.511Z"),
      "string", "red"),new Activity(2, "GTI", new Date("2012-04-23T11:25:43.511Z"), new Date("2012-04-23T18:25:43.511Z"),
      "string", "red"),new Activity(3, "GTI", new Date("2012-04-23T20:25:43.511Z"), new Date("2012-04-23T21:21:43.511Z"),
      "string", "red"),

  ];
  colors = ["Red", "Blue", "White"];
  currentDay=this.activities[0].begin.getTime()
  emptyslot(index:number){
    let emptyPeriod:number;
    if(index<this.activities.length-1){
      //it is the differnce between the beggining of the next activity and the ending of this one in minutes
      emptyPeriod= (this.activities[index+1].begin.getTime()-this.activities[index].end.getTime())/(1000*60);

    }
    //if it is the last activity just get the remaining minues till midnight

    else{
      debugger;

      let hourMinutes=this.activities[index].end.getHours()*60;
      let minutes=this.activities[index].end.getMinutes();
      emptyPeriod= 1440-(hourMinutes+minutes)
    }
    debugger;
    return emptyPeriod;


  }
  constructor() { }

  ngOnInit() {
    this.activities.length
  }

}
