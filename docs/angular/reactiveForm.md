---
hide:
 - toc
---


<details>
  <summary>Notes Example 1 Patch</summary>
  <img src="/images/patch.jpg" alt="Output image" style="max-width: 100%; height: auto;" />
</details>
<details>
  <summary>Notes Example 2 Patch & Post</summary>
  <img src="/images/PatchWithPost.jpg" alt="Output image" style="max-width: 100%; height: auto;" />
</details>

<details>
  <summary>RForm with Validtion</summary>
  <img src="/images/reactiveform&validation.jpg" alt="Output image" style="max-width: 100%; height: auto;" />
</details>

### ReactiveForm with STEPS
```
step:1 import reactiveFormsModule,formGroup,FormControl,validators from '@angular/forms';
       ex: import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
step:2 declare ur formName
       ex: regForm:FormGroup
step:3 in ngOnit create ur formControls with validations	 
       ex:
        ngOnInit(): void {
       this.regForm=new FormGroup({
       fname:new FormControl('',[Validators.required]),
       lname:new FormControl('',Validators.required)
       })
      }  

step:4 goTo html file there declare ur form with [formGroup]="regForm" //properBinding 
step:5 create input fileds and give formControlName
step:6 create submit buttoN
step:7 go to ts file and write clickEvent for saveButton() 
```
``` title="ts.file"
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dummy',
  imports: [ReactiveFormsModule,CommonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './dummy.html',
  styleUrl: './dummy.css'
})
export class Dummy implements OnInit{

regForm:FormGroup

ngOnInit(): void {
  this.regForm=new FormGroup({
   fname:new FormControl('',[Validators.required]),
   lname:new FormControl('',Validators.required)
  // lastName:new FormControl(null,[Validators.required,Validators.minLength(2), Validators.maxLength(100), 
  Validators.pattern('^[a-zA-Z0-9 ]+$'),this.endOftheWhiteSpace, this.startingWhiteSpace]),
  // firstName:new FormControl(null,[Validators.required,Validators.minLength(2), Validators.maxLength(100), 
  Validators.pattern('^[a-zA-Z0-9 ]+$'),this.endOftheWhiteSpace, this.startingWhiteSpace]),
  // dob: new UntypedFormControl(null,Validators.required),
  })
}
submitForm(){
  if(this.regForm.valid){
    console.log(this.regForm)
  }
}
}
```
```title="html.file"
<form [formGroup]="regForm">
    <mat-form-field class='example-full-width' appearance='outline'>
       <-- firstName -->
        <mat-label>FirstName</mat-label>
          <input matInput formControlName="fname" />
          <mat-error *ngIf="regForm.get('fname')?.hasError('required')">  FirstName is required </mat-error>
    </mat-form-field>
    
    <mat-form-field class='example-full-width' appearance='outline'>
         <-- lastName -->
        <mat-label>LastName</mat-label>
          <input matInput formControlName="lname" />
          <mat-error *ngIf="regForm.get('lname')?.hasError('required')">  lastName is required </mat-error>
    </mat-form-field>
 <button (click)="submitForm()"> submit</button>   
</form>

----if u want to wirte in constrouct ---
regForm:FormGroup
constructor(private fb:FormBuilder){} //private use cheste then use fb.group 
ngOnInit(): void {
  this.regForm=this.fb.group({
   fname:new FormControl('',[Validators.required]),
   lname:new FormControl('',Validators.required)

  })
}
```

### Reactive FormsModule withOut Validation

```
 -- ts.file--
 import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
  export class ContactComponent {
  regForm:FormGroup;
  constructor(private fb:FormBuilder){

    this.regForm=this.fb.group({
      firstNameFc:new FormControl(''),
      lastNameFc:new FormControl()
    })
  }
  submit(){
  console.log(this.regForm,'fomm')
 }
}

  ---html file--
 <form [formGroup]="regForm">
    <input type="text" placeholder="firstnName" formControlName="firstNameFc">
    <input type="text" placeholder="lastName" formControlName="lastNameFc">
    <button (click)="submit()">submit</button>
</form>
```


### Reactive FomrsModule with Validation

