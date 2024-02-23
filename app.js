

let estudiantes = [
  {
    nombre:"Luis",
    apellido:"Soto",
    matricula: "19991234",
    curso:"Full Stack",
    nota:"100",
    numeroestudiante:"1"
  },
  {
    nombre:"José Armando",
    apellido:"Tavares",
    matricula: "19951234",
    curso: "Data Science",
    nota:"100",
    numeroestudiante:"2"
  },
  {
    nombre:"José",
    apellido:"Candelario 3Patines",
    matricula: "18001234",
    curso:"UX Designer",
    nota:"45",
    numeroestudiante:"3"
  }
];

let estudiante = {}



function displayTableData(){
  console.log("Yes, function called")
  document.getElementById("form")['botonPrincipal'].value = "Agregar Estudiante"

  var html = "<table border='1|1' class='table'>";
  setTimeout(() => {
                      html+="<thead>";
                      html+="<tr>";
                      html+="<td>"+'#'+"</td>";
                      html+="<td>"+'Nombre'+"</td>";
                      html+="<td>"+'Apellido'+"</td>";
                      html+="<td>"+'Matrícula'+"</td>";
                      html+="<td>"+'Curso'+"</td>";
                      html+="<td>"+'Nota'+"</td>";
                      html+="<td>"+'Acciones'+"</td>";
                      html+="</tr>";
                      html+="</thead>";

                      for (var i = 0; i < estudiantes.length; i++) {
                        var numeroestudiante = i + 1;
                        html+="<tr>";
                        html+="<td>"+numeroestudiante+"</td>";
                        html+="<td>"+estudiantes[i].nombre+"</td>";
                        html+="<td>"+estudiantes[i].apellido+"</td>";
                        html+="<td>"+estudiantes[i].matricula+"</td>";
                        html+="<td>"+estudiantes[i].curso+"</td>";
                        html+="<td>"+estudiantes[i].nota+"</td>";
                        html+="<td>"+  `<input type="button" value="Editar" id="editar" onclick='editItem(${estudiantes[i].numeroestudiante})' style="background-color: lightgoldenrodyellow; border-color:yellow">
                                        <input type="button" value="Eliminar" id="eliminar" onclick='removeItem(${estudiantes[i].numeroestudiante})' style="background-color: lightcoral; border-color:deeppink">` +"</td>";
                        html+="</tr>";
                      }
                      html+="</table>";
                      document.getElementById("table").innerHTML = html;
                    }, 200);
                    document.getElementById("form").reset();
                  }
    

displayTableData();


function addOnClick(){
 
  const botonPrincipal = document.getElementById('botonPrincipal')
  const inputNombre = document.getElementById('nombre')
  const inputApellido = document.getElementById('apellido')
  const inputMatricula = document.getElementById('matricula')
  const inputNota = document.getElementById('nota')
  const inputCurso = document.querySelector("input[name='curso']:checked");

 if (inputCurso === null){alert("Favor completar todos los campos. Gracias!!");
                          return}
 

  let estudiante = {}

    estudiante.numeroestudiante = estudiantes.length + 1;
    estudiante.nombre = inputNombre.value
    estudiante.apellido = inputApellido.value
    estudiante.matricula = inputMatricula.value
    estudiante.nota = inputNota.value
    estudiante.curso = inputCurso.value
    
  if (estudiante.nombre && estudiante.apellido && estudiante.matricula && estudiante.nota && estudiante.curso) {

    estudiantes.push(estudiante)
    displayTableData();
    document.getElementById("form").reset();
    console.log(estudiantes)
    console.log(estudiantes.length)

}
else alert("Favor completar todos los campos. Gracias!")

}



function removeItem(rec){

  console.log(rec);

  if (confirm("¿Está seguro que desea eliminar este estudiante?")) {
    //cross-checking el Número de Estudiante (id)
    var filt = estudiantes.filter((a,i)=>{
    if(rec == a.numeroestudiante){
    estudiantes.splice(i,1);
    displayTableData();
  }
})
console.log(estudiantes);
  }
}



let cellNumeroEstudiante;


function editItem(row){
  //console.log(`${estudiantes[i].numeroestudiante}`);
 console.log(row);
       var filt = estudiantes.filter((a,i)=>{
      if(row == a.numeroestudiante){
      cellNumeroEstudiante = estudiantes[i].numeroestudiante;
      let cellNombre = estudiantes[i].nombre;
      console.log(cellNumeroEstudiante, cellNombre);
      document.getElementById("form")['nombre'].value = estudiantes[i].nombre;
      document.getElementById("form")['apellido'].value = estudiantes[i].apellido;
      document.getElementById("form")['matricula'].value = estudiantes[i].matricula;
      document.getElementById("form")['nota'].value = estudiantes[i].nota;
      

      console.log(estudiantes[i].curso);

      document.form.curso.value = estudiantes[i].curso;

      document.getElementById("form")['botonPrincipal'].value = "Editar Estudiante"
      
      document.getElementById("form")['cancelarEdicion'].style.display = "";

    }
  })
}



