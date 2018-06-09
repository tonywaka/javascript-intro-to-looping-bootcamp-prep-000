array = []
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
     array = array.concat(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
    }
  return (array)
  }
forLoop(array)

function whileLoop(n) {
  while (n > 0) {
    console.log(`${n}`)
    --n
  }
  return ('done')
}
whileLoop(10)

myArray = ['a','b','c','d','e']
function doWhileLoop(array) {
  function maybeTrue() {
  return array.length > 0
}

do {
  array.splice(0, 1)
} while (maybeTrue());
}
doWhileLoop(myArray)
