import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent}, 
  {path: 'signup', component: SignupComponent},
  {path : 'home', component : HomeComponent, canActivate: [AuthGuard] }, 
  {path : '', redirectTo : '/login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
