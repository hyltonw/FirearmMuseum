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
    HydratedFirearmContainerComponent
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
