# Simple Tree of array json Object

## It's a simple study case

### The idea is to create a JS tree implementation of an array of JSON objects related each other and provides some computation functions like How many objects are related to a given root object?

### As it is a study case, it will be updated as necessary, or feel free to contribute to this one.

## Following some utility commands:

- Install the required modules:
``` bash
npm install 
````
- Execute the tests whenever you want: (***PS: it's required to install the modules previously***)

``` bash
npm run test 
````

- To compile this one to production:  (***PS: it's required to install the modules previously***)

``` bash
npm run compile

```
### Usage:

```javascript
Example:
    
    import Tree from '/mx-jstree'

    (let|const) myTree=new Tree(aGivenArrayOfObjects)
```    


### Features:

- Tree.count(id) -> it provides the number of JSON objects related to a given id
