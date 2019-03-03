# next-file-content-replace
> File content replace for next

## install:
```bash
npm install -S afeiship/next-file-content-replace --registry=https://registry.npm.taobao.org
```

## usage:
```js
import 'next-file-content-replace';

nx.fileContentReplace('./test.json', /appid:(.*)/,"appid:__FFEI__");
```
