//connexion
const express = require('express')
const { Gettodolist } = require('./db_utils')
const app = express()
const port = 3000

const db = require ('./db_utils')
const fct = require ('./html')


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

app.get('/get-todo', (req, res) => {
      db.Gettodolist(
      function (error, results, fields){
        let html = fct.ShowToDoList(results)
        res.send(html)
     })
})

app.get("/get-todo-json", (req, res) => {

  console.log("oui")
  db.Gettodolist(
    function (error, results, fields){
    res.json (results)
   })
})


//ajouter une tache
app.post('/Ajouter', (request, response) => {
  console.log (request)
  let formData = [request.body['taches'], request.body['membre'],request.body['priorite'], request.body['statut'], request.body['deadline']]
  db.insertTask (formData, function(){
  response.redirect ("/get-todo")
  console.log (request.body)
  })
})

// supprimer une tache
app.post('/supprimer', (request, response) => {
  console.log ("request",request)
  let formData = [request.body['id']]
  console.log ("formData",formData)
  db.deleteTask (formData, function(){
    response.redirect ("/get-todo")
    console.log (request.body)
  })
})

// modifier une tache
app.post('/Modifier', (request, response) => {
  console.log ("request",request)
  let formData = [request.body['taches'], request.body['membre'],request.body['priorite'], request.body['statut'], request.body['deadline'],request.body['id']]
  console.log ("formData",formData)
  db.updateTask (formData, function(){
    response.redirect ("/get-todo")
    console.log (request.body)
  })
})



app.listen(port, () => {
    console.log(`Connection au port ${port}`)
})
