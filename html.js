


function ShowToDoList(results) {
    let html = `<html>
<head>
 
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


    <title>MIMI TO DO LIST</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <div class="container">
        <div class="row ligne2">
            <div class="col-12">
            <h1 align="center">TO DO LIST</h1> 
                <div class="col-4 colGauche">
                    <button id = "btnAjout" type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#Ajout">
                        Ajouter
                    </button>
                </div>
                <div class="modal fade" id="Ajout" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="AjoutLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="AjoutLabel">Ajouter</h5>
                                </div>
                                <div class="modal-body">
                                    <form method="post" action="/Ajouter" enctype="application/x-www-form-urlencoded">
                                    <input class="labl" type="text" name="membre" class="form-control" id="membre"
                                        placeholder="indiquer prenom" required>
                                    <input class="labl" type="text" name="taches" class="form-control" id="taches"
                                        placeholder="indiquer la tache" required>
                                    <input class="labl" type="text" name="priorite" class="form-control" id="priorite"
                                        placeholder="indiquer priorite" required>
                                    <input class="labl" type="text" name="statut" class="form-control" id="statut"
                                        placeholder="indiquer statut" required>
                                    <input class="labl" type="date" name="deadline" min="today" class="form-control" id="deadline"
                                        placeholder="indiquer deadline" required>
                                    <div class="modal-footer">
                                    <button id=btnModif type="submit" value="Ajouter">Ajouter</button>
                                    <button id=btnClose type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-4 colMilieu">
                    <button id = "btnModif" type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#Modif">
                    Modifier
                    </button>
                </div>
                <div class="modal fade" id="Modif" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="ModifLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="ModifLabel">Modifier</h5>
                            </div>
                            <div class="modal-body">
                                <form method="post" action="/Modifier" enctype="application/x-www-form-urlencoded">
                                    <input class="labl" type="text" name="id" class="form-control" id="id" placeholder="indiquer id"
                                        required>
                                    <input class="labl" type="text" name="membre" class="form-control" id="membre"
                                        placeholder="indiquer prenom" required>
                                    <input class="labl" type="text" name="taches" class="form-control" id="taches"
                                        placeholder="indiquer la tache" required>
                                    <input class="labl" type="text" name="priorite" class="form-control" id="priorite"
                                        placeholder="indiquer priorite" required>
                                    <input class="labl" type="text" name="statut" class="form-control" id="statut"
                                        placeholder="indiquer statut" required>
                                    <input class="labl" type="date" name="deadline" min="today" class="form-control" id="deadline"
                                        placeholder="indiquer deadline" required>
                                <div class="modal-footer">
                                    <button id=btnModif type="submit" value="Modifier">Modifier</button>
                                    <button id=btnClose type="button" data-bs-dismiss="modal">Close</button>
                                </form>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>

                <div class="col-4 colDroite">
                    <button id = "btnSupp" type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#Supp">
                    Supprimer
                    </button>
                </div>
                <div class="modal fade" id="Supp" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="SuppLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="SuppLabel">Supprimer</h5>
                            </div>
                            <div class="modal-body">
                                <form method="post" action="/Supprimer" enctype="application/x-www-form-urlencoded">
                                <input class ="c1" type = "text" name="id" id="id" placeholder="indiquer Id"> 
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button id=btnModif type="submit" value="Supprimer">Supprimer</button>
                                <button id=btnClose type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
             
        <div class="row ligne3">
            <div class="col-12">
                <table class="table mb-0">
                    <thead class="titreTab">
                        <tr align="center">
                            <th>id</th>
                            <th>membre</th>
                            <th>taches</th>
                            <th>priorite</th>
                            <th>statut</th>
                            <th>deadline</th>
                        </tr>
                    </thead>`
                    for (let v of results) {
                    html = `${html}
                    <tr class="fw-normal" align="center">
                        <form method="post" action="/traitement-formulaire" enctype="application/x-www-form-urlencoded">
                            <td>
                                ${v['id']}
                            </td>
                            <td>
                                ${v['membre']}
                            </td>
                            <td>
                                ${v['taches']}
                            </td>
                            <td>
                                ${v['priorite']}
                            </td>
                            <td>
                                ${v['statut']}
                            </td>
                            <td>
                                ${v['deadline']}
                            </td>
                        </form>
                    </tr>`
                    }
                    html = `${html}
                </table>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>

    
</body>
</html>`

    console.log(html)
    return html
}

module.exports = {
    ShowToDoList: ShowToDoList,
}