```title="reactiveForm.ts"
 //import  formbuilder bz formBuilder ane class lone manaki group ane method vuntundi and also import 
 commonMoudule & import  formcontrolClass,formGroup and reactiveFormsModule form angular/core
 
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
export class ContactComponent {

  regForm:FormGroup;
  constructor(private fb:FormBuilder){
  this.regForm = this.fb.group({
  firstNameFc: new FormControl('', [Validators.required, Validators.minLength(8)]),
  lastNameFc: new FormControl('', [Validators.required])
});

  }
submit(){
  console.log(this.regForm,'fomm')
}
}

```

```title="html.file"
<form [formGroup]="regForm">
  <!-- First Name -->
  <input type="text" placeholder="First Name" formControlName="firstNameFc">
  <div *ngIf="regForm.get('firstNameFc')?.touched && regForm.get('firstNameFc')?.invalid">
    <small *ngIf="regForm.get('firstNameFc')?.errors?.['required']" style="color:red;">
      First name is required.
    </small>
    <small *ngIf="regForm.get('firstNameFc')?.errors?.['minlength']" style="color:red;">
      First name must be at least 8 characters.
    </small>
  </div>

  <!-- Last Name -->
  <input type="text" placeholder="Last Name" formControlName="lastNameFc">
  <div *ngIf="regForm.get('lastNameFc')?.touched && regForm.get('lastNameFc')?.invalid">
    <small style="color:red;">
      Last name is invalid.
    </small>
  </div>

  <button (click)="submit()">Submit</button>
</form>

```
### Example
```title="html.file"
<form [formGroup]="form">

  <!-- First Name -->
  <label>First Name</label>
  <input type="text" placeholder="First Name" formControlName="firstname" />
  <div class="red" *ngIf="form.get('firstname')?.touched && 
        form.get('firstname')?.errors?.['required']">
          First name is required.
   </div>
  <div class="red" *ngIf="form.get('firstname')?.errors?.['minlength']">
    First name must be at least 3 characters long.
  </div>

  <!-- Last Name -->
  <label>Last Name</label>
  <input type="text" placeholder="Last Name"
    formControlName="lastname"/>
  <div class="red" *ngIf="form.get('lastname')?.
      touched && form.get('lastname')?.errors?.['required']">
          Last name is required.
  </div>

  <!-- Text Area -->
  <label>Text Me</label>
  <textarea formControlName="textme"></textarea>

  <!-- Gender -->
  <label>Gender:</label>
  <div class="alignment">
    <label>Male</label>
    <input type="checkbox" formControlName="male" />
    <label class="right">Female</label>
    <input type="checkbox" formControlName="female" />
  </div>

  <!-- Patient Details -->
  <label class="top">Patient Details:</label>
  <div class="alignment">
    <label>Inpatient</label>
    <input type="radio" value="inpatient"
      formControlName="patient" />
    <label class="right">Outpatient</label>
    <input type="radio" value="outpatient"
      formControlName="patient" />
  </div>

</form>

<button (click)="clickme()">Save Details</button>

```

```title="ts.file"
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule,FormsModule,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
  form:FormGroup
  array:any[]=[]

  private fb = inject(FormBuilder)

  constructor(){
this.form=this.fb.group({
  firstname:new FormControl('',[Validators.required,Validators.minLength(5)]),
  lastname:new FormControl('',[Validators.required,Validators.maxLength(6)]),
  textme:new FormControl(),
  male:new FormControl(),
  Female:new FormControl(),
  patient:new FormControl()
})
  }


  clickme(){
    this.form.markAllAsTouched()
    if(this.form.valid){
      console.log(this.form?.value);
      this.array = [...this.array, this.form.value]  
      // we need to write in this way beacause the ngchanges will decucte 
      // this.array.push(this.form.value)
      console.log(this.array,'array')
    }
  }
}
```
### patch values in the formcontrol

```title="patch.value"
dateOfDeath:this.list.expiryInfo[0].dateOfDeath? new Date(this.list.expiryInfo[0].
                 dateOfDeath):null,-- when the date is to be modified 
preliminaryCauseOfDeath:   this.list.expiryInfo[0].preliminaryCauseOfDeath,
isExpired:this.list.expiryInfo[0].dateOfDeath?true:false -- ternary operator---  
```
### patch value by length

```title="pathvalue"
      let signoutData = (this.signOutdata && this.signOutdata?.length > 0) ? this.signOutdata[0] : null;
this.signOutForm.patchValue({
  signOutDate: signoutData?.signOutDateTime? new Date(signoutData.signOutDateTime):null,
  reason:signoutData?.signOutReason?signoutData.signOutReason:null
})
```