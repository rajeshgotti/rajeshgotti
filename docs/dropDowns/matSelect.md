---
hide:
 - toc
---
```title="ts.file"
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-dummy',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatSelectModule, MatOptionModule, MatAutocompleteModule],
  templateUrl: './dummy.html',
})
export class Dummy implements OnInit {
  proNounsData: any[] = [];
  filteredData: any[] = [];  // Add a new variable for filtered data
  regForm: FormGroup;

  ngOnInit(): void {
    this.getProNounsData();
    this.regForm = new FormGroup({
      descFc: new FormControl(''),
      codeFc: new FormControl(''),
      scoreFc: new FormControl(''),
      answerIdFc: new FormControl(),
      questionCodeFc: new FormControl('')
    });
  }

  getProNounsData(): void {
    this.proNounsData = [
      { code: 0, score: 1, answerId: "LA29518-0", description: 'he/him/his/his/himself', questionCode: 'LL5144-2' },
      { code: 1, score: 2, answerId: "LA29519-8", description: 'she/her/her/hers/herself', questionCode: 'LL5144-2' },
      { code: 2, score: 3, answerId: "LA29520-6", description: 'they/them/their/theirs/themselves', questionCode: 'LL5144-2' },
      { code: 3, score: 4, answerId: "LA29523-0", description: 'ze/zir/zir/zirs/zirself', questionCode: 'LL5144-2' },
      { code: 4, score: 4, answerId: "LA29521-4", description: 'xie/hir ("here")/hir/hirs/hirself', questionCode: 'LL5144-2' },
      { code: 5, score: 6, answerId: "LA29515-6", description: 'co/co/cos/cos/coself', questionCode: 'LL5144-2' },
      { code: 6, score: 7, answerId: "LA29516-4", description: 'en/en/ens/ens/enself', questionCode: 'LL5144-2' },
      { code: 7, score: 8, answerId: "LA29517-2", description: 'ey/em/eir/eirs/emself', questionCode: 'LL5144-2' },
      { code: 8, score: 9, answerId: "LA29522-2", description: 'yo/yo/yos/yos/yoself', questionCode: 'LL5144-2' },
      { code: 9, score: 10, answerId: "LA29524-8", description: 've/vis/ver/ver/verself', questionCode: 'LL5144-2' }
    ];
    this.filteredData = this.proNounsData;  // Initialize filtered data
  }

  displayFn(value: any): string {
    return value ? value.description : '';  
  }

  onchange(e): void {
    this.regForm.patchValue({
      codeFc: e.option.value.code,
      answerIdFc: e.option.value.answerId
    });
  }

  // Filter options based on input value
  oninpuchange(event: any): void {
    const searchTerm = event.target.value.toLowerCase();  // Get the typed value in lowercase
    this.filteredData = this.proNounsData.filter(option =>
      option.description.toLowerCase().includes(searchTerm)
    );
  }
 
}
```
```title="html.file"
<form [formGroup]="regForm">
 <!-- mat-select -->
<mat-form-field>
    <mat-label>Gender</mat-label>
  <mat-select aria-label="gender" formControlName="genderFc" aria-placeholder="Gender"
        (selectionChange)="onSelectionChange($event)">
    <mat-option *ngFor="let item of proNounsData" [value]="item.answerId">
      {{item?.description}}
    </mat-option>
  </mat-select>
</mat-form-field>  

 <!-- for ng-select we use bindLabel and bindValue -->
<div class="w-100  mat-field-0-pad align-items-start ng-top-0">
  <ng-select [items]="proNounsData" bindLabel="description" bindValue="answerId" formControlName="genderFc" 
    appearance="outline" aria-label="gender"
    (change)="changeCurrentStatus($event);onBlur()">
    <ng-template ng-option-tmp let-item="item" let-index="index">
        <span>{{item.description}}</span> 
        <!-- e name dropDown lo yem cupiyali ani ie, manam dorpDown paina click 
        ceyagane then m ravali like name or id -->
        
    </ng-template>
  </ng-select>
</div>
```