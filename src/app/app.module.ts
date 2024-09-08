import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/ui/header/header.module';
import { FooterModule } from './shared/ui/footer/footer.module';
import { NavModule } from './shared/ui/nav/nav.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from './shared/ui/loader/loader.module';
import { ConfirmModalModule } from './shared/ui/confirm-modal/confirm-modal.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    NavModule,
    FontAwesomeModule,
    HttpClientModule,
    LoaderModule,
    ConfirmModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
