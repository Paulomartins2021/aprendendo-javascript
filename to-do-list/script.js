function addNovaTarefa(){
    const input =document.getElementById('nova-tarefa-input');
    const novaTarefaNome = input.value;
    const novaTarefaLi =document.createElement('li');
    novaTarefaLi.innerHTML = novaTarefaNome;
    const listaTarefasIncompletas =document.getElementById('tarefas-incompletas');
    listaTarefasIncompletas.appendChild(novaTarefaLi);

}
