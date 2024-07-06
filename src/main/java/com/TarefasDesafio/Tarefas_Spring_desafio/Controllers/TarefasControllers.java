package com.TarefasDesafio.Tarefas_Spring_desafio.Controllers;

import com.TarefasDesafio.Tarefas_Spring_desafio.domain.models.Tarefas;
import com.TarefasDesafio.Tarefas_Spring_desafio.services.ServiceTarefas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController    
@RequestMapping("/tarefas")
public class TarefasControllers {

    @Autowired
    private ServiceTarefas serviceTarefas;

    @GetMapping()
    public List<Tarefas> listtarefas(){
        return serviceTarefas.listTask();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tarefas> FindById(@PathVariable Long id) {
        var task =  serviceTarefas.SearchTask(id);
        return ResponseEntity.ok(task);
    }



    @PostMapping("/addTask")
    public Tarefas CreateTask(@RequestBody Tarefas tarefas){
       return serviceTarefas.createTask(tarefas);
    }


    @PutMapping("/{id}")
    public Tarefas updateTask(@PathVariable Long id, @RequestBody Tarefas tarefas){
        return serviceTarefas.updateTasks(id,tarefas);
    }

   @DeleteMapping("/{id}")
    public String deleteTask(@PathVariable Long id){
        return serviceTarefas.DeleteTask(id);
   }




}
