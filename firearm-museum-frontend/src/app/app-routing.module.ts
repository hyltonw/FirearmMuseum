import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFirearmComponent } from './adders/add-firearm/add-firearm.component';
import { CaliberContainerComponent } from './containers/caliber-container/caliber-container.component';
import { FirearmContainerComponent } from './containers/firearm-container/firearm-container.component';
import { HydratedFirearmContainerComponent } from './containers/hydrated-firearm-container/hydrated-firearm-container.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HydratedFirearmComponent } from './model-components/hydrated-firearm/hydrated-firearm.component';

const routes: Routes = [{path: "", component: HomepageComponent},
                        {path: "firearm/add", component: AddFirearmComponent},
                        {path: "firearms", component: FirearmContainerComponent},
                        {path: "caliber", component: CaliberContainerComponent},
                        {path: "hydratedfirearms", component: HydratedFirearmContainerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
