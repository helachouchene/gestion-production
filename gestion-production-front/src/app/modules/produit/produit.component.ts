import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Produit } from './produit.model'; // Correction du chemin d'importation
import { ProduitService } from '../../services/produit.service'; // Correction du chemin d'importation

@Component({
  selector: 'app-produit',
  standalone: true,
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
  imports: [CommonModule, ReactiveFormsModule], // ✅ nécessaires pour standalone
})
export class ProduitComponent implements OnInit {
  produits: Produit[] = [];
  produitForm!: FormGroup;

  private produitService = inject(ProduitService); // ✅ façon recommandée avec standalone
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.produitForm = this.fb.group({
      id: [''],
      nom: [''],
      type: [''],
      stock: [0],
      fournisseur: ['']
    });

    this.loadProduits();
  }

  loadProduits(): void {
    this.produitService.getAll().subscribe(data => {
      this.produits = data;
    });
  }

  onSubmit(): void {
    const produit: Produit = this.produitForm.value;

    if (produit.id) {
      this.produitService.update(produit.id, produit).subscribe(() => {
        this.loadProduits();
        this.produitForm.reset();
      });
    } else {
      this.produitService.create(produit).subscribe(() => {
        this.loadProduits();
        this.produitForm.reset();
      });
    }
  }

  editProduit(produit: Produit): void {
    this.produitForm.patchValue(produit);
  }

  deleteProduit(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.produitService.delete(id).subscribe(() => this.loadProduits());
    }
  }
}