import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ActivityComponent} from "../../components/activity/activity.component";
import {Activity} from "../../models/activity";
import {IonDatetime,IonButton,IonIcon,IonFab,IonFabButton,IonContent} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {add} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ActivityComponent, IonFab, IonFabButton, IonContent, IonButton, IonIcon, IonDatetime, RouterLink],
})
export class HomePage implements OnInit{
    constructor() {


    }
    ngOnInit(): void {
      addIcons({add})
    }



  activities:Activity[]=[
    new Activity(1, "GTI", new Date("2012-04-23T08:30:43.511Z"), new Date("2012-04-23T08:45:43.511Z"),
      "string", "red"),new Activity(2, "GTI", new Date("2012-04-23T11:25:43.511Z"), new Date("2012-04-23T18:25:43.511Z"),
      "string", "red"),new Activity(3, "GTI", new Date("2012-04-23T20:25:43.511Z"), new Date("2012-04-23T21:21:43.511Z"),
      "string", "red"),

  ];
  colors = ["Red", "Blue", "White"];
  currentDay=this.activities[0].begin.getTime()
  emptySlot(index:number){
    let emptyPeriod:number;
    if (index==0){

      let midnight:Date=new Date("2012-04-23T00:00:00.511Z")
      emptyPeriod=this.getPeriod(midnight,this.activities[0].begin);
    }
    else {
      //it is the differnce between the beggining of the next activity and the ending of this one in minutes
      emptyPeriod= this.getPeriod(this.activities[index-1].end,this.activities[index].begin);

    }
    //if it is the last activity just get the remaining minues till midnight


    return emptyPeriod;


  }
  lastEmptySlot(){

    let hourMinutes=this.activities[this.activities.length-1].end.getHours()*60;
    let minutes=this.activities[this.activities.length-1].end.getMinutes();
    return  1440-(hourMinutes+minutes)


  }

  private getPeriod (begin:Date,end:Date):number{
    return (end.getTime() -begin.getTime())/(1000*60);

  }
  getDate( date:any){
    debugger
    console.log(date);
  }




}
