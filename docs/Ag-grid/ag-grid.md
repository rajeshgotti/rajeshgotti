---
hide:
 - toc
---
<details>
  <summary>Click to expand image</summary>
  <img src="/images/ag-grid.png" alt="Output image" style="max-width: 100%; height: auto;" />
</details>
<details>
  <summary>Total AG-GRID on html image</summary>
  <img src="/images/ag-grid7.jpg" alt="Output image" style="max-width: 100%; height: auto;" />
</details>

<details>
  <summary>Notes image 1</summary>
  <img src="/images/ag-grid0.jpg" alt="Output image" style="max-width: 100%; height: auto;" />
</details>

<details>
  <summary>Notes image 2</summary>
  <img src="/images/ag-grid2.jpg" alt="Output image" style="max-width: 100%; height: auto;" />
</details>
<details>
  <summary>Notes image 3</summary>
  <img src="/images/ag-grid3.jpg" alt="Output image" style="max-width: 100%; height: auto;" />
</details>
<details>
  <summary>Notes image 4</summary>
  <img src="/images/ag-grid4.jpg" alt="Output image" style="max-width: 100%; height: auto;" />
</details>
<details>
  <summary>Notes image 5</summary>
  <img src="/images/ag-grid5.jpg" alt="Output image" style="max-width: 100%; height: auto;" />
</details>
<details>
  <summary>Notes image 6</summary>
  <img src="/images/ag-grid6.jpg" alt="Output image" style="max-width: 100%; height: auto;" />
</details>




### Search Filter

``` title="ts.file"
//import formsModule,inputModule,formsModule

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

export class TotolOrdersComponent implements OnInit,OnDestroy,OnChanges {

searchOrderFc:string;	//here Fc ante formControl ani,templateRef FormControlName ex:ngModel

onFilterTextBoxChanged() { // this is the method for filtering
    this.gridApi.setGridOption(
      "quickFilterText",
      (document.getElementById("filter-text-box") as HTMLInputElement).value,
    );
  }					
} 
```


```title="html"
// here manaki search filed vundi and diniki manm templateRef varibale icahm(#myform)
  so e templateRefVariable ni manam ag-grid lo use chestam with 
   [quickFilterText]="searchOrderFc" ani use chestam

Step:1 <form #myForm="ngForm">
        <mat-form-field class="example-full-width" appearance="outline">
            <mat-label>Search</mat-label>
             <input matInput placeholder="Search" [disabled]="allRecords.length===0"
             id="filter-text-box" [(ngModel)]="searchOrderFc"
             (input)="onFilterTextBoxChanged()">
        </mat-form-field>
       </form>

  <ag-grid-angular
    #agGrid
    class="ag-theme-material my-grid "
    style="width:100%;height: 100%"
    [rowData]="allRecords"
    [sideBar]="sideBar"
    [rowHeight]="ag_grid_row_height"  [headerHeight]="ag_grid_header_height"
    [columnDefs]="columnDefs"
    [defaultColDef]="defaultColDef"
    [tooltipShowDelay]="tooltipShowDelay"
    (gridReady)="onGridReady($event)"
    [overlayNoRowsTemplate]="noRowsOverlayTemplate"
    [quickFilterText]="searchOrderFc" // here we will use that FormControlName ex:searchOrderFc 
    >
  </ag-grid-angular>
```

### Search Functionality using Reactive FormsModule

``` title="ts.file"

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup } from '@angular/forms';

export class TotolOrdersComponent implements OnInit, OnDestroy, OnChanges {
 searchForm: FormGroup; //formcontrolName

constructor(private fb: FormBuilder) {
  this.searchForm = this.fb.group({
    searchOrder: ['']
  });

  this.searchForm.get('searchOrder')?.valueChanges.subscribe(value => {
    this.onFilterTextBoxChanged(value);
    });
  }
 onGridReady(params: any): void { //max this method will present in your code if not then only add
    this.gridApi = params.api;  
  }

 onFilterTextBoxChanged(value: string): void {
    if (this.gridApi) {
      this.gridApi.setGridOption('quickFilterText', value);
    }
  }

 ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchOrder: new FormControl('')
    }); 
 }
}

```

``` title="html.file"
-----html---------
 <input matInput placeholder="Search"
   formControlName="searchOrder" [disabled]="allRecords.length === 0"
   id="filter-text-box"
    />

  <ag-grid-angular
    [quickFilterText]="searchForm.get('searchOrder')?.value"
    >
   </ag-grid-angular>
 
```