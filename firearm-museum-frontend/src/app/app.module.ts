import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirearmComponent } from './firearm/firearm.component';
import { FirearmContainerComponent } from './firearm-container/firearm-container.component';
import { AddFirearmComponent } from './add-firearm/add-firearm.component';

@NgModule({
  declarations: [
    AppComponent,
    FirearmComponent,
    FirearmContainerComponent,
    AddFirearmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
