---
hide:
 - toc
---
### steps to follow when we use mat-select 
```
1.import mat-form-fieldMoudle,inputModule,mat-select-module
2.declare formName and import reactiveFormsModule,controls etc..
4.call ur getServices and store res in oneVariable
3.Goto html file use <mat-option> to loop ur Data

Note:formControlName and  (selectionChange)="selectChange($event)" WHERE to place
   ex: <mat-select  formControlName="phoneNameFc" (selectionChange)="selectChange($event)">>
```

```title="ts.file"
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

export interface PhoneModel { //interface is just for typeCaste purpose
  phoneId: number;
  phoneName: string;
  phoneModel: string;
  phonePrice: number;
}

@Component({
  selector: 'app-parent',
  imports: [MatFormFieldModule, MatSelectModule, CommonModule,ReactiveFormsModule],
  templateUrl: './parent.html'
})
export class Parent implements OnInit {
  phoneForm:FormGroup
  phoneData: PhoneModel[] = [];//variableName:type="emptyArray"
  ngOnInit(): void {
    this.getCarData(); //getMethod()
    this.phoneForm=new FormGroup({
      phoneIdFc:new FormControl(),
      phoneNameFc:new FormControl('',validators.required),
      phoneModelFc:new FormControl(),
      phonePriceFc:new FormControl()
    })
  }

  getCarData(): void {
    this.phoneData = [
      { phoneId: 1, phoneName: 'Moto', phoneModel: 'Edge 650', phonePrice: 22.999 },
      { phoneId: 2, phoneName: 'MI', phoneModel: 'note 5 pro', phonePrice: 15.999 },
      { phoneId: 3, phoneName: 'inFocus', phoneModel: 'neto pro', phonePrice: 10.999 },
      { phoneId: 4, phoneName: 'iPhone', phoneModel: 'proMax', phonePrice: 75.500 },
      { phoneId: 5, phoneName: 'Samsung', phoneModel: 'S24', phonePrice: 89.299 }
    ];
  }
  selectChange(event):void{ //here user e filed ni select chesina tarvta vere konni fileds ni patch chestunam
      this.phoneForm.patchValue({
      phonePriceFc:event?.value?.phonePrice,
      phoneIdFc:event?.value?.phoneId
    })
  }
}
```
```title="html.file"
<div class="container-fluid mx-5" >
    <form [formGroup]="phoneForm">
        <mat-form-field appearance="outline" class="col-2">
            <!-- phoneName -->
            <mat-label>PhoneName</mat-label>
            <mat-select  formControlName="phoneNameFc">
            <mat-option *ngFor="let item of phoneData" [value]="item.phoneName" placeholder="phoneName">
                {{item.phoneName}}
            </mat-option>
        </mat-select>
        <!-- Validation error for phoneNameFc -->
        <mat-error *ngIf="phoneForm.controls['phoneNameFc']?.hasError('required') && phoneForm.controls
             ['phoneNameFc']?.touched"> Phone Name is required.
        </mat-error>
      
    </mat-form-field>
    <mat-form-field appearance="outline" class="col-2 mx-2">
        <!-- phoneModel -->
        <mat-label>Phone Model</mat-label>
        <mat-select formControlName="phoneModelFc" (selectionChange)="selectChange($event)">//selectionChange
            <mat-option *ngFor="let item of phoneData" [value]="item" placeholder="phoneModel">
                {{item.phoneModel}}
            </mat-option>
        </mat-select>
    </mat-form-field>
    <mat-form-field appearance="outline">
        <mat-label>Phone Price</mat-label>
        <mat-select formControlName="phonePriceFc">
            <mat-option *ngFor="let item of phoneData" [value]="item.phonePrice" placeholder="phonePrice">
                {{item.phonePrice}}
            </mat-option>
        </mat-select>
    </mat-form-field>
    <mat-form-field appearance="outline" class="mx-2">
        <mat-label>Patch Field</mat-label>
        <mat-select formControlName="phoneIdFc">
            <mat-option *ngFor="let item of phoneData" [value]="item.phoneId" placeholder="Patch">
                {{item.phoneId}} - ( {{item.phoneName}} )
            </mat-option>
        </mat-select>
    </mat-form-field>
</form>
</div>
```
