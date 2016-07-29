# forEach() Lab

## Objectives

1. Practice using `forEach`
2. Practice passing functions as callbacks

## Instructions

You'll be editing `index.js` and running tests as usual.

- Define a function, `iterativeLog()`, that accepts an array. Call `.forEach()`
  on this array, and inside the callback, log each element with the format
  `${index}: ${element}`.
- Define a function, `iterate`, that accepts a callback. Within the `iterate()`
  function, you should initialize an array — it can contain anything you want.
  Call `.forEach()` on this array, passing the callback to `.forEach()`. Then
  return the array that you initialized.
- Define a function, `doToArray` that accepts an array and a callback. Call
  `.forEach()` on the array, passing the callback as the `forEach` callback.

Remember, you can run the tests using `mocha.run()` in the browser if you'd
like — then read the results, refresh the page, and keep going afterwards.

## Resources

- [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

<p class='util--hide'>View <a href='https://learn.co/lessons/for-each-lab'>forEach() Lab</a> on Learn.co and start learning to code for free.</p>
