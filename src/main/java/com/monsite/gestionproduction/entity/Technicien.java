package com.monsite.gestionproduction.entity;

import jakarta.persistence.*;

@Entity
public class Technicien {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String competences;

    @ManyToOne
    @JoinColumn(name = "machine_id")
    private Machine machineAssignee;

    // Getters et Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNom() { return nom; }
    public void setNom(String nom) { this.nom = nom; }

    public String getCompetences() { return competences; }
    public void setCompetences(String competences) { this.competences = competences; }

    public Machine getMachineAssignee() { return machineAssignee; }
    public void setMachineAssignee(Machine machineAssignee) { this.machineAssignee = machineAssignee; }
}
