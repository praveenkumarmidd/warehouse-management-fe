import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CreateBoxComponent } from './components/create-box/create-box.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', component: ListComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'create-box', component: CreateBoxComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
