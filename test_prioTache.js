const db = require ('./db_utils');


function test_prioTache(){
    if (db.prioTache('1') == "importante"){
    console.log ("Test OK")
}else{
    console.log ("Test KO")
    }
}   
test_prioTache()
