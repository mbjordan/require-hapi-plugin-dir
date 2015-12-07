## require-hapi-plugin-dir

A simple method of requiring all files in a directory, but specifically for [hapi](http://hapijs.com/) plugins that don't require `options`.

### Use:

__Directory Structure__

```
MyPlugins
    |- index.js
    |- myplugin1.js
    |- myplugin2.js
    |- myplugin3.js
```

__index.js__

```
require('require-hapi-plugin-dir')(module);
```

This package simply exports each plugin as an array. _See the "load multiple plugins" example under [Loading a Plugin](http://hapijs.com/tutorials/plugins#user-content-loading-a-plugin)_.
