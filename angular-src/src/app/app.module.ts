import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SantalistComponent } from './components/santalist/santalist.component';
import { RegisterComponent } from './components/register/register.component';
import { SantaService } from './services/santa.service';
import { UtilityService } from './services/utility.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { RulesComponent } from './components/rules/rules.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
{ path: '', component: HomeComponent},
{ path: 'about', component: AboutComponent},
{ path: 'rules', component: RulesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SantalistComponent,
    RegisterComponent,
    AboutComponent,
    RulesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
      )
  ],
  providers: [SantaService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
