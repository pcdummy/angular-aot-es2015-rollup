# Angular 4 AOT Example with es2015 FESM, Rollup, Buble, Uglify, PostCSS

This repository adds PostCSS

```
import 'css/foo.css';
```

to [@OasisDigital/angular-aot-es2015-rollup](https://github.com/OasisDigital/angular-aot-es2015-rollup).

It also adds a second environment so you have prod/dev envs where the dev environment runs through ngc but doesn't get transpiled after that at all
(no Bable/Buble so you have ES2015 in the browser).


### Build it

- $ `npm i`
- $ `npm run dev` or `npm run prod`

### AUTHORS

- Kyle Cordes (original Author)
- René Jochum (extensions)

### LICENSE

MIT
