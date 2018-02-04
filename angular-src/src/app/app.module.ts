import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SantalistComponent } from './components/santalist/santalist.component';
import { RegisterComponent } from './components/register/register.component';
import { SantaService } from './services/santa.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SantalistComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SantaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
