import { AdminComponent } from './pages/admin/admin.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { LoginComponent } from "./pages/login/login.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent },
  {path: "contact-us", component: ContactUsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
