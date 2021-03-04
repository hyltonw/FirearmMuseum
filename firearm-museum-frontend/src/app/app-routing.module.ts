import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFirearmComponent } from './adders/add-firearm/add-firearm.component';
import { CaliberContainerComponent } from './containers/caliber-container/caliber-container.component';
import { FirearmContainerComponent } from './containers/firearm-container/firearm-container.component';
import { HydratedFirearmContainerComponent } from './containers/hydrated-firearm-container/hydrated-firearm-container.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { HydratedFirearmComponent } from './model-components/hydrated-firearm/hydrated-firearm.component';
import { ActionTypeComponent } from './model-components/action-type/action-type.component';
import { ActionTypeContainerComponent } from './containers/action-type-container/action-type-container.component';
import { FirearmTypeContainerComponent } from './containers/firearm-type-container/firearm-type-container.component';
import { ManufacturerComponent } from './model-components/manufacturer/manufacturer.component';
import { ManufacturerContainerComponent } from './containers/manufacturer-container/manufacturer-container.component';
import { AddpageComponent } from './views/addpage/addpage.component';

const routes: Routes = [{path: "", component: HomepageComponent},
                        {path: "firearm/add", component: AddFirearmComponent},
                        {path: "firearms", component: FirearmContainerComponent},
                        {path: "caliber", component: CaliberContainerComponent},
                        {path: "hydratedfirearm", component: HydratedFirearmContainerComponent},
                        {path: "actiontype", component: ActionTypeContainerComponent},
                        {path: "firearmtype", component: FirearmTypeContainerComponent},
                        {path: "manufacturer", component: ManufacturerContainerComponent},
                        {path : "add", component: AddpageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
