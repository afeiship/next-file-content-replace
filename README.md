# next-replace-in-file
> File content replace for next

## install:
```bash
npm install -S afeiship/next-replace-in-file --registry=https://registry.npm.taobao.org
```

## usage:
```js
import 'next-replace-in-file';

nx.replaceInFile('./test.json', /appid:(.*)/,"appid:__FFEI__");
```
