---
hide:
  - toc
---
<details>
  <summary>custom pipe Notes 1</summary>
  <img src="/images/customPipe1.jpg"  alt="Output image" style="max-width: 100%; height: auto;" />
</details>
<details>
  <summary>custom pipe Notes 2</summary>
  <img src="/images/customPipe2.jpg"  alt="Output image" style="max-width: 100%; height: auto;" />
</details>

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
        name: 'pipe', --- name of the pipe 
        standalone: true
    })

export class PipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value*100;
  }
(here we need to mention there types if you do not know the type when take any
   - the complete data  will come to the value )
}

where we are using the pipe 
--- app.ts ---- 
we need to import this pipe in the imports 
import:[PipePipe]
number:1

---- app.html ---- 

{{number | pipe(Name of the pipe )}}

# sending multiple parameter to the pipe 
 @for(item of array1 ;track item ){
  <li>{{item.value  | pipe : item.name : "paramater2"   }}</li>
} 
@empty{
  <li>there is no data </li>
} 

pipe
  transform(value: any,params:string,params2:string): any {
    return value + params + params2
  }
-- differnce between purepipe and impurepipes ----

by default the pipes are impure 
- for eg if we call the pipe with value of 123 
  and we sent the same data 123 when agin the pipe does not call this is called  pure pipe 
- impure pipes if we semt the save data again and again the pipes calls 

we we want make it inpure
@Pipe({
  name: 'pipe',
  standalone: true,
  pure:false
})

if we what to use that pipe in ts file  we need to inject it in
private StrSpaceAbbrPipe= inject(StrSpaceAbbrPipe)
we need to import in providers 
  providers: [
    StrSpaceAbbrPipe
  ]

  if we what to use in the html 
    imports: [
    StrSpaceAbbrPipe
  ],

```
