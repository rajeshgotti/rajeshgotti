---
hide:
 - toc
---

```
--------------NGRX-----------
redux pattern lo manaki 3 steps vuntai 
1. create state
2. write Actions and
3. define Reducer

create action folder with anyName ex:action.ts

here manam oka method ni use cheyali adi ngrx store lo vuna
createAction ane method ni create ceyali and also imort it form @ngrx/store

ex: export const increment=createAction('actionName');actionName must be unique name


SO reducer ni create chesam kabbati same action lo lage ekkada kuda manam
ngrx lo vuna createReducer ane method ni create ceyali e method lo 
state lo manam pettina initialState ni here tiskovali 2nd actions ni On cheskovali
so use on and also import it form @ngrx/store
so e on lo manam unique ga ichina names ni ivvali and state ni tiskovali

```