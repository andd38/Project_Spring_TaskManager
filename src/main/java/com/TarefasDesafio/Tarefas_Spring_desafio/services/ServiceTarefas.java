package com.TarefasDesafio.Tarefas_Spring_desafio.services;

import com.TarefasDesafio.Tarefas_Spring_desafio.domain.models.Tarefas;

import java.util.List;
import java.util.Optional;

public interface ServiceTarefas {

     Tarefas createTask( Tarefas tarefas);
     Tarefas updateTasks(Long id,Tarefas tarefas);
     Tarefas SearchTask(Long id);

     List<Tarefas> listTask();
     String DeleteTask(Long id) ;



}
