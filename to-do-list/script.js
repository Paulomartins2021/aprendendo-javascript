function addNovaTarefa(){
    const input =document.getElementById('nova-tarefa-input');
    const novaTarefaNome = input.value;
    const novaTarefaLi =document.createElement('li');
    const checkbox = document.createElement ('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('tarefa-checkbox');
    checkbox.addEventListener('change', function(){
        if( this.checked){
            completarTarefa(this.parentNode)
        }
        else {
            reverterTarefa(this.parentNode)
        }
    })
    novaTarefaLi.appendChild(checkbox);
    const span = document.createElement('span')
    span.innerHTML = novaTarefaNome
    novaTarefaLi.appendChild(span)
    const listaTarefasIncompletas =document.getElementById('tarefas-incompletas');
    listaTarefasIncompletas.appendChild(novaTarefaLi);
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