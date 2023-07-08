# React Concurrency State Management

This project is created to demonstrate how to manage concurrent state modification.

## Start the demo

`npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Explanation
When we modify the same state from different places, and in the specific scenario that we need
the previous state value, we cannot ensure that at the moment of the modification, the variable
we have in our component `const [state, setState] = useState()` contains the last state as React
manages the changes asynchronously.

But, in order to avoid this problem, React has a way to allow us to use the real previous value,
and it's to use the same setState but instead of passing just the new value, the can pass a
function that will receive the previous state value and it should return the next value.

Example of normal usage of setState:

```javascript
const [state, setState] = React.useState({})

setState({ ...state, propertyOverride: { ...value } })
```

Example of using the real previous state value:

```javascript
const [state, setState] = React.useState({})

setState((prevValue) => ({ ...prevValue, propertyOverride: { ...value } }))
```
