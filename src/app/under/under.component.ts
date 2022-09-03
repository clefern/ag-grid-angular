import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-under',
  template: ` <span style="color: red">under {{ value }}</span> `,
  styles: [],
})
export class UnderComponent implements OnInit {
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
