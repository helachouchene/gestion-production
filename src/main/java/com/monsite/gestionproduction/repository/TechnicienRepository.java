package com.monsite.gestionproduction.repository;

import com.monsite.gestionproduction.entity.Technicien;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TechnicienRepository extends JpaRepository<Technicien, Long> {
}
