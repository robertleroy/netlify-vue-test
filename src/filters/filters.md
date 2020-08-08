## Filters

For Global Registration...
```js
import "./filters/filters"; 
```

Done.





For Local Registration...

#### import
```js 
import { filterName } from "./filters/filters"; 

filters: {
  "filterName": filterName
},
```

<!-- // local format
export const titlecase = (value) => {
  if (!value) return '';
  value = value.toString().toLowerCase()  ;
   return value.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
};
-->

<!-- // global format 
Vue.filter('titlecase', (value) => {
  if (!value) return ''
  value = value.toString().toLowerCase()  ;
   return value.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
}); 
-->
