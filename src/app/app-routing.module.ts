import { AppComponent } from './app.component';
import { AdminLoginComponent } from './Components/Auth/admin-login/admin-login.component';
import { HomeComponent } from './Components/public/home/home.component';
import { IndexComponent } from './Components/public/index/index.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", component: IndexComponent, pathMatch: "full"},
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "register", component: RegisterComponent, pathMatch: "full"},
  {path: "home", component: HomeComponent, pathMatch:"full"},
  // {path: "home", component: AppComponent, pathMatch:"full"},
  {path: "admin", component: AdminLoginComponent, pathMatch:"full"},
  {path: "*", component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
