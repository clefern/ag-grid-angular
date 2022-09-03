import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { MyParams } from '../my-custom/my-custom.component';

@Component({
  selector: 'app-hello',
  template: `hello {{ name }} {{ value }}`,
  styles: [],
})
export class HelloComponent implements ICellRendererAngularComp {
  name!: string;
  value!: any;

  agInit(params: ICellRendererParams & MyParams): void {
    this.name = params.name;
    this.value = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
