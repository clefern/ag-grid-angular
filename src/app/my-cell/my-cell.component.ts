import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

export interface MyCellParams {
  buttonText: string;
}

@Component({
  selector: 'app-my-cell',
  template: `
    <button (click)="onAthleteClick($event)">{{ buttonText }}</button> #
    {{ value }}
  `,
  styles: [],
})
export class MyCellComponent implements OnInit, ICellRendererAngularComp {
  value: any;
  buttonText!: string;
  constructor() {}

  ngOnInit(): void {}

  agInit(params: ICellRendererParams & MyCellParams): void {
    this.value = params.value;
    this.buttonText = params.buttonText;
  }

  refresh(params: ICellRendererParams & MyCellParams): boolean {
    return false;
  }

  onAthleteClick(event: any) {
    alert(this.value);
  }
}
