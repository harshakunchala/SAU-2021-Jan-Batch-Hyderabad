import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculatorService } from "../../services/calculator/calculator.service"
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {


  constructor(private _calculatorService:CalculatorService, private _router:Router){


  }

  ngOnInit(): void {
  }
  title = 'Calculator';
  firstNumber:number = 0;
  secondNumber:number = 0;
  result:number = 0;

  gotoForm()
  {
    this._router.navigate(['basicForm'])
  }

  addition()
  {
    this.result = this._calculatorService.add(this.firstNumber, this.secondNumber);
  }
  subtract()
  {
    this.result = this._calculatorService.subtract(this.firstNumber, this.secondNumber);
  }
  multiply()
  {
    this.result = this._calculatorService.multiply(this.firstNumber, this.secondNumber);
  }
  divide()
  {
    this.result = this._calculatorService.divide(this.firstNumber, this.secondNumber);
  }
}
