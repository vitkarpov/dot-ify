[![NPM Version](http://img.shields.io/npm/v/dot-ify.svg?style=flat)](https://npmjs.org/package/dot-ify)
[![Build Status](http://img.shields.io/travis/royriojas/dot-ify.svg?style=flat)](https://travis-ci.org/royriojas/dot-ify)

# dot-ify
make dot templates 'requireable' when using browserify

- name the exported function as the file being required
- exports an object that contains a render method which is the compiled template

## Install

```bash
npm i --save dot-ify
```

## Usage

In code

```javascript
var b = browserify();

var dotify = require('dot-ify');

// regular way to include it
b.transform(dotify);
// make it global
b.transform({ global: true}, dotify);
```

or in the `package.json` file

```javascript
{
  "browserify" : {
    "transforms": [
      "dot-ify"
    ]
  }
}
```

Then in your code

```javascript
var tpl = require('./some-tpl.dot')
var content = tpl.render({
  some:'variable here'
});
```

## License

[MIT](./LICENSE)

## Changelog

[Changelog](./changelog.md)
