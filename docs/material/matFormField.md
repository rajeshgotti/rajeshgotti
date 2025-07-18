---
hide:
 - toc
---
### mat-form-field using TemplateDrivenForm(#)

```title="ts.file"
import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PhoneModel } from '../parent/parent';

@Component({
  selector: 'app-child',
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatSelectModule,CommonModule],
  templateUrl: './child.html'
})
export class Child{
  @Input() passToChild: PhoneModel[] = [];
  firstNameFc:string
  lastNameFc:string

  submitPatient(form){
    debugger
    console.log(form)
   }
}
```
```title="html.file"
<form #phoneForm="ngForm" (ngSubmit)="submitPatient(phoneForm.value)">
  <mat-form-field appearance="outline">
    <mat-label>FirstName</mat-label>
   
    <input type="text" matInput  [(ngModel)]="firstNameFc" name="fname" #firstName="ngModel" required>
    <!-- <mat-select [(ngModel)]="firstNameFc" name="fname" #firstName="ngModel" required>
      <mat-option *ngFor="let item of passToChild" [value]="item.phoneName">
        {{item.phoneName}}
      </mat-option>
    </mat-select> -->

    <!-- Validation error for first name -->
    <mat-error *ngIf="firstName.invalid && (firstName.dirty || firstName.touched)">
      First name is required.
    </mat-error>
  </mat-form-field>

  <!-- Submit button (disabled if form is invalid) -->
  <button type="submit" [disabled]="phoneForm.invalid">Submit</button>
</form>
```