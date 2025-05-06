package com.monsite.gestionproduction.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Machine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String etat;

    @Column(name = "maintenance_prochaine")
    private LocalDate maintenanceProchaine;

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getEtat() {
        return etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public LocalDate getMaintenanceProchaine() {
        return maintenanceProchaine;
    }

    public void setMaintenanceProchaine(LocalDate maintenanceProchaine) {
        this.maintenanceProchaine = maintenanceProchaine;
    }
}
