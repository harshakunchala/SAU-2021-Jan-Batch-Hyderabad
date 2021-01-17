import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  userArray:any = [];
  data:any = ''
  saveUserToLocal(firstName:string, lastName:string, email:string, date:string)
  {
    this.userArray.push({'firstName' : firstName, 'lastName' : lastName, 'email' : email, 'date' : date});
    localStorage.setItem('newUser', JSON.stringify(this.userArray));
  }
  getUserDetails()
  {
    this.data = localStorage.getItem('newUser');
    if(this.data != null)
    {
      console.log(JSON.parse(this.data));
      return JSON.parse(this.data);
    }
    else
      console.log('No data available!');
  }
}
