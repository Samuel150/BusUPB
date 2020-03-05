import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  private oldUser: FormGroup;
  constructor(private router: Router,private formBuilder: FormBuilder, private firebaseService:FirebaseService ) {
    this.oldUser = this.formBuilder.group({
      conductor: ['', Validators.required],
      password: ['',Validators.required]
    });
  }

  logIn() {
    let possibleUser = this.firebaseService.getConductorbyKeyValue('conductor', this.oldUser.value.conductor.toString());
    possibleUser.subscribe(
    res => {
      console.log(res)
      if (res.length != 0 && res[0].password === this.oldUser.value.password) {
          this.router.navigate(['inicio']);
      }
    });
  }
  onlyStudent() {
    this.router.navigate(['inicio']);
  }


  ngOnInit() {
  }

}
