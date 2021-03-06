import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'
import { SecondComponent } from './second/second.component'
import { FirstComponent } from './first/first.component'

const routes: Routes = [
   {path: '', component: FirstComponent, pathMatch: 'full',redirectTo: ''},  
   {path: 'city/:cty', component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
   
}
