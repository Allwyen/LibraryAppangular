import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

const appRoutes:Routes = [
  {path:'addbook',component:AddbookComponent},
  {path:'viewbook',component:ViewbookComponent},
  {path:'addauthor',component:AddauthorComponent},
  {path:'viewauthor',component:ViewauthorComponent}
]

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { ViewauthorComponent } from './viewauthor/viewauthor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddbookComponent,
    ViewbookComponent,
    AddauthorComponent,
    ViewauthorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [NavbarComponent,AppComponent]
})
export class AppModule { }
