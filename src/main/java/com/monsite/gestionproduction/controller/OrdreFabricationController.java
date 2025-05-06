package com.monsite.gestionproduction.controller;

import com.monsite.gestionproduction.entity.OrdreFabrication;
import com.monsite.gestionproduction.service.OrdreFabricationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ordres")
public class OrdreFabricationController {

    @Autowired
    private OrdreFabricationService service;

    @GetMapping
    public List<OrdreFabrication> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrdreFabrication> getById(@PathVariable Long id) {
        return service.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public OrdreFabrication create(@RequestBody OrdreFabrication o) {
        return service.save(o);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
