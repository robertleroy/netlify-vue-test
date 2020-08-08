# Highlightjs

[website](https://highlightjs.org/)



#### import js
- *** Notice query selector below ***
- Consider *'pre code'* selector 

```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.1/highlight.min.js"></script>

  <script>
    document.addEventListener('DOMContentLoaded', (event) => {
      document.querySelectorAll('.codeblock code').forEach((block) => {
        hljs.highlightBlock(block);
      });
    });
  </script>
```

#### Choose Style
 
 - enable _hjls_gist.scss  *- or -*
 - import other stylesheets from:  
`https://cdnjs.com/libraries/highlight.js/`


#### HTML
- Add pre > code elements
- Specify language in class of either - *optional* -

```html
  <pre class='codeblock css'><code>

    // highlighted code here

  </code></pre>
```

~~~~~~~~~~~~~~~~~~~~~~~~~