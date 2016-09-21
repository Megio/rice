# Rice
Rice is a library of web components.
![rice dependencies testing](https://david-dm.org/wanbinkimoon/rice.svg)
## Structure
Rice is organized in three main **rice fields**:
```
rice/
└─ bases
└─ blocks
└─ elements
```
Ecach of these three rice fields contain **grains**.  
A grain is a single module. Each grain is organise as follow:
```
foobar/
└─ foobar.sketch
└─ foobar.html
└─ foobar.sass
└─ foobar.css
└─ foobar.min.css
└─ foobar.js
└─ build/
   └─ _config.sass
   └─ _base.sass
```
### Rice fileds
**Rice** fields have reach the global layout at different depths.
#### Basees
Includes grains that affects the global behaviour of the page and use **variables** as dymaic component.
#### Blocks
Include grains that build the base of the layout of the page. Those parts uses **variables** as dymaic componens and the base of their `css` is usualli inlined in the head of the page to induce the perception of a better performance – cfr. [Denys Mishunov: Why Performance Matters] (https://www.youtube.com/watch?v=j9TrSkLZa5A)
#### Elements
Include single elements of the page like `button`, `a`, `code` etc... Those grains are structired as sass **mixin** so to made really easy to import them in dofferent projects.

##Usage
The repo provide a `gulpfile` for  sass watch and compiling and include `browser-sync` as internal server
### Server
Simply `cd` into your folder and run for a basic server based on your root folder.
```
npm run server
```
If you need to tunneling your work out in the world simply
```
npm run server:tunnel
```
you can edit any preference by changing the preference in the `bs-config`

### Gulpfile
#### SASS compiling
Run   
```
gulp sass
```
for a single compile of every `*.sass`; or
```
gulp sass:min
```
for a minified output
```
gulp sass:watch
```
to watch and compile `*.sass` on the fly – provide either min and human readable css.

## Aknowledgements
**Rice** is a project developed with <3 by [Nicola Bertelloni](mailto:nicola.bertelloni@gmail.com)
