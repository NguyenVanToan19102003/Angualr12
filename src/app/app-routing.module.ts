import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { HttpGetpageComponent } from './http-getpage/http-getpage.component';
import { HttppostComponent } from './httppost/httppost.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'templateform', component: TemplateDrivenFormComponent },
{ path: 'reactiveform', component: ReactiveformComponent },
{ path: '', component:HomeComponent },
{ path: 'httpgetpage', component:HttpGetpageComponent },
{ path: 'httppost', component:HttppostComponent },
{ path: '**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
