//importation de la librairie
var mysql      = require('mysql');

 
function connectToMySQL(){
  //établissment de la connection avec la base de donnée
  //envoie du mot de passe / identifiant nécessaire
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Mimi1980',
    database : 'todolist'
  });
  
  connection.connect();

  return connection
}



//c'est la connection qui nous permet d'envoyer des
//requêtes à la base de donnée
function Gettodolist(fonction_traitement_resultat_bdd){
  let connection = connectToMySQL()
  let query = "SELECT * FROM task"

  connection.query(query, fonction_traitement_resultat_bdd);
  connection.end();

  // il n 'y a pas de return 
}

// connection.query(query, fonction_insertion) dans le cas ou je ne veux pas vérifier l'erreur

function insertTask(values_to_insert,apres_traitement){
  let connection = connectToMySQL()
  let query = `INSERT INTO  task (taches, membre,priorite, statut, deadline) VALUES (?,?,?,?,?)`

  connection.query(query,values_to_insert,(error,results) =>{
    if(error){
      console.log(error)
    }

    console.log("results", results)
    console.log("après insertion")

    connection.commit()
    connection.end()

    apres_traitement()
    console.log (apres_traitement)
  })
}

function deleteTask(values_to_delete,apres_suppression){
  let connection = connectToMySQL()
  let query = `DELETE FROM task WHERE id = ?` 
  console.log(values_to_delete)

 connection.query(query,values_to_delete, (error,results) =>{
    if(error){
      console.log(error)
    }
    console.log("results", results)
    console.log("après suppression")

    connection.commit()
    connection.end()

    apres_suppression()
    console.log(apres_suppression)
  })
}

function updateTask(values_to_update,apres_modification){
  let connection = connectToMySQL()
  let query = `UPDATE task SET taches=? , membre=? ,priorite =? , statut=?, deadline=? WHERE id = ?` 
  console.log(values_to_update)

 connection.query(query,values_to_update, (error,results) =>{
    if(error){
      console.log(error)
    }
    console.log("results", results)
    console.log("après modification")

    connection.commit()
    connection.end()

    apres_modification()
    console.log(apres_modification)
  })
}


  function padTo2Digits (num){
    return num.toString().padStart (2, '0');
  }

  function formatDate(date){
    return[
      padTo2Digits (date.getDate ()),
      padTo2Digits (date.getMonth () +1),
      date.getFullYear(),
    ].join ('/');
  }


function dDay() {
  let inputFormat = Date();
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat)
  return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-')
  if (Date < dDay) {

  }
}


function statutTache (statut){
switch (statut) {
    case '1':
    statut  = "A faire";
    break;
    case '2':
    statut = "En cours";
    break;
    case '3':
    statut  = "Terminée";
    break;
    default:
      statut  = "A confirmer";
}
return statut
}

function prioTache (priorite){
switch (priorite) {
  case '1':
  priorite  = "importante";
  break;
  case '2':
  priorite = "moyenne";
  break;
  case '3':
  priorite  = "faible";
  break;
  default:
  priorite  = "a confirmer";
}
return priorite
}

module.exports = {
  Gettodolist: Gettodolist,
  insertTask : insertTask,
  deleteTask : deleteTask,
  updateTask : updateTask,
  formatDate : formatDate,
  statutTache : statutTache,
  prioTache : prioTache,
  dDay : dDay, 

}
