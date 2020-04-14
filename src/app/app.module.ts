// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from "@angular/forms";

// KEYCLOAK INITIATE
// import { KeycloakService } from './keycloak.service';
// export function kcFactory(keycloakService: KeycloakService) {
//   return () => keycloakService.init();
// }

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { MemberServiceService } from './member-service.service';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    LoginComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [
    MemberServiceService,
    // KeycloakService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: kcFactory,
    //   deps: [KeycloakService],
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
