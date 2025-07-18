---
hide:
 - toc
---
### If we use ng-select then use this
```
step:1 npm install --save @ng-select/ng-select
step:2 import ng-select and reactiveFromsModule
         ex: import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
         ex: import { NgSelectComponent } from '@ng-select/ng-select';
step:3 take formGroup and formcontrol with validation and takeOne variable and in your  getMethod() 
       after ur services calling u will get result na sotre ur result in that declared vairable 
       ex:pronounsData
step:4 that varible we have to use in html for looping inside ng-select

     <ng-select [items]="pronounsData" bindLabel="description" bindValue="answerId" formControlName="firstName"
            appearance="outline" aria-label="gender" (change)="changeCurrentStatus($event);">
            <ng-template ng-option-tmp let-item="item" let-index="index">
                <span>{{item.description}}</span>
            </ng-template>
      </ng-select>		

step:5 1. [items]="urTotalDataVariableName"  ex: pronounsData 
       2. bindLabel="ha label lo m display avvali ex:Name" 
       3. bindValue="BackEnd ki m value send ceyali ex:answerId"
       4. formcontrol="e filed ki oka name ni setChestam" 
       5. let-item="item" e item lo mana data motam vuntundi in-case item ane name kakunda if u 
          want to use ur own name then use like this

          ex:<ng-template ng-option-tmp let-raj="raj" let-index="index">
                <span>{{raj.description}}</span>
             </ng-template>

step:5 default ga browser lo manaki Field visible avvadu so apply css to see this 
       open:angular.json 
	    "styles": [
              "src/styles.css",
              "node_modules/@ng-select/ng-select/themes/default.theme.css" 
              ]
	  ----style.css----
ng-select.ng-select {
    width: 100%;
  }
  
  ng-select .ng-select-container {
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 8px;
    font-size: 14px;
  }
  
  ng-select .ng-select-container .ng-value {
    color: #000;
  }
```

```title="ts.file"
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
   <!-- interface this is for type secure -->
export interface Pronouns{
  code:number,
  score:number
  answerId:string
  description:string
  questionCode:string
}
@Component({
  selector: 'app-home',
  imports: [NgSelectComponent,ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  regForm:FormGroup

  pronounsData:Pronouns[]=[];
  ngOnInit(): void {
    this.getPronounsData()
   this.regForm=new FormGroup({
     firstName:new FormControl(''),
     lastName:new FormControl('')
   }) 
  }
  getPronounsData():void{
    this.pronounsData = [
     { code: 0, score: 1, answerId: "LA29518-0", description: 'he/him/his/himself', questionCode: 'LL5144-2' },
     { code: 1, score: 2, answerId: "LA29519-8", description: 'she/her/hers/herself', questionCode:'LL5144-2'},
     { code: 2, score: 3, answerId: "LA29520-6", description: 'they/their/theirs', questionCode: 'LL5144-2' },
     { code: 3, score: 4, answerId: "LA29523-0", description: 'ze/zirs/zirself', questionCode: 'LL5144-2' },
     { code: 4, score: 4, answerId: "LA29521-4", description: 'xie/hirs/hirself', questionCode: 'LL5144-2' },
     { code: 5, score: 6, answerId: "LA29515-6", description: 'co/cos/coself', questionCode: 'LL5144-2' },
  ]}
  changeCurrentStatus(e):void{
   console.log(e)
  }
}
```

```title="html.file"
<p>contact works!</p>
<form [formGroup]="regForm">
    <div class="col-2">
        <ng-select [items]="pronounsData" bindLabel="description" bindValue="answerId" formControlName="firstName"
            appearance="outline" aria-label="gender" (change)="changeCurrentStatus($event);">
            <ng-template ng-option-tmp let-item="item" let-index="index">
                <span>{{item.description}}</span>
            </ng-template>
        </ng-select>
    </div>
</form> 
```
### dummy data for practice
<details>
[
  {
    "testLoinc": "101",
    "testName": "Body Fluid LDH",
    "testPanelName": "Body Fluid LDH",
    "category": "Chemistry",
    "isPanel": false,
    "resultsData": [
      {
        "patientResultId": 301,
        "labTestDate": "2025-07-04T18:32:00",
        "result": "good",
        "specimen": "Body fluid, unsp",
        "observationDateTime": "07/04/25  6:37:00 PM",
        "labName": "vijaya",
        "treatmentId": 201
      },
      {
        "patientResultId": 302,
        "labTestDate": "2025-07-05T19:37:00",
        "result": "good",
        "specimen": "rammki fluid",
        "observationDateTime": "07/04/25  7:39:00 PM",
        "labName": "rajii",
        "treatmentId": 202
      }
    ]
  },
  {
    "testLoinc": "102",
    "testName": "Body Fluid LDH",
    "testPanelName": "Body Fluid LDH",
    "category": "Chemistry",
    "isPanel": false,
    "resultsData": [
      {
        "patientResultId": 303,
        "labTestDate": "2025-07-05T18:32:00",
        "result": "ok",
        "specimen": "Body fluid, unsp",
        "observationDateTime": "07/04/25  7:34:00 PM",
        "labName": "vijaya",
        "treatmentId": 202
      },
      {
        "patientResultId": 304,
        "labTestDate": "2025-07-05T19:37:00",
        "result": "bad",
        "specimen": "redmi",
        "observationDateTime": "07/04/25  7:39:00 PM",
        "labName": "loke",
        "treatmentId": 203
      },
      {
        "patientResultId": 305,
        "labTestDate": "2025-07-05T19:37:00",
        "result": "ugly",
        "specimen": "mukesh fluid",
        "observationDateTime": "07/04/25  7:39:00 PM",
        "labName": "mukiii",
        "treatmentId": 203
      }
    ]
  },
  {
    "testLoinc": "103",
    "testName": "Body Fluid LDH",
    "testPanelName": "Body Fluid LDH",
    "category": "Chemistry",
    "isPanel": false,
    "resultsData": [
      {
        "patientResultId": 306,
        "labTestDate": "2025-07-06T18:32:00",
        "result": "ok",
        "specimen": "Body fluid, unsp",
        "observationDateTime": "07/04/25  7:36:00 PM",
        "labName": "vijaya",
        "treatmentId": 203
      }
    ]
  },
  {
    "testLoinc": "104",
    "testName": "Abs Eos Manual",
    "testPanelName": "Abs Eos Manual",
    "category": null,
    "isPanel": false,
    "resultsData": [
      {
        "patientResultId": 307,
        "labTestDate": "2025-07-04T19:37:00",
        "result": "ok",
        "specimen": "Amniotic fluid",
        "observationDateTime": "07/04/25  7:39:00 PM",
        "labName": "Mahi",
        "treatmentId": 204
      }
    ]
  },
  {
    "testLoinc": "105",
    "testName": "Abs Eos Manual",
    "testPanelName": "Abs Eos Manual",
    "category": null,
    "isPanel": false,
    "resultsData": [
      {
        "patientResultId": 308,
        "labTestDate": "2025-07-05T19:37:00",
        "result": "not good",
        "specimen": "Amniotic fluid",
        "observationDateTime": "07/04/25  7:39:00 PM",
        "labName": "Mahi",
        "treatmentId": 205
      }
    ]
  }
]
</details>