import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamService {

  id: string;
  order_number: string;
  
  constructor() { }
}