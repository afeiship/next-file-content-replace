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

## usage:
```js
import 'next-replace-in-file';

nx.replaceInFile('test/**', [[/VERSION/gi, 'version']]);
```
