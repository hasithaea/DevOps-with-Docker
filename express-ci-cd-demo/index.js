const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>CI/CD pipeline demo, DevOps with Docker, University of Helsinki MOOC</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})