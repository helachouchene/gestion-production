package com.monsite.gestionproduction.repository;

import com.monsite.gestionproduction.entity.Maintenance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaintenanceRepository extends JpaRepository<Maintenance, Long> {
}
