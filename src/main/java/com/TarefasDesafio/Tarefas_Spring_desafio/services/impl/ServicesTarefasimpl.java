package com.TarefasDesafio.Tarefas_Spring_desafio.services.impl;

import com.TarefasDesafio.Tarefas_Spring_desafio.domain.models.Tarefas;
import com.TarefasDesafio.Tarefas_Spring_desafio.domain.repositories.TarefasRepository;
import com.TarefasDesafio.Tarefas_Spring_desafio.services.ResourceNotFound;
import com.TarefasDesafio.Tarefas_Spring_desafio.services.ServiceTarefas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ServicesTarefasimpl implements ServiceTarefas {
    @Autowired
    private TarefasRepository tarefasRepository;
    @Override
    public Tarefas createTask(Tarefas tarefas) {
        return tarefasRepository.save(tarefas);
    }

    @Override
    public Tarefas updateTasks(Long id,Tarefas tarefas)  {
        Tarefas existingTask = tarefasRepository.findById(tarefas.getId()).orElse(null);
        existingTask.setTitulo(tarefas.getTitulo());
        existingTask.setDescricao(tarefas.getDescricao());
        existingTask.setStatus(tarefas.getStatus());
        return tarefasRepository.save(existingTask);
    }

    @Override
    public Tarefas SearchTask(Long id)  {
        return tarefasRepository.findById(id).orElse(null);
    }

    @Override
    public List<Tarefas> listTask() {
        return tarefasRepository.findAll();
    }

    @Override
    public String DeleteTask(Long id)  {
        tarefasRepository.deleteById(id);
        return id+"removed with success";
    }
}
