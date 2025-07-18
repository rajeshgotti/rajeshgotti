---
hide:
 - toc
---

### ---- How to Use Local Storage in Angular --------
```
1. Set a Value
   localStorage.setItem('username', 'Rajesh');
2. Get a Value
   const name = localStorage.getItem('username');
   console.log(name);
3. Remove a Value
   localStorage.removeItem('username');
4. Clear All Local Storage
   localStorage.clear();
```
### Local storage with crud and displaying in the table  

``` title="ts.file"

import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import {
  AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule,
  ValidationErrors, ValidatorFn, Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { timeStamp } from 'console';
import e from 'express';

@Component({
  selector: 'app-localstorage',
  standalone: true,
  imports: [NgIf, MatRadioModule, MatButtonModule, NgFor, MatFormFieldModule, MatSelectModule,
    MatInputModule, ReactiveFormsModule, FormsModule],
  templateUrl: './localstorage.component.html',
  styleUrl: './localstorage.component.css'
})
export class LocalstorageComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  form!: FormGroup
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, this.createPasswordStrengthValidator]),
      gender: new FormControl(),
      age: new FormControl(),
      item: new FormArray([])
    });
    let submitted = false;
    this.add()
    this.getlocaldata()
  }
  get name() {
    return this.form.get('name')?.value
  }
  createPasswordStrengthValidator(name: any) {
    if (name?.value?.startsWith(' ')) {
      return { 'noplace': true }
    }
    if (name?.value?.endsWith(' ')) {
      return { 'noplace': true }
    }

    else
      return null
  }
  ok() {
    return this.fb.group({
      hobbies: new FormControl()
    })
  }
  get item() {
    return this.form.get('item') as FormArray
  }
  length = 60
  arrayage: any[] = []
  add() {
    console.log(this.form.value)
    for (let i = 0; i <= 60; i++) { this.arrayage.push(i) } debugger this.item.push(this.ok())
  } del(i: number) {
    debugger
    this.item.removeAt(i)
  } deletee(i: number) {
    this.array.splice(i, 1) localStorage.setItem("completedata",
      JSON.stringify(this.array))
  } array: any[] = [] onsubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    } this.array.push(this.form.value) localStorage.setItem("completedata", JSON.stringify(this.array))
    this.form.reset(), this.item.clear(), this.add()
  } edit(e: any) {
    debugger this.form.patchValue({
      name: e.name,
      gender: e.gender, age: e.age
    }) e.item.forEach((obj: any, i: any) => {
      console.log(obj, 'lololo')
      this.item.at(i).patchValue({
        hobbies: obj.hobbies
      })
    })
  }
  getlocaldata() {
    let localdata = localStorage.getItem("completedata")
    if (localdata)
      this.array = JSON.parse(localdata)
  }

  test() {
    console.log(this.form.get('name'));
  }

}

```

``` title="html"
<form [formGroup]="form">
    <div class="body">
         <mat-form-field class='example-full-width' appearance='outline'>
            <mat-label>Name</mat-label>
            <input matInput formControlName="name" />
            <mat-error *ngIf="form.get('name')?.hasError('required'); else nospace"> first is required </mat-error>
            <ng-template #nospace>
                <mat-error *ngIf="form.get('name')?.hasError('noplace')">no white space</mat-error>
            </ng-template>
        </mat-form-field>

        <div class="form-group">
            <mat-radio-group aria-label="Select an option" formControlName="gender">
                <mat-radio-button value="male">male</mat-radio-button>
                <mat-radio-button value="female"> Female</mat-radio-button>
            </mat-radio-group>
        </div>
        <div class="form-group">
            <div formArrayName="item">
                <div *ngFor="let item of item?.controls; let i=index">
                    <div [formGroupName]="i">
                        <label>HOBBIES</label>
                        <div class="d-flex">
                            <input id="hobbies" type="text" placeholder="add your hobbies" classs="form-control"
                                formControlName="hobbies">
                            <button (click)="del(i)" *ngIf="i!==0">DELETE </button>
                        </div>
                    </div>
                </div>
                <button type="button" (click)="add()"
                    [disabled]="!(this.item.value[this.item.length-1].hobbies)">ADDME+</button>
            </div>
        </div>
        <div>
            <mat-form-field>
                <mat-label>age</mat-label>
                <mat-select formControlName="age">
                    @for (num of arrayage; track num) {
                    <mat-option [value]="num">{{num}}</mat-option>
                    }
                </mat-select>
            </mat-form-field>
        </div><br><br>
        <button type="button" class="btn btn-primary" (click)="onsubmit()">submit</button>
    </div>
</form>
<div class="container">
    <div class="row">
        <div class="col-12">
            <table class="table table-border">
                <thead>
                    <tr>
                        <th>si no</th>
                        <th>name</th>
                        <th>gender</th>
                        <th>age</th>
                        <th>hobbies</th>
                        <!-- <th>edit</th> -->
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let data of array ;let i = index">
                        <td>{{i+1}}</td>
                        <td>{{data.name}}</td>
                        <td>{{data.gender}}</td>
                        <td>{{data.age}}</td>
                        <!-- <span *ngFor="let hobbies of data.item" >
              <td>{{hobbies.hobbies}}</td>
            </span> -->
                        <td>
                            <span *ngFor="let hobbies of data.item">
                                {{hobbies.hobbies}}
                            </span>
                        </td>
                        <!-- <td> <button (click)="edit(data)">edit</button></td> -->
                        <td> <button (click)="deletee(i)">delete </button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div> 
```