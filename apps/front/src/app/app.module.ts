import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { Teste1Component } from './teste1/teste1.component';
import { NavComponent } from './nav/nav.component';
import { Teste2Component } from './teste2/teste2.component';

@NgModule({
  declarations: [AppComponent, Teste1Component, NavComponent, Teste2Component],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
