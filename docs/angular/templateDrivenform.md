---
hide:
 - toc
---
### Steps For TemplateDrivenForm(#)
```
step:1 import formsmodule that is enough validators also u can write directly in html only
       import {  FormsModule } from '@angular/forms';
step:2 declare formcontrols 
step:3 in html file use #symbol to ur form & use (ngsubmit)=sumbit()
```

```title="ts.file"
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-dummy',
  imports: [CommonModule,MatFormFieldModule,MatInputModule,FormsModule],
  templateUrl: './dummy.html',
  styleUrl: './dummy.css'
})
export class Dummy {
  
  fname: string = '';
  lname: string = '';

  submitForm(formValue: any) {
    if (formValue.fname && formValue.lname) {
      console.log('Form Submitted with:', formValue);
    } else {
      console.log('Form is incomplete');
    }
  }

}
```
```title="html.file"
<form #myForm="ngForm" (ngSubmit)="submitForm(myForm.value)">
       <!-- firstName -->
  <mat-form-field class="example-full-width" appearance="outline">
      <mat-label>First Name</mat-label>
      <input matInput name="fname" [(ngModel)]="fname" required #fnameModel="ngModel" />
    <mat-error *ngIf="fnameModel.invalid && fnameModel.touched">
      First Name is required
    </mat-error>
  </mat-form-field>
         <!-- lastName -->
  <mat-form-field class="example-full-width" appearance="outline">
      <mat-label>Last Name</mat-label>
      <input matInput name="lname" [(ngModel)]="lname" required #lnameModel="ngModel" />
    <mat-error *ngIf="lnameModel.invalid && lnameModel.touched">
      Last Name is required
    </mat-error>
  </mat-form-field>

  <button mat-raised-button type="submit" [disabled]="myForm.invalid">Submit</button>
</form>
```
### Example: 2 same example withSimple Html inut
``` title="ts.file"
import { FormsModule } from '@angular/forms';

export class ContactComponent {
  firstName: string = '';
  lastName: string = '';

  submit(form: any) {
    console.log(form.value, 'form data');
  }

}
```

```title="html.file"
<form #regForm="ngForm" (ngSubmit)="submit(regForm)">

  <input type="text" name="firstNameFc" [(ngModel)]="firstName" 
    placeholder="First Name" >

  <input type="text" name="lastNameFc" [(ngModel)]="lastName" 
    placeholder="Last Name" >

  <button type="submit">Submit</button>
</form>

```
### TemplateDriven Form using mat-from-field
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