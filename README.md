# normalize-indent
Reduces indentation of a (multiline) string.

## Setup

#### Node.js
> $ npm install --save normalize-indent

```JavaScript
const normalizeIndent = require('normalize-indent');
```

#### Web
> $ bower install normalize-indent

```HTML
<script src="bower_components/normalize-indent/lib/normalize-indent.js" charset="utf-8" />
```

#### Usage
```JavaScript
var normalized = normalizeIndent('\t\t\tconsole.log("Hello World")\n\t\t\tconsole.log("Foobar")');
```
> normalized == 'console.log("Hello World")\\nconsole.log("Foobar")'
