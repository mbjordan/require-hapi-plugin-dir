## require-hapi-plugin-dir

[![Build Status](https://travis-ci.org/mbjordan/require-hapi-plugin-dir.svg?branch=master)](https://travis-ci.org/mbjordan/require-hapi-plugin-dir)

A simple method of requiring all files in a directory, but specifically for [hapi](http://hapijs.com/) plugins that don't require `options`.

### Use:

__Directory Structure__

```
MyPlugins/
    |- index.js
    |- myplugin1.js
    |- myplugin2.js
    |- myplugin3.js
```

__index.js__

```javascript
module.exports = require('require-hapi-plugin-dir')(module);
```

This package simply exports each plugin in a flat array. Given the example directory structure above, this array would be equivalent to:

```javascript
module.exports = [
    require('./myplugin1'),
    require('./myplugin2'),
    require('./myplugin3')
];
```

_See the "load multiple plugins" example under [Loading a Plugin](http://hapijs.com/tutorials/plugins#user-content-loading-a-plugin) for more info_.

---

### Alternate directory structure

```
MyPlugins/
    |- index.js
    |- myplugin1.js
    |- myplugin2.js
    |- myplugin3.js
    |- MyOtherPlugins/
        |- index.js
        |- mypluginA.js
        |- mypluginB.js
        |- mypluginC.js
```

Which would present as:

```javascript
module.exports = [
    require('./mypluginA'),
    require('./mypluginB'),
    require('./mypluginC'),
    require('./myplugin1'),
    require('./myplugin2'),
    require('./myplugin3')
];
```

---

## API

### `reqHapiPluginDir(module[, options]);`

#### `module`

Node's `module` object contains a property named `filename`, thus it is important to pass this object from the `index.js` file which is being called.


#### `options`

_optional_ options (haha!) object.

* `include` - An array of hapi plugins to include manually.
* `flat` - If set to true, the above directory structure would only include files from `MyPlugins` and completely ignore the `MyOtherPlugins` directory. _Default: false_.
