---
hide:
 - toc
---
### matAutoSelect this is our example
```title="html.file"
<form [formGroup]="regForm">
    <mat-form-field appearance="outline">
      <mat-label>Pronouns By</mat-label>
      <input aria-label="requestedBy" type="text" placeholder="descFc" 
        matInput formControlName="descFc" (input)="oninpuchange($event)"  
        [matAutocomplete]="auto">
    </mat-form-field>
  
    <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn" (optionSelected)="onchange($event)">
      <mat-option *ngFor="let option of filteredData" [value]="option">
        {{ option.description }}
      </mat-option>
    </mat-autocomplete>
  
    <!-- Other fields -->
    <mat-form-field appearance="outline">
      <mat-label>CodeFc By</mat-label>
      <input aria-label="codeFc" type="text"  placeholder="codeFc" 
        matInput formControlName="codeFc">
    </mat-form-field>
  
    <mat-form-field appearance="outline">
      <mat-label>AnswerIdFc By</mat-label>
      <input aria-label="answerIdFc" type="text" 
        placeholder="answerIdFc" matInput 
        formControlName="answerIdFc">
    </mat-form-field>
  </form>
```

```title="ts.file"
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
@Component({
  selector: 'app-dummy',
  imports: [NgSelectModule,CommonModule,MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule,
  MatSelectModule,MatOptionModule,MatAutocompleteModule],
  templateUrl: './dummy.html',
})
export class Dummy implements OnInit{
proNounsData:any[]=[]
 
regForm:FormGroup
ngOnInit(): void {
this.getProNounsData();
this.regForm=new FormGroup({
  genderFc:new FormControl(''),
  drugName:new FormControl('',Validators.required)
 
})
}
getProNounsData():void{
  this.proNounsData=[
   {code:0,score:1,answerId:"LA29518-0",description:'he/him/his/his/himself',questionCode:'LL5144-2'},
   {code:1,score:2,answerId:"LA29519-8",description:'she/her/her/hers/herself',questionCode:'LL5144-2'},
   {code:2,score:3,answerId:"LA29520-6",description:'they/them/their/theirs/themselves',questionCode:'LL5144-2'},
   {code:3,score:4,answerId:"LA29523-0",description:'ze/zir/zir/zirs/zirself',questionCode:'LL5144-2'},
   {code:4,score:4,answerId:"LA29521-4",description:'xie/hir ("here")/hir/hirs/hirself',questionCode:'LL5144-2'},
   {code:5,score:6,answerId:"LA29515-6",description:'co/co/cos/cos/coself',questionCode:'LL5144-2'},
 ]
}
onBlur(){
  
}
onSelectionChange(event):void{
  console.log(event,'event')
}
changeCurrentStatus(event):void{
  console.log(event,'ngselectevent')
}

// mat-auto-complete
onDrugNameInput(event: Event): void {
  const inputValue = (event.target as HTMLInputElement).value;
  if (inputValue?.length > 2) {
    this.historyService
      .getWsDrugSuggestions(inputValue, 'DRUG', 'F')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (res: any) => {
          this.drugSuggestions  = res?.body || [];
        },
        error: (err) => {
          console.error('Drug name search error:', err);
          this.drugSuggestions  = [];
        },
      });
    } 
  else {
    this.drugSuggestions  = [];
  }
  if(!this.pharmacyForm.get('drugName').value){
    this.SearchDrugId='0'
  }
}
SearchDrugId:string='0'
onDrugSelectedRx(event){
  let Data = event 
  
  if(Data.rxNormCode){
    this.SearchDrugId= Data?.drugid

  
    this.pharmacyService.getDuplicateCheck('RXNormCode ',Data?.rxNormCode ?? Data , 
    (this.drugLibraryId ?? 0)).pipe(takeUntil(this.onDestroy$)).subscribe({
      next:(res)=>{

       if (res && res?.body?.value==="Already Exists" ){
        Swal.fire({
          title: 'Medication Already Present',
          text: 'This medication is already in the list.',
          icon: 'info',
          confirmButtonText: 'OK'
        });
        this.pharmacyForm.reset()
        this.onRxNormCode  = [];
        this.SearchDrugId='0'
        this.savedBarcodes=[]
       }
       else {
        // this.pharmacyForm?.reset()
        this.pharmacyForm?.patchValue({
          barndName:Data?.brandname,
          deaClassCode: this.deaClassCodeUnits?.
          find(ele => ele.meD_REF_DEA_CD === numberAttribute(Data?.deaclasscode)) ?? null,
          dosageForm:Data?.dosageform ? numberAttribute(Data?.dosageform) : null,
          drugName:Data?.drug ?? null,
          rxNormCode: Data?.rxNormCode,
          routeName: this.routes?.find(ele => ele.meD_ROUTE_ID == Data?.route) ?? null,
          ndc:Data?.ndc,
          theraputicCategory:Data?.theraputiccategory,
          medStrength:Data?.med_strength ?? null,
          medUnit:Data?.med_unit ?? null,
          PackageDes:Data?.pd ?? null,
          PackageUnit:Data?.hcfA_UNIT ?? null,
          PackageSize:Data?.ps ?? null,
          
        })
        this.getNDCData()
      }
      this.selectedOptions = [];
      this.pharmacyForm.get('pkg')?.reset()
         },

      error:(err)=>{
        this.SearchDrugId='0'
      }
    })
  }

}
displayDrugName(drug: any): string {
  return drug?.drugname ?? drug ?? '';
}

}


```
