import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/apiCall/http-service.service';

@Component({
  selector: 'app-api-demo',
  templateUrl: './api-demo.component.html',
  styleUrls: ['./api-demo.component.css']
})
export class ApiDemoComponent implements OnInit {

  records:any = [];
  constructor(private __httpService: HttpServiceService, private _router:Router) { }

  ngOnInit(): void {
  }

  getData()
  {
    this.__httpService.getRecords().subscribe(Response => {
      this.records = Response;
      console.log(Response);
    });
  }
}
