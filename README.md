
<div align=center>

# JSGPTFunctionsPlus

### **Change ordinary text into functional Javascript Functions**


[![NPM](https://img.shields.io/npm/l/gpt-functions?style=flat-square&label=License)](https://github.com/WifeCo/js-gpt-functions-plus/blob/master/LICENSE) [![CodeFactor](https://img.shields.io/codefactor/grade/github/WifeCo/js-gpt-functions-plus?style=flat-square&label=Code%20Quality)](https://www.codefactor.io/repository/github/WifeCo/js-gpt-functions-plus) [![NPM](https://img.shields.io/npm/dw/gpt-functions?style=flat-square&label=Downloads)](https://npmjs.com/package/gpt-functions)

</div>

## Installation

```shell
npm install js-gpt-functions-plus
```

## Usage

### Initialization of the GPT Functions class

```js
import { GPTFunctions } from 'js-gpt-functions-plus'

const API_KEY = 'your-openai-api-key-here'
const gpt = new GPTFunctions(API_KEY)
```

### **.createFunction()**

#### Example Usage

```js
const celsiusToFahrenheit = await gpt.createFunction('convert the given temperature from Celsius to Fahrenheit')

console.log(celsiusToFahrenheit(25))
console.log(celsiusToFahrenheit(10))
```
**Output**
```js
77
50
```

#### Using the Options Object (Suggested method)
```js
const permutations = await gpt.createFunction({
    func: '(array) => array',
    desc: 'Return all permutations of the passed array'
})

console.log(permutations([1,2,3]))
```

**Output**
```js
[
  [ 1, 2, 3 ],
  [ 1, 3, 2 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 3, 1, 2 ],
  [ 3, 2, 1 ]
]
```
