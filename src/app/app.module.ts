import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OnsalePipe } from './onsale.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { HighLightDirective } from './Directives/high-light.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { HttpGetpageComponent } from './http-getpage/http-getpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OnsalePipe,
    NotFoundComponent,
    HighLightDirective,
    TemplateDrivenFormComponent,
    ReactiveformComponent,
    HttpGetpageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
