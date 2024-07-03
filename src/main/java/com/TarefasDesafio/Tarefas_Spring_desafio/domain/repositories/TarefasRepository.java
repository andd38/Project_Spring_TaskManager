package com.TarefasDesafio.Tarefas_Spring_desafio.domain.repositories;

import com.TarefasDesafio.Tarefas_Spring_desafio.domain.models.Tarefas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TarefasRepository extends JpaRepository<Tarefas,Long> {

}
