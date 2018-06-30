import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepieComponent } from './recepie/recepie.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { RecepieListComponent } from './recepie/recepie-list/recepie-list.component';
import { RecepieDetaliComponent } from './recepie/recepie-detali/recepie-detali.component';
import { RecepieItemComponent } from './recepie/recepie-list/recepie-item/recepie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepieComponent,
    ShopingListComponent,
    RecepieListComponent,
    RecepieDetaliComponent,
    RecepieItemComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
