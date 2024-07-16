import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonButton, IonCard, IonCheckbox,
  IonContent,
  IonHeader, IonIcon,
  IonInput,
  IonItem,
  IonLabel, IonNote,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {FormControl,FormGroup,ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonItem, IonInput, IonButton, ReactiveFormsModule, IonLabel, IonCard, IonCheckbox, IonIcon, IonNote]
})
export class LoginPage  {

  loginForm=new FormGroup({
    username:new FormControl(""),
    password:new FormControl(""),

  });

  constructor() {
  }
  checkLogin(){
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
  }




}

