import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  add(firstNumber:number, secondNumber:number)
  {
    return firstNumber + secondNumber;
  }
  subtract(firstNumber:number, secondNumber:number)
  {
    return firstNumber - secondNumber;
  }
  multiply(firstNumber:number, secondNumber:number)
  {
    return firstNumber * secondNumber;
  }
  divide(firstNumber:number, secondNumber:number)
  {
    return firstNumber / secondNumber;
  }
}
