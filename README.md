# next-replace-in-file
> File content replace for next

## install:
```bash
npm install -S afeiship/next-replace-in-file --registry=https://registry.npm.taobao.org
```

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

## globby
- https://github.com/sindresorhus/globby

## options
- https://github.com/mrmlnc/fast-glob#options-1

> Not fully, because `fast-glob` does not implement all options of `node-glob`. See table below.

|  node-glob   |                        fast-glob(😎)                        |
| :----------: | :---------------------------------------------------------: |
|    `cwd`     |                        [`cwd`](#cwd)                        |
|    `root`    |                              –                              |
|    `dot`     |                        [`dot`](#dot)                        |
|  `nomount`   |                              –                              |
|    `mark`    |            [`markDirectories`](#markdirectories)            |
|   `nosort`   |                              –                              |
|  `nounique`  |                     [`unique`](#unique)                     |
|  `nobrace`   |         [`nobrace`](#nobrace) or [`brace`](#brace)          |
| `noglobstar` |   [`noglobstar`](#noglobstar) or [`globstar`](#globstar)    |
|   `noext`    |       [`noext`](#noext) or [`extension`](#extension)        |
|   `nocase`   |           [`nocase`](#nocase) or [`case`](#case)            |
| `matchBase`  |                  [`matchbase`](#matchbase)                  |
|   `nodir`    |                  [`onlyFiles`](#onlyfiles)                  |
|   `ignore`   |                     [`ignore`](#ignore)                     |
|   `follow`   | [`followSymlinkedDirectories`](#followsymlinkeddirectories) |
|  `realpath`  |                              –                              |
|  `absolute`  |                   [`absolute`](#absolute)                   |


## multiple replace
- https://github.com/afeiship/next-array-replace
