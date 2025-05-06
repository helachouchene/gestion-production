package com.monsite.gestionproduction.service;

import com.monsite.gestionproduction.entity.OrdreFabrication;
import com.monsite.gestionproduction.repository.OrdreFabricationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrdreFabricationService {

    @Autowired
    private OrdreFabricationRepository repository;

    public List<OrdreFabrication> getAll() {
        return repository.findAll();
    }

    public Optional<OrdreFabrication> getById(Long id) {
        return repository.findById(id);
    }

    public OrdreFabrication save(OrdreFabrication o) {
        return repository.save(o);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
