import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-over',
  template: ` <span style="color: green">over {{ value }}</span> `,
  styles: [],
})
export class OverComponent implements OnInit {
  value: any;
  constructor() {}

  ngOnInit(): void {}

  agInit(params: ICellRendererParams): void {
    this.value = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
