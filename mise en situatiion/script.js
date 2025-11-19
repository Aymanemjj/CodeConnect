let table = document.getElementById('tableContainer');
let inputs = document.querySelectorAll('form-control');
let btn_ajout = document.getElementById ('submitBtn')

// disply none table
// table.style.display('none')


// ajouter
let form_ajout = document.forms



function ajouterNewUser(){
    form_ajout.item.inputs
    console.log(form_ajout);
    // localStorage.setItem



    let countiner= document.getElementById('userTableBody');
    countiner.innerHTML='';
    let new_countiner = `
    <tr>
                            <td>
                                <span class="user-name" data-bs-toggle="modal" data-bs-target="#userDetailModal">
                                   nom
                                </span>
                            </td>
                            <td>TayebSOUINI.2@email.com</td>
                            <td>30</td>
                            <td>
                                <button class="btn btn-sm btn-danger w-100">Supprimer</button>
                            </td>
                        </tr>
    `;
    countiner.appendChild
      console.log(1);
    btn_ajout.addEventListener('click',function(){

    })
    
}

ajouterNewUser();