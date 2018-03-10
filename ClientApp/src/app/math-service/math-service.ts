import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MathService {

  private url: string;
  private client: HttpClient;
  public result: number;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
    this.client = http;
  }

  multiplyNumbers(first: number, second: number): Observable<number> {
    let params = new HttpParams().set('firstNumber', first.toString()).set('secondNumber', second.toString());

    return this.client.get<number>(this.url + 'api/Math/Multiply', { params });

    //this.client.get<number>(this.url + 'api/Math/Multiply', { params }).subscribe(result => {
    //  this.result = result;
    //  return result;
    //}, error => console.error(error));

  }

}
