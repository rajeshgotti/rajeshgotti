---
hide:
  - toc
---

### In Angular, encapsulation refers to the ability of a component to control how its internal styles and templates are applied, which can help avoid style leakage and conflicts between components.

### Angular provides three encapsulation modes for component styles:

### Emulated (default) - Styles are scoped to the component, with Angular automatically adding attributes to elements to avoid style conflicts. Native - Uses the browser's native Shadow DOM to encapsulate styles and templates, isolating them completely. None - No encapsulation, styles are applied globally to the entire application. Example of Encapsulation in Angular: Consider a simple Angular component:


```title="app.component.ts"
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
           <div class="container">
            <h1>Welcome to Angular Encapsulation Example</h1>
            <p>This is a paragraph with component-specific styles.</p>
           </div>
          `,
  styles: [
    `
      .container {
        background-color: lightblue;
        padding: 20px;
      }
      h1 {
        color: darkblue;
      }
      p {
        color: darkgreen;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated // Default encapsulation
})
export class AppComponent {}
```
### Encapsulation Modes:

### 1.Emulated (Default):

### The styles defined in the component are scoped to it. Angular uses attributes like ng-content to isolate the styles. In this example, the h1 and p tags will have styles applied only within this component's template.

### 2.Native (Shadow DOM):

### In this mode, Angular will use the browser's native Shadow DOM to encapsulate the styles. Styles will not leak outside the component, and external styles will not affect it. To use Native encapsulation, update the encapsulation property like this:

### syntax:
```
encapsulation: ViewEncapsulation.Native
```
## 3.None (Global Styles):

### This mode removes any encapsulation, meaning the styles defined in the component will be global and affect the entire application.
```
encapsulation: ViewEncapsulation.None
```