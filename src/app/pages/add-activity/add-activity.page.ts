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

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.page.html',
  styleUrls: ['./add-activity.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonDatetimeButton, IonNav, IonButtons, IonBackButton, IonDatetime, IonModal, IonButton, IonItem, IonLabel]
})
export class AddActivityPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  add(name: string | number | null | undefined, description: string | number | null | undefined):void {
    console.log("clicked"+name+description);
  }
  log(date:IonDatetimeButton){
    debugger
    console.log(date.datetime);
  }

}
