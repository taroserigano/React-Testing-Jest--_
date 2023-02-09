Use FindBy for async/await testing over getBy 

When using <Link />, wrap the component you're testing with <BrowserRouter> 

getByRole points to name like "pearagraph", "heading" 


Event ==> fireEvent.
expect(<inputElement>, {target: {value: "Added new stuff"} }) 

Mocks: might fail due to constant resettin, configure node_modules: scripts => utils - create JestConfig: resetMocks: false
better: Based on the last bug of testing, instead of changing node_modules, we can put:
"jest": {
    "resetMocks": false
  },
in package.json


screen.debug() - can see response 

for axios api testing, create __mocks__ and axios.js 



continuous testing

testwatch: 

in package.json: 

"scripts": {
"test": "jest",
"testwatch": "jest --watchAll" 
}, 

