# next-replace-in-file
> File content replace for next

## install:
```bash
npm install -S afeiship/next-replace-in-file --registry=https://registry.npm.taobao.org
```
## globby
- https://github.com/sindresorhus/globby

## options
- https://github.com/mrmlnc/fast-glob#options-1

## multiple replace
- https://github.com/afeiship/next-array-replace

## usage:
```js
import 'next-replace-in-file';

// basic usage:
nx.replaceInFile('test/**', [[/VERSION/gi, 'version']]);
nx.replaceInFile(['**','!node_modules'], [[/VERSION/gi, 'version']]);

// or you can multiple replace:
nx.replaceInFile(
  'test/**',
  [
    [/VERSION/gi, '_VERSION_'],
    [/file/g, 'FILE'],
    [/description/g,'DESC'],
  ],
  {
    ignore: ['*/test.js']
  }
);
```
