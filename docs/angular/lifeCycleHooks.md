---
hide:
 - toc
---
### Angular provides lifecycle hooks to tap into key moments in a component's life: creation, change, and destruction.

```
1. ngOnChanges()
   Called when input properties change.
   @Input() data: string;

  ngOnChanges(changes: SimpleChanges) {
   console.log('Input changed:', changes);
  }

2. ngOnInit()
   Called once after the first ngOnChanges. Best place to initialize data.
  ngOnInit() {
    console.log('Component initialized');
    this.loadData();
  }

3. ngDoCheck() //not used
   Called during every change detection run (manual check for changes).
    ngDoCheck() {
     console.log('Change detection running');
   }

4. ngAfterContentInit()
   Called after Angular projects content into the component (using <ng-content>).
     ngAfterContentInit() {
      console.log('Content projected');
     }

5. ngAfterContentChecked()
    Called every time projected content is checked.
   ngAfterContentChecked() {
     console.log('Projected content checked');
   }

6. ngAfterViewInit()
   Called once after the component’s view (and child views) are initialized. 
   @ViewChild('myInput') inputRef!: ElementRef;
 
   ngAfterViewInit() {
    console.log('View initialized');
    this.inputRef.nativeElement.focus();
    }

7. ngAfterViewChecked()
   Called every time the view (and child views) are checked.
    ngAfterViewChecked() {
     console.log('View checked');
    }

8. ngOnDestroy()
   Called before the component is destroyed. Used to clean up (e.g. unsubscribe).
    ngOnDestroy() {
     console.log('Component destroyed');
      this.subscription.unsubscribe();
   }
```
### OverAll ga LifeCycle ante

```
2. ngDoCheck() edi ngOnChanges() tarvate call avtundi and konni sarlu ngOnChanges() anedi
   -> anni changes ni identify ceyadu at that time manam explicit ga changes ni find
      ceyali danikosame e ngDoCheck() ni use chestam

3. ngDoCheck() tarvta call ayye hook ngAfterContentInit() and 
    ngDoCheck() call aina tarvata e hook onlyOnce call avtundi
4. ngAfterContentChecked() e hook vachesi ngDocheck() tarvtane call avtundi but edi 
    evertyTime ngDocheck() call aina pratiSari call avtundi 
 
```