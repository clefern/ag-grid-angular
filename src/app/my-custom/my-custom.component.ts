import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp, IHeaderAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IHeaderParams } from 'ag-grid-community';

export interface MyParams {
  name: string;
}

@Component({
  selector: 'app-my-custom',
  template: `custom {{ name }}`,
  styles: [],
})
export class MyCustomComponent implements OnInit, IHeaderAngularComp {
  name!: string;

  constructor() {}

  ngOnInit(): void {}

  agInit(params: IHeaderParams & MyParams): void {
    this.name = params.name;
  }

  refresh(params: IHeaderParams): boolean {
    return false;
  }
}
