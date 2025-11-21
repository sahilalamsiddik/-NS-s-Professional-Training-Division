// 1. reading environment values


const myName = process.env.MY_NAME
const myPlace = process.env.MY_CITY

MY_NAME=Sahil
MY_CITY=Bengaluru 

console.log('hello, my name is', myName)
console.log('i live in', myPlace)




// 2. file organizer made in a simple way


const fs = require('fs')
const path = require('path')

const home = './wow'

fs.readdir(home, (err, items) => {
  if (err) {
    console.log('i cannot open the folder')
    return
  }

  items.forEach(one => {
    const fullPath = path.join(home, one)

    if (fs.lstatSync(fullPath).isDirectory()) return
    const kind = path.extname(one).slice(1) || 'others'
    const newFolder = path.join(home, kind)

    if (!fs.existsSync(newFolder)) {
      fs.mkdirSync(newFolder)
    }

    const newPlace = path.join(newFolder, one)

    fs.rename(fullPath, newPlace, () => {
      console.log(one, 'moved to', kind)
    })
  })
})
