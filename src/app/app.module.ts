import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule as AppAuthModule } from './modules/auth/auth.module';
import { ShopsModule } from './modules/shops/shops.module';
import { AuthComponent } from './components/layouts/auth/auth.component';
import { AppComponent as LayoutAppComponent } from './components/layouts/app/app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptors';
import { AuthModule, PROTECTED_FALLBACK_PAGE_URI, PUBLIC_FALLBACK_PAGE_URI, AUTH_SERVICE } from 'ngx-auth';
import { AuthenticationService } from './services/authentication.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LayoutAppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    AppAuthModule,
    ToastrModule.forRoot(),
    AuthModule,
    ShopsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  { provide: PROTECTED_FALLBACK_PAGE_URI, useValue: '/shops/nearby' },
  { provide: PUBLIC_FALLBACK_PAGE_URI, useValue: '/auth/login' },
  { provide: AUTH_SERVICE, useClass: AuthenticationService }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
