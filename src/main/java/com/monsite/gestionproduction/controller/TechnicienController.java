package com.monsite.gestionproduction.controller;

import com.monsite.gestionproduction.entity.Technicien;
import com.monsite.gestionproduction.service.TechnicienService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/techniciens")
@CrossOrigin(origins = "http://localhost:4200")
public class TechnicienController {

    private final TechnicienService technicienService;

    public TechnicienController(TechnicienService technicienService) {
        this.technicienService = technicienService;
    }

    @GetMapping
    public List<Technicien> getAll() {
        return technicienService.getAll();
    }

    @GetMapping("/{id}")
    public Technicien getById(@PathVariable Long id) {
        return technicienService.getById(id);
    }

    @PostMapping
    public Technicien create(@RequestBody Technicien technicien) {
        return technicienService.create(technicien);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        technicienService.delete(id);
    }
}
