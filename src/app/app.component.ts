import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  CellClickedEvent,
  ColDef,
  ICellRendererParams,
  SideBarDef,
  StatusPanelDef,
} from 'ag-grid-community';
import { Observable } from 'rxjs';
import { GoogByeComponent } from './goog-bye/goog-bye.component';
import { GreetTS } from './greet/greet';
import { HelloComponent } from './hello/hello.component';
import { MyCellComponent } from './my-cell/my-cell.component';
import { MyCustomComponent, MyParams } from './my-custom/my-custom.component';
import { OverComponent } from './over/over.component';
import { UnderComponent } from './under/under.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rowData$!: Observable<any[]>;
  components = {
    hello: HelloComponent,
    googBye: GoogByeComponent,
    myCustom: MyCustomComponent,
    myCell: MyCellComponent,
    under: UnderComponent,
    over: OverComponent,
    greetTS: GreetTS,
  };

  sideBar: SideBarDef = {
    toolPanels: [
      'columns',
      'filters',
      {
        id: 'customStats',
        labelDefault: 'Custom Stats',
        labelKey: 'customStats',
        iconKey: 'custom-stats',
        toolPanel: HelloComponent,
      },
    ],
    defaultToolPanel: 'customStats',
  };

  statusBar: { statusPanels: StatusPanelDef[] } = {
    statusPanels: [
      {
        statusPanel: HelloComponent,
      },
      {
        statusPanel: GoogByeComponent,
      },
      {
        statusPanel: 'agAggregationComponent',
        statusPanelParams: {
          aggFuncs: ['sum', 'min', 'max', 'count'],
        },
      },
    ],
  };

  colDefs: ColDef[] = [
    {
      field: 'athlete',
      cellRenderer: 'myCell',
      cellRendererParams: {
        buttonText: 'Athlete',
      },
    },
    {
      field: 'age',
      cellRendererSelector: (params: ICellRendererParams) => {
        if (params.value > 25) {
          return { component: 'over' };
        }
        return { component: 'under' };
      },
      filter: 'agNumberColumnFilter',
    },
    {
      field: 'country',
      cellRenderer: (params: ICellRendererParams) => {
        return `<span style="color: blue">${params.value}</span>`;
      },
    },
    {
      field: 'year',
      cellRenderer: 'myCustom',
      cellRendererParams: {
        name: 'Year',
      } as MyParams,
      filter: 'agSetColumnFilter',
    },
    {
      field: 'date',
      headerComponent: 'myCustom',
      headerComponentParams: {
        name: 'Date',
      } as MyParams,
    },
    {
      field: 'sport',
      filter: 'myCustom',
      filterParams: {
        name: 'Sport',
      } as MyParams,
    },
    {
      field: 'gold',
      cellRendererParams: {
        name: 'Gold',
      } as MyParams,
      cellRendererSelector: (params: ICellRendererParams) => {
        if (params.data.age < 24) {
          return {
            component: 'hello',
            params: {
              name: params.data.athlete,
            },
          };
        }
        return {
          component: 'googBye',
          params: {
            name: params.data.athlete,
          },
        };
      },
    },
    {
      field: 'silver',
      cellRenderer: 'greetTS',
      cellRendererParams: {
        name: 'Greetings',
      } as MyParams,
    },
    { field: 'bronze' },
    { field: 'total' },
  ];

  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: true,
    enableRowGroup: true,
  };

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData$ = this.http.get<any[]>(
      'https://ag-grid.com/example-assets/olympic-winners.json'
    );
  }

  onCellClicked(event: CellClickedEvent) {
    console.log(event);
  }

  onClearSelection() {
    this.agGrid.api.deselectAll();
  }
}
