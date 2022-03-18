/* 

Formater mes taches 
function FormatTask(task){
        let deadline = task['deadline'].formaterDateFr
    }

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("deadline").setAttribute("min", today);
function padTo2Digits (num){
  return num.toString().padStart (2, '0');
}

function formaterDateFr(date){
  return[
    padTo2Digits (date.getDate ()),
    padTo2Digits (date.getMonth () +1),
    date.getFullYear(),
  ].join ('/');
}
let deadline = task['deadline'].toLocaleDateString('fr') 



//Fonction pour le statut de la tache

let statut = 3;
function statutTache (){
switch (statut) {
    case '1':
      statut  = "ToDo";
    break;
    case '2':
    statut = "Ongoing";
    break;
    case '3':
    statut  = "Finish";
    break;
    default:
      console.log("error");
}
}

statutTache();

/* Fonction pour la priorite de la tache 

switch priorite () {
    case '1':
      statut  = "high";
    break;
    case '2':
    statut = "medium";
    break;
    case '3':
    statut  = "low";
    break;
    default:
      console.log("error");
}


//formater la date     
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
         if(dd<10){
                dd='0'+dd
            } 
            if(mm<10){
                mm='0'+mm
            } 
        
        today = yyyy+'-'+mm+'-'+dd;
        document.getElementById("deadline").setAttribute("min", today);
        
        
        function padTo2Digits (num){
          return num.toString().padStart (2, '0');
        }
        
        function formaterDateFr(date){
          return[
            padTo2Digits (date.getDate ()),
            padTo2Digits (date.getMonth () +1),
            date.getFullYear(),
          ].join ('/');
        }
        let deadline = task['deadline'].toLocaleDateString('fr')  
*/




