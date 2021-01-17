import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/localStorage/local-storage.service'
import * as _ from 'lodash';
import { Router } from '@angular/router';

interface Alert {
  type: string;
  message: string;
}


const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert',
},
  {
  type: 'danger',
  message: 'This is a danger alert',
}
];

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})



export class BasicFormComponent implements OnInit {
  
  alerts: Alert[] = [];
  storedData:any;
  selectedCol:string = '';
  selectedType:any = '';
  
  basicForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
    date: new FormControl('', [Validators.required])
  });

  constructor(private _localStorageService: LocalStorageService,  private _router:Router) { }

  ngOnInit(): void {
    this.selectedCol = 'firstName'
    this.selectedType = 'asc'
    this.alerts = [];
  }

  addUser(){
    this.close(this.alerts[0]);
    if(this.basicForm.valid) 
    { 
      this._localStorageService.saveUserToLocal(this.basicForm.get('firstName')?.value, this.basicForm.get('lastName')?.value, this.basicForm.get('email')?.value, this.basicForm.get('date')?.value);
      this.alerts.push({type: 'success', message: 'User Added!'});
      this.basicForm.reset();
    }
    else
    {
      this.alerts.push({type: 'danger', message: 'Inputs not valid!!'});
      this.basicForm.reset();
    } 
    this.storedData = this._localStorageService.getUserDetails();    
  }

  sortTable()
  {
    this.storedData = _.orderBy(this.storedData, [this.selectedCol], [this.selectedType]);
  }

  close(alert: Alert) {
    this.alerts = [];
  }

}
