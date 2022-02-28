import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefComponent } from './chef/chef.component';
import { Chef2Component } from './chef2/chef2.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SampleComponent } from './sample/sample.component';
import { ServerComponent } from './server/server.component';

const routes: Routes = [
  {path:"product", component:ProductComponent},
  {path:"", component:HomeComponent},
  {path:"sample", component:SampleComponent},
  {path:"server", component:ServerComponent},
  {path:"chef", component:ChefComponent},
  {path:"chef2", component:Chef2Component}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
