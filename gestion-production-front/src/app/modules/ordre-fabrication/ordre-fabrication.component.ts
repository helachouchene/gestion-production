import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OrdreFabrication } from './ordre-fabrication.model';
import { OrdreFabricationService } from '../../services/ordre-fabrication.service';
import { ProduitService } from '../../services/produit.service';
import { MachineService } from '../../services/machine.service';
import { Produit } from '../produit/produit.model';
import { Machine } from '../machine/machine.model';

@Component({
  selector: 'app-ordre-fabrication',
  standalone: true,
  templateUrl: './ordre-fabrication.component.html',
  styleUrls: ['./ordre-fabrication.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class OrdreFabricationComponent implements OnInit {
  ordreForm!: FormGroup;
  ordres: OrdreFabrication[] = [];
  produits: Produit[] = [];
  machines: Machine[] = [];

  private fb = inject(FormBuilder);
  private ordreService = inject(OrdreFabricationService);
  private produitService = inject(ProduitService);
  private machineService = inject(MachineService);

  ngOnInit(): void {
    this.ordreForm = this.fb.group({
      id: [''],
      produit: this.fb.group({ id: [''] }),
      machine: this.fb.group({ id: [''] }),
      quantite: [''],
      date: [''],
      statut: ['']
    });

    this.loadData();
  }

  loadData(): void {
    this.ordreService.getAll().subscribe(data => this.ordres = data);
    this.produitService.getAll().subscribe(data => this.produits = data);
    this.machineService.getAll().subscribe(data => this.machines = data);
  }

  onSubmit(): void {
    const ordre: OrdreFabrication = this.ordreForm.value;

    if (ordre.id) {
      this.ordreService.update(ordre.id, ordre).subscribe(() => {
        this.loadData();
        this.ordreForm.reset();
      });
    } else {
      this.ordreService.create(ordre).subscribe(() => {
        this.loadData();
        this.ordreForm.reset();
      });
    }
  }

  editOrdre(ordre: OrdreFabrication): void {
    this.ordreForm.patchValue({
      id: ordre.id,
      produit: { id: ordre.produit.id },
      machine: { id: ordre.machine.id },
      quantite: ordre.quantite,
      date: ordre.date,
      statut: ordre.statut
    });
  }

  deleteOrdre(id: number): void {
    if (confirm('Voulez-vous supprimer cet ordre de fabrication ?')) {
      this.ordreService.delete(id).subscribe(() => this.loadData());
    }
  }
}
