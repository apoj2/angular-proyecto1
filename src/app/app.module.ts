import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Color1Component } from './color1/color1.component';
import { Color2Component } from './color2/color2.component';
import { Color3Component } from './color3/color3.component';
import { Color4Component } from './color4/color4.component';
import { Color5Component } from './color5/color5.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    Color1Component,
    Color2Component,
    Color3Component,
    Color4Component,
    Color5Component,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
