import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  // modules go in here
  imports: [
    BrowserModule,
  ],
  // all Components go here
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
