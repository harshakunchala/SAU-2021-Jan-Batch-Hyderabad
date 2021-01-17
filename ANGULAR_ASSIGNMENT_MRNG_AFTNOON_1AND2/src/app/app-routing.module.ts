import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './Components/basic-form/basic-form.component';
import { CalculatorComponent } from './Components/calculator/calculator.component';
import { ApiDemoComponent } from './Components/api-demo/api-demo.component';
import { HomeComponent } from './Components/home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'calculator', component:  CalculatorComponent},
  { path: 'basicForm', component: BasicFormComponent },
  { path: 'apiDemo', component: ApiDemoComponent},
  { path: '**', component: BasicFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
