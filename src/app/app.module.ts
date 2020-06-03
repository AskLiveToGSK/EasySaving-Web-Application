
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// API Sdk Services
import { ApiModule } from './shared/sdk/api.module';
import { ApiConfiguration } from './shared/sdk/api-configuration';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule.forRoot(new ApiConfiguration ()),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
