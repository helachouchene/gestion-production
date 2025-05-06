package com.monsite.gestionproduction.repository;

import com.monsite.gestionproduction.entity.Machine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MachineRepository extends JpaRepository<Machine, Long> {
}
