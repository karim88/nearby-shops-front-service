import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/layouts/auth/auth.component';
import { AppComponent } from './components/layouts/app/app.component';
import { PublicGuard, ProtectedGuard } from 'ngx-auth';
import {LogoutComponent} from './modules/auth/components/logout/logout.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        canActivate: [PublicGuard],
        loadChildren: './modules/auth/auth.module#AuthModule'
      },
      {
        path: 'logout',
        canActivate: [ProtectedGuard],
        component: LogoutComponent
      }
    ],
  },
  {
    path: 'shops',
    component: AppComponent, // The layout AppComponent
    canActivate: [ProtectedGuard],
    children: [
      {
        path: '',
        loadChildren: './modules/shops/shops.module#ShopsModule',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
