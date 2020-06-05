import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "shop", component: ShopComponent },
    { path: "register", component: RegisterComponent },
    // { path: "products/new", component: InsertComponent },
    // { path: "products/:prodID", component: DetailsComponent },
    // { path: "about", component: AboutComponent },
    // { path: "admin", loadChildren: "./admin/admin.module#AdminModule" }, // Lazy Loading
    // { path: "admin", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule) }, // Lazy Loading
    { path: "", redirectTo: "/home", pathMatch: "full" }, // full = exact
    { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
