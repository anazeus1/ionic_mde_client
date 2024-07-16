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

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonTabBar, IonTabButton, IonIcon, IonList, IonRow, IonCol, IonItemGroup, IonItemDivider, IonLabel, IonItem, IonText, IonButton, IonDatetime]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
