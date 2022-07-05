function addNovaTarefa(){
    const input =document.getElementById('nova-tarefa-input');
    const novaTarefaNome = input.value;
    const novaTarefaLi =document.createElement('li');
    const checkbox = document.createElement ('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('tarefa-checkbox');
    
    novaTarefaLi.appendChild(checkbox);
    novaTarefaLi.innerHTML += novaTarefaNome;
    const listaTarefasIncompletas =document.getElementById('tarefas-incompletas');
    listaTarefasIncompletas.appendChild(novaTarefaLi);
    checkbox.addEventListener('click', function(){
        console.log(this.checked)
        console.log(this.parentNode)
        console.log(this)
        if( this.checked){
            completarTarefa(this.parentNode)
        }
        else {
            reverterTarefa(this.parentNode)
        }
    })
}
function completarTarefa (tarefaLI){
     tarefaLI.remove();
     const listaTarefasCompletas = document.getElementById('tarefas-completas');
     listaTarefasCompletas.appendChild(tarefaLI);

}
function reverterTarefa (tarefaLI){
    tarefaLI.remove()
    const listaTarefasIncompletas = document.getElementById('tarefas-incompletas')
    listaTarefasIncompletas.appendChild(tarefaLI)
}