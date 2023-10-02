import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'templateform', component: TemplateDrivenFormComponent },
{ path: '**', component:NotFoundComponent },
{ path: '**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
