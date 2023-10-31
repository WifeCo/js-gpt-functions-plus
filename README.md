
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

**⚠️ WARNING ⚠️**
> NEVER PASS RAW USER INPUT WITHOUT VALIDATING IT FIRST. JSGPTFUNCTIONSPLUS UTILIZES THE JS FUNCTION CONSTRUCTOR, WHICH HAS THE POTENTIAL TO CARRY OUT ARBITRARY CODE. A MALICIOUS USER COULD EMPLOY THIS TO EXECUTE DAMAGING CODE ON YOUR SYSTEM. IT IS VITAL TO ASSESS USER INPUT AND SANITIZE IT BEFORE USAGE.

.createFunction() is a method that takes a string as the function description or an object with the following attributes as its parameter:

    func: a string that represents the type of the function
    desc: a string that delineates the code's function
    model: the name of the OpenAI model utilised to administer the code
    evaluate: a function that translates the string into a functional code `Default: Function Constructor`

The .createFunction() method returns a function that can be stirred with arguments to enact the code contained in the `func` property.

It is important to note that the .createFunction() function does not carry out the code promptly, but instead offers a function that could be engaged to execute the code at a later time.

### **GPTFunctions.prototype.getResult()**
