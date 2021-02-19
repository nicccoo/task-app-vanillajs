const addTarea = (tarea) => {
    const listaTareas = document.getElementById('lista-tareas');
    const element = document.createElement('div');

    element.innerHTML = `
    <div class="container-grid"> 
        <div class="tarea"> 
                ${tarea} 
        </div>
            <div class="chk"> 
                <input type="checkbox" class="chk"> <label >to do?</label> 
            </div>
            <div class="delete"> 
                <a href="#" class="borrar">Borrar</a>     
            </div>
    </div>
    `
    listaTareas.appendChild(element);
}

function resetForm() {

    document.getElementById('form-tareas').reset();

}



function borrarTarea() {

    const element = document.getElementsByClassName('.container-grid');
    document.getElementsByClassName('.borrar').addEventListener('click', (e) => {
            element.removeChild(list.item(0));

    })


    }

    document.getElementById('form-tareas')
        .addEventListener('submit', (e) => {
            const tarea = document.getElementById('tarea').value;


            addTarea(tarea);

            resetForm();


            e.preventDefault();
        })