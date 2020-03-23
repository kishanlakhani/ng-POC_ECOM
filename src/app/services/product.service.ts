import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private angularFireDatabase: AngularFireDatabase) { }

  getProductDatafromFirebase(){
    return this.angularFireDatabase.list('/product').valueChanges()
  }
}
