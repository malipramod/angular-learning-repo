import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicHighLighDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHightlightDirective } from './better-highlight/better-hightlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighLighDirective,
    BetterHightlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
