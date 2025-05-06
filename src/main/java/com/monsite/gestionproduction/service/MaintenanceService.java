package com.monsite.gestionproduction.service;

import com.monsite.gestionproduction.entity.Maintenance;
import com.monsite.gestionproduction.repository.MaintenanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaintenanceService {

    @Autowired
    private MaintenanceRepository maintenanceRepository;

    public List<Maintenance> getAll() {
        return maintenanceRepository.findAll();
    }

    public Optional<Maintenance> getById(Long id) {
        return maintenanceRepository.findById(id);
    }

    public Maintenance save(Maintenance m) {
        return maintenanceRepository.save(m);
    }

    public void delete(Long id) {
        maintenanceRepository.deleteById(id);
    }
}
