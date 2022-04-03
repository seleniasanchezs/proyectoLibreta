function mostrarDinero(){
    document.getElementById('oculto').style.display = 'block';}

    
function ocultarDinero(){
    document.getElementById('oculto').style.display = 'none';}


/*deudas*/
function mostrarDeuda(){
    document.getElementById('ocultoDeuda').style.display = 'block';}

    
function ocultarDeuda(){
    document.getElementById('ocultoDeuda').style.display = 'none';}


/*planes*/
function mostrarPlan(){
    document.getElementById('ocultoPlan').style.display = 'block';}

       
function ocultarPlan(){
    document.getElementById('ocultoPlan').style.display = 'none';}


/*GASTOS*/  
function mostrarGastos(){
    document.getElementById('ocultoGastos').style.display = 'block';}

       
function ocultarGastos(){
    document.getElementById('ocultoGastos').style.display = 'none';}


/*-----------------------------------lista add---------------------------------------------*/

//info date

const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear =document.getElementById('dateYear');

//tasks Container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date =new Date();
    dateNumber.textContent = date.toLocaleString('es', {day: 'numeric'});
    dateText.textContent = date.toLocaleString('es', {weekday: 'long'});
    dateMonth.textContent = date.toLocaleString('es',{month: 'short'});
    dateYear.textContent = date.toLocaleString('es', {year: 'numeric'});

};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if (!value) return;
    const task = document.createElement('div')
    task.classList.add('task', 'roundBorder');
    task.classList.add('task', 'roundBorders');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
/*
    let borrar=document.getElementsByClassName('roundBorders');
    console.log(borrar);
 //   let task= getElementById('tasksContainer');
    for(i=0;i< borrar.length;i++){
        borrar[i].onclick=function(){
            console.log('prueba');
            tasksContainer.removeChild(borrar[i]);

        }

    }*/


};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })

    return[...toDo, ...done];
}



const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el) )
}

setDate();


