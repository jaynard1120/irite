import { AdminHomeComponent } from './Components/Admin/admin-home/admin-home.component';
import { LibraryComponent } from './Components/public/library/library.component';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './Components/Auth/admin-login/admin-login.component';
import { HomeComponent } from './Components/public/home/home.component';
import { IndexComponent } from './Components/public/index/index.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStoryComponent } from './Components/public/create-story/create-story.component';
import { PublishedComponent } from './Components/public/published/published.component';

const routes: Routes = [
  {path: "", component: IndexComponent, pathMatch: "full"},
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "register", component: RegisterComponent, pathMatch: "full"},
  {path: "admin", component: AdminHomeComponent, pathMatch: "full"},
  {path: "home", component: HomeComponent, pathMatch:"full"},
  {path: "create-stories", component: CreateStoryComponent, pathMatch:"full"},
  {path: "your_published_stories", component: PublishedComponent, pathMatch:"full"},
  {path: "admin", component: AdminLoginComponent, pathMatch:"full"},
  {path: "library", component: LibraryComponent, pathMatch:"full"},
  {path: "*", component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
