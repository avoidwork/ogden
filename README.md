# ogden
Basic English tokenizer.

#### Requirements
- Set

#### Example

```javascript
const ogden = require("ogden");

let tokens = ogden("Whether you use constructors or literals, your regular expressions can include the following elements and flags. The elements describe the pattern you want to match, while the flags specify how the matching should be performed.");
```

The `tokens` variable will now be an Object of categorized tokens:

```javascript
{
  "adjectives": [
    "be"
  ],
  "compound": [],
  "directions": [
    "in",
    "on",
    "to"
  ],
  "international": [
    "liter",
    "you"
  ],
  "qualitiesGeneral": [
    "regular"
  ],
  "qualitiesOpposites": [
    "low"
  ],
  "pronouns": [
    "he",
    "i",
    "it",
    "me",
    "us",
    "you"
  ],
  "operations": [
    "a",
    "at",
    "be",
    "for",
    "he",
    "how",
    "i",
    "in",
    "on",
    "or",
    "the",
    "to",
    "while",
    "you"
  ],
  "thingsGeneral": [
    "form",
    "use"
  ],
  "thingsPicturable": [
    "ant",
    "flag",
    "match",
    "wing"
  ],
  "verbs": [
    "be"
  ]
}
```

## How can I load ogden?
ogden supports AMD loaders (require.js, curl.js, etc.), node.js & npm (npm install ogden), or using a script tag.

## License
Copyright (c) 2017 Jason Mulligan
Licensed under the BSD-3 license
