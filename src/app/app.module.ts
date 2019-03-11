import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { HttpClientModule} from '@angular/common/http';
import { FirstComponent } from './first/first.component';
import { GooglePlacesDirective } from './google-places.directive';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    FirstComponent,
    GooglePlacesDirective,
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
