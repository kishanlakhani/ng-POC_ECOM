import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'product',
    loadChildren:()=>import('./pages/product/product.module').then(p=>p.ProductModule)
  },
  {
    path:'',
    redirectTo:'product',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
