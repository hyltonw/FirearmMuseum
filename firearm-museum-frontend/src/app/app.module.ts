import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirearmComponent } from './model-components/firearm/firearm.component';
import { FirearmContainerComponent } from './containers/firearm-container/firearm-container.component';
import { AddFirearmComponent } from './adders/add-firearm/add-firearm.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CaliberComponent } from './model-components/caliber/caliber.component';
import { AddCaliberComponent } from './adders/add-caliber/add-caliber.component';
import { CaliberContainerComponent } from './containers/caliber-container/caliber-container.component';
import { HydratedFirearmComponent } from './model-components/hydrated-firearm/hydrated-firearm.component';
import { HydratedFirearmContainerComponent } from './containers/hydrated-firearm-container/hydrated-firearm-container.component';
import { ActionTypeComponent } from './model-components/action-type/action-type.component';
import { FirearmTypeComponent } from './model-components/firearm-type/firearm-type.component';
import { ManufacturerComponent } from './model-components/manufacturer/manufacturer.component';
import { ActionTypeContainerComponent } from './containers/action-type-container/action-type-container.component';
import { FirearmTypeContainerComponent } from './containers/firearm-type-container/firearm-type-container.component';
import { ManufacturerContainerComponent } from './containers/manufacturer-container/manufacturer-container.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { AddpageComponent } from './views/addpage/addpage.component';
import { NavigationComponent } from './views/navigation/navigation.component';
import { AddManufacturerComponent } from './adders/add-manufacturer/add-manufacturer.component';
import { RemoveManufacturerComponent } from './removers/remove-manufacturer/remove-manufacturer.component';
import { EditManufacturerComponent } from './editors/edit-manufacturer/edit-manufacturer.component';
import { AddActionTypeComponent } from './adders/add-action-type/add-action-type.component';
import { AddFirearmTypeComponent } from './adders/add-firearm-type/add-firearm-type.component';
import { AddHydratedFirearmComponent } from './adders/add-hydrated-firearm/add-hydrated-firearm.component';

@NgModule({
  declarations: [
    AppComponent,
    FirearmComponent,
    FirearmContainerComponent,
    AddFirearmComponent,
    CaliberComponent,
    AddCaliberComponent,
    CaliberContainerComponent,
    HydratedFirearmComponent,
    HydratedFirearmContainerComponent,
    ActionTypeComponent,
    FirearmTypeComponent,
    ManufacturerComponent,
    ActionTypeContainerComponent,
    FirearmTypeContainerComponent,
    ManufacturerContainerComponent,
    HomepageComponent,
    AddpageComponent,
    NavigationComponent,
    AddManufacturerComponent,
    RemoveManufacturerComponent,
    EditManufacturerComponent,
    AddActionTypeComponent,
    AddFirearmTypeComponent,
    AddHydratedFirearmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
