import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { MyParams } from '../my-custom/my-custom.component';

export class GreetTS implements ICellRendererComp {
  eGui!: HTMLElement;
  init(params: ICellRendererParams & MyParams) {
    this.eGui = document.createElement('span');
    this.eGui.innerHTML = `GreetTS ${params.name}`;
  }
  getGui(): HTMLElement {
    return this.eGui;
  }
  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
