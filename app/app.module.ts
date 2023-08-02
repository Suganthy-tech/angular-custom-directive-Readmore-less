import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { basicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { betterHighlightDirective } from './better-highlight/better-highlight.directive';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
                AppComponent, 
                HelloComponent,
                basicHighlightDirective,
                betterHighlightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
