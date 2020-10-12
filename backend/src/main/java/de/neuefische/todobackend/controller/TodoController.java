package de.neuefische.todobackend.controller;

import de.neuefische.todobackend.model.TodoItem;
import de.neuefische.todobackend.model.dto.AddTodoItemDto;
import de.neuefische.todobackend.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/todo")
public class TodoController {

    private final TodoService service;

    @Autowired
    public TodoController(TodoService service) {
        this.service = service;
    }

    @PostMapping
    public TodoItem addTodoItem(@RequestBody AddTodoItemDto dto){
        return this.service.addTodoItem(dto);
    }

    @GetMapping
    public List<TodoItem> listAllTodos(){
        return service.listAllTodos();
    }

    @DeleteMapping("{id}")
    public void deleteTodoItem(@PathVariable String id){
        service.deleteItem(id);
    }

}
