import { Component } from '@angular/core';
import { MathService } from '../math-service/math-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  first: number;
  second: number;
  result: number;

  constructor(private mathService: MathService) {
  }

  performMultiplication(): void {
    this.mathService.multiplyNumbers(this.first, this.second).subscribe((multipliedValue: number) => {
      this.result = multipliedValue;
    });
  }

  clearValues(): void {
    this.result = null;
    this.first = null;
    this.second = null;
  }

}
