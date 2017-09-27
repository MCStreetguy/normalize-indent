# normalize-indent
This module uses a RegEx based replacement to normalize the indentation of a single- or multiline string.  
The indentation is recognized with the first line and then removed from the beginning of any following line.

**Please notice** that the function may produce unexpected results if the indentation is not unified!

## Setup

#### Node.js
> $ npm install --save normalize-indent

```JavaScript
const normalizeIndent = require('normalize-indent');
```

#### Bower
> $ bower install normalize-indent

```HTML
<script src="bower_components/normalize-indent/lib/normalize-indent.js" charset="utf-8" />
```

#### Direct link
The modules can also be accessed directly through GitHub Raw Usercontent.

GitHub Raw:  [https://raw.githubusercontent.com/MCStreetguy/normalize-indent/master/lib/normalize-indent.js](https://raw.githubusercontent.com/MCStreetguy/normalize-indent/master/lib/normalize-indent.js)  
Shortened: [https://goo.gl/BjqiMj](https://goo.gl/BjqiMj)


## Usage
```JavaScript
var normalized = normalizeIndent('\t\t\tconsole.log("Hello World")\n\t\t\tconsole.log("Foobar")');
```
=>
```JSON
normalized: "console.log(\"Hello World\")\\nconsole.log(\"Foobar\")"
```
