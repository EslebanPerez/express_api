//Usando objeto express
const express = require('express')
// App de express
const app = express()
app.use(express.json())
// Puerto en el que vamos a ver nuestra app: 'localhost:3000'
const port = 3000
// Con esto iniclizamos esta app
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
