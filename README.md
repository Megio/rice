# Rice
Rice is a library of web components.

## Structure
Rice is organized in three main __rice fields__: 

```
rice/
└─ bases
└─ blocks
└─ elements
```

Ecach of these three rice fields contain __grains__.  
A grain is a single module. Each grain is organise as follow: 

```
foobar/
└─ foobar.sketch
└─ foobar.html
└─ foobar.sass
└─ foobar.js
```

### Rice fileds 
Rice fields have reach the global layout at different depths.
#### Basees
Includes grains that affects the global behaviour of the page and use __variables__ as dymaic component. 
#### Blocks 
Include grains that build the base of the layout of the page. Those parts uses __variables__ as dymaic componens and the base of their `css` is usualli inlined in the head of the page to induce the perception of a better performance – cfr. [Denys Mishunov: Why Performance Matters] (https://www.youtube.com/watch?v=j9TrSkLZa5A)
#### Elements
Include single elements of the page like `button`, `a`, `code` etc... Those grains are structired as sass __mixin__ so to made really easy to import them in dofferent projects.

## Contacts
### Author
Nicola Bertelloni
### Mail
[nicola.bertelloni@gmail.com](mailto:nicola.bertelloni@gmail.com)
