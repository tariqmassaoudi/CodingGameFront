import express from 'express'
import formidable from 'formidable'
import cors from 'cors'
let app=express()
app.use(cors())
app.post('/upload', (req, res) => {
    new formidable.IncomingForm().parse(req)
    .on('fileBegin', (name, file) => {
        file.path = __dirname + '/submissions/' + file.name
        console.log(file.path)
    })
    .on('file', (name, file) => {
      console.log('Uploaded file', name, file)
    })
    .on('error', (err) => {
      console.error('Error', err)
      throw err
    })
    .on('end', () => {
      res.send("uploaded the file")
    })
  })

  app.get('/run', (req, res) => {
    // let player1Submission=req.query.file1
    // let player2Submission=req.query.file2
    // getNewGameState=require("./submissions/file1.js")
    
    res.send({"dude":5})
    
  })

app.listen(1000, ()=> console.log("started "))