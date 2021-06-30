## STYLUS ##
```stylus
stylus --compress -d -w ./assets/stylus/index.styl -o ./public/css/index.css`
```

## PUG ##
```pug
pug index.pug -P -w -b ./src --out ./src/public

## Render all files in './src/pug' and './src/pug/includes' directories to './src/public'
pug ./*.pug ./pugs ./pugs/includes --out ./public

## 
pug ./*.pug ./pugs ./pugs/includes -P -w --out ./public

```
```bash
-o --out <dir> output the rendered HTML or compiled JS to <dir>
-p --path <path> filename used to resolve includes
-b --basedir <path> path used as root directory to resolve absolute includes
-w --watch watch files for changes and automatically re-render
-E --extension <ext> specify the output file extension
-P --pretty compile pretty HTML output
-c --client compile function for client-side
--name-after-file name the template after the last section of the file path (requires --client and overidden by --name)
--doctype <str> specify the doctype on the command line (useful if it is not specified by the template)
-h --help output usage info
```

pug -p src/pugs/includes