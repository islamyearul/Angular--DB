import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { PersonsComponent } from './persons/persons.component';



const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'persons', component: PersonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
