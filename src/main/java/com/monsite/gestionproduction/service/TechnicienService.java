package com.monsite.gestionproduction.service;

import com.monsite.gestionproduction.entity.Technicien;
import com.monsite.gestionproduction.repository.TechnicienRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechnicienService {

    private final TechnicienRepository technicienRepository;

    public TechnicienService(TechnicienRepository technicienRepository) {
        this.technicienRepository = technicienRepository;
    }

    public List<Technicien> getAll() {
        return technicienRepository.findAll();
    }

    public Technicien getById(Long id) {
        return technicienRepository.findById(id).orElse(null);
    }

    public Technicien create(Technicien technicien) {
        return technicienRepository.save(technicien);
    }

    public void delete(Long id) {
        technicienRepository.deleteById(id);
    }
}
