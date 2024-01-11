import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello🐱‍🚀bienvedodo a la appfull')
})

app.listen(8000, () => {
    console.log("el servidor esta coriendo en http://localhost:8000")

})