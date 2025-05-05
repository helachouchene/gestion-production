package com.monsite.gestionproduction.repository;

import com.monsite.gestionproduction.entity.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
}
