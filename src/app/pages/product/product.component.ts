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
  tabClicked=false;
  listview=false;
  selectedProduct={"id":1,"about" : " Free Shipping on Every Order. Refurbished Samsung Guru Music 2 Mobile Phone Gold (Color May Vary)",
  "image" : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTyctYunhkdXx_Z5Y1fc8eO1IdRIJEQvTKOU8flEfVbRXtabkQHsLVsgqjALmiNiZIMO3FAJuuS1RjpjypUU0ao0IZGArDsFvJkNTxRbMWX1GKdURdK0Rm1&usqp=CAE",
  "price" : 15999,
  "sallerUrl" : "https://www.google.com/url?q=https://www.clubfactory.com/amp/item-PID-10223753.html%3Fcountry%3Din%26language%3Den%26utm_source%3Dgoogle%26utm_medium%3Dgmc-lp%26utm_term%3DEMA010223753N%26src%3Dad%26from%3Dlandingpage%26utm_content%3D61006155&sa=U&ved=0ahUKEwjLiN23vbDoAhXDcn0KHSRqDUAQii8ICw&usg=AOvVaw1Wt-AkEeJS4g7vRn94aM7Z",
  "title" : "Feature Phones, Refurbished Samsung Guru Music 2 Mobile Phone Gold (Color May Vary)"};
  constructor( private angularFireDatabase: AngularFireDatabase,private productData:ProductService) { }

  ngOnInit(): void {
    this.productData.getProductDatafromFirebase().subscribe(data=>{
      this.products=data
    },
    err=>console.log(err),
    ()=>console.log(this.products));
  }

  selectedColumn(id){
    this.isClicked=true;
    console.log(this.isClicked);
    document.getElementById(id).setAttribute('class','selected');
  }
  selectedtab(id){
    document.getElementById(id).setAttribute('class','column container tabselected');
  }
  deselectColumn(id){
    this.isClicked=false;
    document.getElementById(id).setAttribute('class','list');
  }
  deselectedtab(id){
    document.getElementById(id).setAttribute('class','column container tabnotselected');
  }
}
