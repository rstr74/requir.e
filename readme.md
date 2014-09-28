#requir.e

Use this module to require javascript files and eval them in the current scope.
All derived files then can use the same method to requir.e other subclasses.

``` js
require("requir.e");

// set package root ./src
requir.eRoot("src");

// requires the file: ./my/domain/SomeClass.js
requir.e("my.domain.SomeClass");

// Then make the instance
var someclass = new my.domain.SomeClass();
```
