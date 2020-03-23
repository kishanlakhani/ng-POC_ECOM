import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products;
  isClicked=false;
  constructor( private angularFireDatabase: AngularFireDatabase,private productData:ProductService) { }

  ngOnInit(): void {
    this.productData.getProductDatafromFirebase().subscribe(data=>this.products=data);
    console.log(this.products);
  }

  selectedColumn(id){
    this.isClicked=true;
    document.getElementById(id).setAttribute('class','selected');
  }
  deselectColumn(id){
    this.isClicked=false;
    document.getElementById(id).setAttribute('class','tab');
  }
}