function hideButton(){
  document.getElementById("form")['cancelarEdicion'].style.display = 'none';
  document.getElementById("form")['botonPrincipal'].value = "Agregar Estudiante";
}



function agregarEditar(){
  if(document.getElementById("form")['botonPrincipal'].value !== "Editar Estudiante"){
  addOnClick(); console.log("Este estudiante se Agregó") }
  else {editArray(); console.log("Este estudiante se Editó")}
}



function editArray(){

const botonPrincipal = document.getElementById('botonPrincipal')
  const inputNombre = document.getElementById('nombre')
  const inputApellido = document.getElementById('apellido')
  const inputMatricula = document.getElementById('matricula')
  const inputNota = document.getElementById('nota')
  const inputCurso = document.querySelector("input[name='curso']:checked");
  
 if (inputCurso === null){alert("Favor completar todos los campos. Gracias!!");
                          return}
    
  let estudiante = {}
    estudiante.numeroestudiante = cellNumeroEstudiante;
    estudiante.nombre = inputNombre.value
    estudiante.apellido = inputApellido.value
    estudiante.matricula = inputMatricula.value
    estudiante.nota = inputNota.value
    estudiante.curso = inputCurso.value
    
  if (estudiante.nombre && estudiante.apellido && estudiante.matricula && estudiante.nota && estudiante.curso) {

    estudiantes.splice((estudiante.numeroestudiante -1), 1, estudiante);
    displayTableData();
    document.getElementById("form").reset();
    cellNumeroEstudiante = "";
    console.log(estudiantes)
    console.log(estudiantes.length)

}
else alert("Favor completar todos los campos. Gracias!")

}



//console.log(estudiantes);



  //console.log(editArray());
 // console.log("------------------------------------------------");
  //console.log(editArray);


//const indice = a.target.parentNode.parentNode.rowindex - 1;
  
  //let inputNumeroEstudiante = cellNumeroEstudiante;

  
  //Tenía un error aquí, donde había colocado esa variable inputNumeroEstudiante = 1, entonces sólo se editaba la primera fila de la tabla :-(
  //estudiantes[i].numeroestudiante;
  //console.log(inputNumeroEstudiante);



//estudiantes[indice]
 
    //const inputNumeroEstudiante = estudiante
    //estudiante.numeroestudiante = inputNumeroEstudiante;
    //console.log(inputNumeroEstudiante);


  

// var filt = estudiantes.filter((a,i)=>{
//   if(row == a.numeroestudiante){
// const inputNumeroEstudiante = estudiantes[i].numeroestudiante;

//})

//}


//let estudiantes = []

// if (Number.isNaN(estudiantes.cellNumeroEstudiante)) {



//document.querySelector("input[name='curso']:checked")
//document.getElementById("form")['input[name="curso"]:checked'].value = estudiantes[i].curso;
//document.getElementById("form")['input[name="curso"]:checked'].value = estudiantes[i].curso;

 //const botonPrincipal = document.getElementById('botonPrincipal').value
 //var document.getElementById('nombre').value
//  const inputApellido = document.getElementById('apellido').value
//  const inputMatricula = document.getElementById('matricula').value
//  const inputNota = document.getElementById('nota').value
 //const inputCurso = document.querySelector("input[name='curso']:checked").value;

 //html.rows[ok].cells[1].innerHTML = inputNombre;


 //let row = ok.parentNode;
 //console.log(row);

  
//let cellCurso = estudiantes[i].curso.id;
    //document.form.curso[cellCurso].checked = true;
     //document.forms[form]["web"].checked = true;
      
     
     
     
      //document.querySelector("input[name='curso']").value = estudiantes[i].curso;



// let cellRadio;
// cellRadio = true;
// document.getElementsByName("curso") = cellRadio;






//estudiante.unshift(id)

//const tbdata = document.getElementById('tbdata')  

//innerHTML (es vulnerable para seguridad, pero está bien
// para esta práctica)  y innerText

//console.log(inputNota);
//console.log(inputCurso);
//botón submit recarga la página. Se debe usar e.preventDeafult();
// o usar un boton regular.

