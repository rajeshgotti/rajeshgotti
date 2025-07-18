---
hide:
  - toc
---

### if we use the services we need to provide them and inject them
### if @Injectable({ providedIn: 'root' })
### if it is root then we does not need to import in providers then we need to inject them in ts file
```title="ts.file"
ChargeMasterService = inject(ChargeMastersserviceService);
```

```title="service.file"
import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GlobalApiService } from '@core/http/global-api.service';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChargeMastersserviceService {
  apiService = inject(GlobalApiService)
  http = inject(HttpClient)

  constructor() { }

  postLabCharge(body: any): Observable<HttpResponse<any>> {
    return this.apiService.postData(environment.PostChargeMasterData, body)
  }

  postImportFile(body:any):Observable<HttpResponse<any>>{
    return this.apiService.postXML(environment.ImportFileChargeMaster, body)
  }

  GetLabCharge(): Observable<HttpResponse<any>> {
    return this.apiService.getData(environment.GetChargeMasterData)
  }
  GetRevenueCode(): Observable<HttpResponse<any>> {
    return this.apiService.getData(environment.GetRevenueCode)
  }
  deleteChargeMaster(data,status):Observable<HttpResponse<any>>{
    return this.apiService.deleteData(environment.GetChargeMasterData+'?ChargeMstId='+data+"&Status="+status);
   }
}
```
### Global services

### here we are naviagting to the globalservicess here we write the every respose where to naviagte and there response

