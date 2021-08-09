import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { EditpostComponent } from './components/editpost/editpost.component';
import { ViewpostComponent } from './components/viewpost/viewpost.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './services/common.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreatepostComponent,
    EditpostComponent,
    ViewpostComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
   AppRoutingModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
