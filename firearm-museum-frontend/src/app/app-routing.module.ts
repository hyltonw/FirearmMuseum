import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFirearmComponent } from './adders/add-firearm/add-firearm.component';
import { CaliberContainerComponent } from './containers/caliber-container/caliber-container.component';
import { FirearmContainerComponent } from './containers/firearm-container/firearm-container.component';

const routes: Routes = [{path: "firearm/add", component: AddFirearmComponent},
                        {path: "firearms", component: FirearmContainerComponent},
                        {path: "caliber", component: CaliberContainerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