//botonPrincipal.addEventListener('click', (e) => {})
   // alert('Funciona')
   
   //console.log(inputCurso);
  // console.log(inputNombre.value)
  // console.log(inputApellido.value)


/*
tbdata.innerHTML += `<tr>
<td>${5}</td>    
<td>${estudiante.nombre}</td>
                        <td>${estudiante.apellido}</td>
                        <td>${estudiante.matricula}</td>
                        <td>${estudiante.curso}</td>
                        <td>${estudiante.nota}</td>
                        <td><input type="button" value="Editar" id="editar" style="background-color: lightgoldenrodyellow; border-color:yellow">
                            <input type="button" value="Eliminar" id="eliminar" onclick='removeItem()' style="background-color: lightcoral; border-color:deeppink"></td>
                      </tr>`

                      // falta la  funcionalidad de los botones.
                      //faltan las validaciones.

// ***************************************************** QUITAR COMENTARIO DE ABAJO PARA LIMPIAR CAMPOS ************************************************************
//document.getElementById("form").reset();







*/

/*
function removeItem(){
  console.log(estudiantes.IndexOf(this))
}

*/




//

//estudiante.nombre = 'Juan'
//estudiante.apellido = 'Sosa'

//estudiantes.push(estudiante)

//console.log(estudiantes)




// --------------------------------------------------- Intentando obtener el valor del Radio Button, bufiado era con querySelector --------------------------------

//const inputCurso = document.getElementsByName('curso')
//const inputCurso = document.querySelector('input[name="curso"]:checked');
//const inputCurso = document.getElementById('radioSelectorCurso')
//console.log(inputCurso);
//Se debía colocar el querySelector del Selector Radio después del click (event listener) para
//asegurar que se haya seleccionado. Si no, se toma vacío, como que se 
//guarda en memoria/cache que está vacío y no cambia.






// --------------------------------------------------- Intentando validación de que todo esté lleno con IF , bufiado --------------------------------

/*
console.log(document.getElementById('ux').checked);

if (document.getElementById('web').checked){
  inputCurso = document.getElementById('web').value;
}
 
else if (document.getElementById('data').checked){
  inputCurso = document.getElementById('data').value;
}

else if (document.getElementById('devops').checked){
  inputCurso = document.getElementById('devops').value;
}

else if (document.getElementById('ux').checked){
  inputCurso = document.getElementById('ux').value;
}
*/




// --------------------------------------------------- Intentando una función que determine el índice que se debe borrar del array, bufiado --------------------------------

/*
estudiantes.forEach(estudiante=> {
  eliminar.addEventListener('click', (e) => {
    let index = estudiantes.indexOf(estudiante)
    if (index > -1) {
      estudiantes.splice(index, 1);
    }
    })
  })

*/


//console.log(estudiantes[i])

  //estudiantes.splice(eliminar.indexof(), 1)


     /* 
               html+= `<tr>
                        <td>${estudiante.numeroestudiante}</td>
                        <td>${estudiante.nombre}</td>
                        <td>${estudiante.apellido}</td>
                        <td>${estudiante.matricula}</td>
                        <td>${estudiante.curso}</td>
                        <td>${estudiante.nota}</td>
                        <td><input type="button" value="Editar" id="editar">
                            <input type="button" value="Eliminar" id="eliminar" onclick='removeItem()'></td>
                      </tr>`
              html+="</table>";
              document.getElementById("tbdata").innerHTML = html
              */
 


// '<input type="button" value="Editar" id="editar">'
// html+="<td>"+'<input type="button" value="Eliminar" id="eliminar">'+"<td>";


/* Función para destacar (highlight) la fila seleccionada.

function selectedRow(){
  let index;
  let table = document.getElementById("table");
  let rowCount = table[1].childElementCount;
  console.log("Row Count = " + rowCount);
}
console.log(tab.rows.length);
  for(let i = 0; i < tab.rows.length; i++){
    tab.rows[i].onclick = function(){
      index = this.rowIndex;
      this.classList.toggle("selected");
      console.log(index);
    }
  }


setTimeout(()=>selectedRow(), 1000
);
*/


/* Intentando que no se duplique al editar

if (isNaN(estudiantes.cellNumeroEstudiante)) {
  for (var i = 0; i < estudiantes.length; i++) {
  var numeroestudiante = i + 1;
  console.log(estudiantes.length);
  console.log(numeroestudiante, i)}}



  
  else {
    numeroestudiante = estudiantes.cellNumeroEstudiante;
    i = estudiantes.cellNumeroEstudiante - 1;
    console.log(numeroestudiante, i);}

    */