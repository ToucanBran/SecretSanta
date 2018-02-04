import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SantalistComponent } from './components/santalist/santalist.component';
import { RegisterComponent } from './components/register/register.component';
import { SantaService } from './services/santa.service';
import { UtilityService } from './services/utility.service';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SantalistComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SantaService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
