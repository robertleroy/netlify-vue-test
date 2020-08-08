
import Vue from 'vue';
import dateFormat from './dateFormat.js'


Vue.filter('date', (value="", filter="") => {
  if (!value) return '';
  return dateFormat(value, filter);
});


Vue.filter('titlecase', (value) => {
  if (!value) return ''
  value = value.toString().toLowerCase()  ;
   return value.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
});

Vue.filter('sentencecase', (value) => {
  if (!value) return ''
  value = value.toString()  ;
   return value.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,function(c){return c.toUpperCase()});
});

Vue.filter('uppercase', (value) => {
  if (!value) return '';
  value = value.toString();
  return value.toUpperCase();
});  

Vue.filter('lowercase', (value) => {
  if (!value) return '';
  value = value.toString();
  return value.toLowerCase();
});

Vue.filter('prefix', (value, str) => {
  if (!value) return '';
  value = value.toString(); 
  return str.concat(value);
});

Vue.filter('suffix', (value, str) => {
  if (!value) return '';
  value = value.toString(); 
  return value.concat(str);
});

Vue.filter('decimal', (value, d=0) => {
  if (!value) return '';
   value = value * 1;
  return value.toFixed(d);
});

Vue.filter('number', (value, d=0) => {
  if (!value) return '';
  value = value * 1;
  value = value.toLocaleString('en', {maximumFractionDigits:d, useGrouping:false})*1  
 return value;
});

