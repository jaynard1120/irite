import { PublishedAdminComponent } from './Components/Admin/published-admin/published-admin.component';
import { DeclinedComponent } from './Components/Admin/declined/declined.component';
import { StoriesComponent } from './Components/Admin/stories/stories.component';
import { RouteguardGuard } from './routeguard.guard';
import { AdminHomeComponent } from './Components/Admin/admin-home/admin-home.component';
import { LibraryComponent } from './Components/public/library/library.component';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './Components/Auth/admin-login/admin-login.component';
import { HomeComponent } from './Components/public/home/home.component';
import { IndexComponent } from './Components/public/index/index.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { CreateStoryComponent } from './Components/public/create-story/create-story.component';
import { PublishedComponent } from './Components/public/published/published.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {path: "", component: IndexComponent, pathMatch: "full"},
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "register", component: RegisterComponent, pathMatch: "full"},
  {path: "admin/dashboard", component: AdminHomeComponent, pathMatch: "full" ,canActivate:[AdminGuard]},
  {path: "admin/stories", component: StoriesComponent, pathMatch: "full" ,canActivate:[AdminGuard]},
  {path: "admin/published", component: PublishedAdminComponent, pathMatch: "full" ,canActivate:[AdminGuard]},
  {path: "admin/declined", component: DeclinedComponent, pathMatch: "full" ,canActivate:[AdminGuard]},
  {path: "home", component: HomeComponent, pathMatch:"full" , canActivate:[RouteguardGuard]},
  {path: "create-stories", component: CreateStoryComponent, pathMatch:"full", canActivate:[RouteguardGuard]},
  {path: "your_published_stories", component: PublishedComponent, pathMatch:"full",  canActivate:[RouteguardGuard]},
  // {path: "admin", component: AdminLoginComponent, pathMatch:"full"},
  {path: "library", component: LibraryComponent, pathMatch:"full", canActivate:[RouteguardGuard]},
  {path: "*", component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
