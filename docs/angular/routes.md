---
hide:
 - toc
---

### Initialisation of routes

```title="all Imports"
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

 export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
 };

Note = (routes) i am rendaring another component app.routes.ts
```

```title="app.route.ts"
import { Routes } from '@angular/router';
import { app } from '../../server';
import { ChildComponent } from './child/child.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

{path:'',component:AppComponent},
{path:'child',component:ChildComponent},

];
```
### html roter link
```title="html"
<button [routerLink]="['/child']">Go to Child</button>
<router-outlet></router-outlet>

 ----- ts ---
  imports: [RouterModule],
```  
### Button click navigate
```title="html.file"
<button [routerLink]="['/child']">Go to Child</button>
<button type="button" (click)="navigate()">navigate</button>
<router-outlet></router-outlet>

   --- ts file ---
private router=inject(Router)
navigate():void{
   this.router.navigate(['child'])
  this.router.navigateByUrl('child')
}
```
### Router Parameter
### Passing and getting the paramter of the url

```title="app.routes"

export const routes: Routes = [
   {path:'product/:productId',component:ParameterComponent},
];

  --- app.html ---
<a [routerLink]="['/product', 101]">View Product 101</a>
<router-outlet></router-outlet>

   --- app.ts --
  imports: [RouterModule],

 --- parameter.hmtl ---
<h2>Product Details</h2>
<p>Product ID: {{ productId }}</p>

--- parameter.ts ---
  productId: string | null = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('productId');
  }
```

### Quaryparams
### passing the quary params app.html

```
 <a [routerLink]="['/QuaryparamsComponent']" [queryParams]="{ term: 'shoes', page: 2 }">
  Search for Shoes (Page 2)
 </a>

   --- ts ---
  imports: [RouterModule],

  --- Quaryparams.html ---
<p>Search Term: {{ searchTerm }}</p>
<p>Page: {{ page }}</p>

  --- ts (getting that quaryparams ) ---

import { ActivatedRoute } from '@angular/router';

export class QuaryparamsComponent {
  searchTerm: string | null = '';
  page: string | null = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.searchTerm = params.get('term');
      this.page = params.get('page');
    });
  }
}
```
### Canactivate

### this is used if the user can navigate to that component or not it will call intially to that service file

```
we need to creat a service 
--- // auth.guard.ts --
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

-- example 1 --
export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = false; // change to true to allow access
  const router = inject(Router);

  if (!isAuthenticated) {
    alert('Access Denied! Please log in.');
    router.navigate(['/']);
    return false;
  }

  return true;
};
--- example 2 --- 

// auth.service.ts
import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = false; // Replace with real auth check
  console.log('Trying to access:', state.url);
  return isAuthenticated;
};


--- app.routes ---
import { authGuard } from './app/auth.service';
import { DashboardComponent } from './app/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
];


intianlly the authserve will hit and if it returns true then the component will 
load of it is false the component will not load 

```