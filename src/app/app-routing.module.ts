import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoriesComponent } from './homepage/categories/categories.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductcategoryComponent } from './homepage/productcategory/productcategory.component';

const routes: Routes = [
  {path:"",component:HomepageComponent,
children:[
  {path:"",component:CategoriesComponent},
  {path:"profile",component:ProfileComponent},
  { path: 'products/:category', component: ProductcategoryComponent }


]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
