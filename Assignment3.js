
// Event Loop explanation
// The event loop is like a helper that keeps Node.js moving.
// Slow tasks go to the background. When they finish, the event loop brings them back.
// This lets Node run many things without getting stuck.








// writing to a file using stream
const fs = require('fs')
const writeFile = fs.createWriteStream('mytext.txt')
writeFile.write('hello, i am writing this using a stream\n')
writeFile.write('streams write small bits of data one after another\n')
writeFile.end()

// reading the file using stream
const readFile = fs.createReadStream('mytext.txt', 'utf8')

readFile.on('data', chunk => {
  console.log('reading chunk:')
  console.log(chunk)
})

readFile.on('end', () => {
  console.log('finished reading')
})
