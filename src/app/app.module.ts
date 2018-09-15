import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { AuthModule as AppAuthModule } from './modules/auth/auth.module';
import { ShopsModule } from './modules/shops/shops.module';
import { AuthComponent } from './components/layouts/auth/auth.component';
import { AppComponent as LayoutAppComponent } from './components/layouts/app/app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptors';
import {ProtectedGuard, PublicGuard, AuthModule, PROTECTED_FALLBACK_PAGE_URI, PUBLIC_FALLBACK_PAGE_URI, AUTH_SERVICE} from 'ngx-auth';
import {AuthenticationService} from './services/authentication.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    AuthComponent,
    LayoutAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    AppAuthModule,
    AuthModule,
    ShopsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
    { provide: PROTECTED_FALLBACK_PAGE_URI, useValue: '/' },
    { provide: PUBLIC_FALLBACK_PAGE_URI, useValue: '/login' },
    { provide: AUTH_SERVICE, useClass: AuthenticationService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
