import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFirearmComponent } from './add-firearm/add-firearm.component';
import { FirearmContainerComponent } from './firearm-container/firearm-container.component';

const routes: Routes = [{path: "add", component: AddFirearmComponent},
                        {path: "", component: FirearmContainerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
