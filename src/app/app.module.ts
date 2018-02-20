import { InvocationService } from './services/invocation.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TestInvocationComponent } from './test-invocation/test-invocation.component';


@NgModule({
  declarations: [
    AppComponent,
    TestInvocationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [InvocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
