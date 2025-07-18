---
hide:
 - toc
---

## custom validation

```title="app.html"
<label>firstname </label>
<input type="text" placeholder="firstname" formControlName="firstname"> <br>
  <div class="red" *ngIf="form.get('firstname')?.touched && 
      form.get('firstname')?.errors?.   ['required']">
      First name is required.
   </div>
<!-- <div class="red" *ngIf="form.get('firstname')?.errors?.['minlength']">
  Firstname must be at least 3 characters long.
</div> -->
<small *ngIf="form.get('firstname')?.hasError('uppercase')">
  Firstname must contain at least one uppercase letter.
</small>
```

```title="app.ts"
this.form=this.fb.group({
     firstname:new FormControl('',[Validators.required,Validators.minLength(5),this.uppercaseValidator]),
     lastname:new FormControl('',[Validators.required,Validators.maxLength(6)]),
  })
  
  uppercaseValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value || '';
    const hasUppercase = /[A-Z]/.test(value);
    return hasUppercase ? null : { uppercase: true };
  }
```
## validation

```
 FORMVALIDATION --- 
  <mat-error *ngIf="addvisitform.controls.dateOfDeath.errors?. required">
       DateOfDeath is required
  </mat-error>
```

## set validator and remove validator

```
 isexipred():void {
    this.addvisitform.get('isExpired').valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe((res) => {
      // console.log(res);
      if (res === 'true') {
        this.addvisitform.get('dateOfDeath').setValidators(Validators.required);
        this.addvisitform.get('preliminaryCauseOfDeath').setValidators(Validators.required);
        this.addvisitform.get('dateOfDeath').updateValueAndValidity();
        this.addvisitform.get('preliminaryCauseOfDeath').updateValueAndValidity();
      } else {
        this.addvisitform.get('dateOfDeath').removeValidators(Validators.required);
                ||  we can use clear also if we want to clear every validator 
        this.addvisitform.get('preliminaryCauseOfDeath').removeValidators(Validators.required);
        this.addvisitform.get('dateOfDeath').updateValueAndValidity();
        this.addvisitform.get('preliminaryCauseOfDeath').updateValueAndValidity();
      }
    });
  }
```

### validation if we does not need initialy so we can set it after that method is excecuted and value changes

```
 multipleBirthFlagvalueevent() {
  this.patientInfoForm.get('multipleBirthFlag')?.valueChanges
    .pipe(takeUntil(this.onDestroy$))
    .subscribe((res) => {
      if (res === true) {
        this.patientInfoForm.get('multipleBirth')?.setValidators([
          Validators.required,
          Validators.min(1),
          Validators.max(10)
        ]);
        this.patientInfoForm.get('multipleBirth')?.updateValueAndValidity();
      } else {
        this.patientInfoForm.get('multipleBirth')?.clearAsyncValidators();
        this.patientInfoForm.get('multipleBirth')?.removeValidators([
          Validators.required,
          Validators.min(1),
          Validators.max(10)
        ]);
        this.patientInfoForm.get('multipleBirth')?.updateValueAndValidity();
        this.patientInfoForm.get('multipleBirth')?.reset();
      }
    });
}

```