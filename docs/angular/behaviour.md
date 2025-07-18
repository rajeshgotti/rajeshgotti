---
hide:
 - toc
---

<details>
  <summary>RealTimeExample 1</summary>
  <img src="/images/behaviorsubject1.png" alt="Output image" style="max-width: 100%; height: auto;" />
</details>

<details>
  <summary>RealTimeExample </summary>
  <img src="/images/behaviorsubject2.png" alt="Output image" style="max-width: 100%; height: auto;" />
</details>
<details>
  <summary>RealTimeExample</summary>
  <img src="/images/behaviorsubject3.png" alt="Output image" style="max-width: 100%; height: auto;" />
</details>


### STEPS:

```title="steps"

Step:1 First we need to creat the behaviour subject in the service class
Step:2 where we need to set the data or send the data first we need to inject that servie
       ex:private private datasource=inject(LocalDataSourceService), 
Step:3 after that we need to set the data 
       ex:this.datasource.storevitalsUnitsStatus(hideUnits);(here the data is present in the hideUnits )
       it call that method and behaviour subject is updated 
Step:4
      ##child.ts (where we need to use it )
      first we need to inject that servie 

  ex: private private datasource=inject(LocalDataSourceService), 
      again we need to subcribe that in that component and data will be in the res 
  
  ex:
    this.localDataService.vitalsUnitsStatus$.pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
      this.hideUnits=res;
    })
```
```title="Example"
@Injectable({
  providedIn: 'root'
}) 

export class LocalDataSourceService {

// First we need to creat the behaviour subject in the service class

 private vitalsUnitsStatus = new BehaviorSubject<any>(false);
  vitalsUnitsStatus$ = this.vitalsUnitsStatus.asObservable();

 // here we need to creat a method storevitalsUnitsStatus in that same class 

  storevitalsUnitsStatus(value){
  this.vitalsUnitsStatus.next(value)
 }
}

```
```title="app.ts"
##app.ts 
   //where we need to set the data or send the data  

   //first we need to inject that servie 

private private datasource=inject(LocalDataSourceService), 

    //after that we need to set the data 
  this.datasource.storevitalsUnitsStatus(hideUnits);(here the data is present in the hideUnits )

  // it call that method and behaviour subject is updated 

 
```
```title="child.ts"
##child.ts (where we need to use it )
   // first we need to inject that servie 

private private datasource=inject(LocalDataSourceService), 

   //again we need to subcribe that in that component and data will be in the res 

 this.localDataService.vitalsUnitsStatus$.pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
    this.hideUnits=res;
    })
```