```title="globalService.ts"
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';

const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
const downloadPdfhttpHeaders = new HttpHeaders().set('Content-Type', 'application/pdf');
const XML_HEADER = new HttpHeaders().set('Content-Type', 'application/xml');
const xm=new HttpHeaders().set( 'Content-Type','multipart/form-data' );
const audioHeader=new HttpHeaders().set('Content-Type','multipart/form-data');
const ZIP_HEADER = new HttpHeaders().set('Content-Type', 'application/octet-stream');

@Injectable({
  providedIn: 'root'
})
export class GlobalApiService {

  pdfHeader =  {
    'Accept': 'application/pdf',
    'Content-Type': 'application/json'
  }
  expHeader = {
    'Accept': 'application/force-download',
    'Content-Type': 'application/json'
  };

  constructor(private http: HttpClient) { }

  public getData(route: string): Observable<HttpResponse<any>> {
    return this.http.get(
         this.createCompleteRoute(route),
         { observe: 'response', headers: httpHeaders});
      }
  
   public getDatafromKpai(route: string): Observable<HttpResponse<any>> {
    return this.http.get('http://192.168.21.195:4990/kpaiservices/api/'+route,
         { observe: 'response', headers: httpHeaders});
    }
  
  public postDatafromKpai(route: string, body): Observable<HttpResponse<any>> {
    return this.http.post('http://192.168.21.195:4990/kpaiservices/api/'+route,
        body, { observe: 'response', headers: httpHeaders});
   }
  
  public getDataDirectUrl(route: string): Observable<HttpResponse<any>> {
    httpHeaders.append('Access-Control-Allow-Origin','*');
    return this.http.get(
         route,
         { observe: 'response', headers: httpHeaders});
      } 
  
  public postDataDirectUrl(route: string,body): Observable<HttpResponse<any>> {
    return this.http.post(
         route,body,
         { observe: 'response', headers: httpHeaders});
    }

  public postData(route: string, body): Observable<HttpResponse<any>> {
    return this.http.post(this.createCompleteRoute(route),
        body, { observe: 'response', headers: httpHeaders});
  }

  public updateData(route: string, body): Observable<HttpResponse<any>> {
    return this.http.put(this.createCompleteRoute(route),
    body, { observe: 'response', headers: httpHeaders});
  }

  public deleteData(route: string): Observable<HttpResponse<any>> {
    return this.http.delete(this.createCompleteRoute(route),
          { observe: 'response', headers: httpHeaders});
  }

  //#region Image base url CURD.
  public postImageBaseUrl<T = any>(route: string, body: T): Observable<HttpResponse<any>> {
    return this.http.post(
      this.createCompleteImageDBRoute(route),
      body,
      {
        observe: 'response', headers: httpHeaders
      }
    );
  }
  public postXMLBaseUrl<T = any>(route: string, body: T)   {
    return this.http.post(
      this.xmlPreview(route),
      body,{responseType:'text'}  
    );
  } 
  //sr1 start with  
  public postXML<T = any>(route: any, body: T) : Observable<HttpResponse<any>>  {
    return this.http.post(
      this.xmlPreview(route),
      body,{observe:'response'}  
    );
  }
  // end with Sr1 
  public getXMLBaseUrl<T = any>(route: string)   {
    return this.http.get(
      this.xmlPreview(route),
      {responseType:'text'}  
    );
  }
  //#endregion Image base url CURD.
  public postAIData(route: string, body): Observable<HttpResponse<any>> {
    return this.http.post(this.createAICompleteRoute(route),
        body, { observe: 'response', headers: httpHeaders});
  }
  public postImageData(route: string, body)  {
    return this.http.post(this.createCompleteImageDBRoute(route),body);
  }
  public getImageData(route: string)  {
    return this.http.get(this.createCompleteImageDBRoute(route));
  }
  public deleteImageData(route: string)  {
    return this.http.delete(this.createCompleteImageDBRoute(route));
  }
  public postTransAIData(route: string, body) {
    // const formData = new FormData();
    // formData.append('file', audioFile,'audio.mp3');
    return this.http.post(this.createAICompleteRoute(route),
        body);
  }
  private createCompleteRoute(route: string) {
    return `${environment.baseURL}/${route}`;
  }
  private createAICompleteRoute(route: string) {
    return `${environment.aiBaseURL}/${route}`;
  }
  /**
   * Create complete image DB route.
   * @param route router path of controller and method name `string`.
   * @returns `string`.
   */
  private createCompleteImageDBRoute(route: string): string {
    return `${environment.imageBaseUrl}/${route}`;
  }
  private xmlPreview(route: string): string {
    return `${environment.baseURL}/${route}`;
  }
  public downloadPdf(route: string){
    return this.http.get<any>(this.createCompleteRoute(route),
    { responseType: 'blob' as 'json', observe: 'response', headers: this.pdfHeader });
}
public downloadPdfWithBody(route: string,body){
  return this.http.post<any>(this.createCompleteRoute(route),body,
  { responseType: 'blob' as 'json', observe: 'response', headers: this.pdfHeader });
}
  public downloadPost(route: string,body){
    return this.http.post<any>(this.createCompleteRoute(route),body,
    { responseType: 'blob' as 'json', observe: 'response', headers: this.expHeader });
}

  public postXMLData(route: string, body) {
    return this.http.post(this.createCompleteRoute(route), body, 
    { responseType: 'text', observe: 'response',  headers: XML_HEADER });
  }

  public getXMLData(route: string) {
    return this.http.get(this.createCompleteRoute(route), 
    { responseType: 'text', observe: 'response',  headers: XML_HEADER });
  }
  public getZIPData(route: string) {
    return this.http.get(this.createCompleteRoute(route), 
    { responseType: 'blob', observe: 'response',  headers: ZIP_HEADER });
  }
  public getXMLDataDownload(route: string) {
    return this.http.get(this.createCompleteRoute(route), 
    { responseType: 'blob', observe: 'response', headers: XML_HEADER })
  }
  public postXMLDataDownload(route: string,body) {
    return this.http.post(this.createCompleteRoute(route),body,
     { responseType: 'blob'  , headers: httpHeaders })
  }
  public getDataFromJsonAssets(fileName:string):Observable<HttpResponse<any>>{
    return this.http.get(`assets/data/${fileName}`,
    { observe: 'response', headers: httpHeaders})
  }
  public getPdfData(route: string):Observable<HttpResponse<any>> {
    return this.http.get(this.createCompleteRoute(route),
     { responseType: 'blob', observe: 'response',  headers: downloadPdfhttpHeaders });
  }
  public getImage(route:string):Observable<HttpResponse<any>> {
   return this.http.get(this.createCompleteRoute(route), 
   { responseType: 'blob' ,observe:'response'})
  }

  /**
   * For text file get from assets.
   * @param fileName `file name - (string)`
   * @returns `Observable<HttpResponse<string>>`
   */
  public getDataTextFromAssets(fileName: string): Observable<HttpResponse<string>> {
    return this.http.get(`assets/data/${fileName}`, {
      responseType: 'text',
      observe: 'response'
    })
  }
  public openAiaudioStreaming(route,body) {
    return this.http.post(this.createOpenAICompleteRoute(route),body);
  }
  public openAipostData(route: string, body): Observable<HttpResponse<any>> {
    return this.http.post(this.createOpenAICompleteRoute(route),
        body, { observe: 'response', headers: httpHeaders});
  }
  private createOpenAICompleteRoute(route: string) {
    return `${environment.openAI}/${route}`;
  }

  public getDataFromJsonAssetsDocuments(fileName:string):Observable<HttpResponse<any>>{
    return this.http.get(`assets/documents/${fileName}`,
    { observe: 'response', headers: httpHeaders})
  }
public getIpAddressData(){   //y1 added ipaddress url
  return this.http.get(this.getIpAddress(),
  {observe:'response',headers:httpHeaders})
}

  public getIpAddress():string{
    return `${environment.ipUrl}`; 
  }
}
```