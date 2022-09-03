import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import 'ag-grid-enterprise';
import { MyCellComponent } from './my-cell/my-cell.component';
import { UnderComponent } from './under/under.component';
import { OverComponent } from './over/over.component';
import { MyCustomComponent } from './my-custom/my-custom.component';
import { HelloComponent } from './hello/hello.component';
import { GoogByeComponent } from './goog-bye/goog-bye.component';

@NgModule({
  declarations: [AppComponent, MyCellComponent, UnderComponent, OverComponent, MyCustomComponent, HelloComponent, GoogByeComponent],
  imports: [BrowserModule, AgGridModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
