
const express = require('express')
const app = express()
const port = 3001
const axios = require("axios")
const { response } = require('express')
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get(`/todoss`, (req, res) =>{

    axios.get("https://jsonplaceholder.typicode.com/todoss/1")
    .then(response => {
    console.log(response.data)
    })
    .catch(err=> {
        console.error(err)

    })
    
  res.send("1234")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })