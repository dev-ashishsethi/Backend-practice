const fs = require("fs")

const data = "aasd asdasffasf as fasf "


fs.writeFile("example.txt", data, (err) => {
  if (err) throw err
  console.log("created file!")

  fs.appendFile("example.txt", data, (err) => {
    if (err) throw err
    console.log("file appended successfully")
  })
})