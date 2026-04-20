# Example setup using Jest and EJS

It can be a bit tricky to see how to use EJS modules with Jest. The error message you get is not very helpful. This is a simple example of how to set up Jest to work with EJS.

1. Look in `package.json`
1. Under `scripts` you will see `"test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"` instead of just `"test": "jest"`
1. The next necessary condition is to define this set of properties and values
  ```
  "jest": {
    "testEnvironment": "node",
    "transform": {}
  }
  ```
1. This is what the documentation is trying to explain https://jestjs.io/docs/ecmascript-modules but it is not very clear.


### Example error

```
npm test book.test.js 

> book-library@1.0.0 test
> jest book.test.js

 FAIL  ./book.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.
    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /home/USER/Desktop/CYF/Module-Data-Flows/debugging/book-library/book.test.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import createBook from "./book";
                                                                                      ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1505:14)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.194 s
Ran all test suites matching /book.test.js/i.
```
