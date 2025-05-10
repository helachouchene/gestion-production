import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { OrdreFabrication } from './ordre-fabrication.model';
import { OrdreFabricationService } from '../../services/ordre-fabrication.service';

@Component({
  selector: 'app-ordre-fabrication',
  standalone: true,
  templateUrl: './ordre-fabrication.component.html',
  styleUrls: ['./ordre-fabrication.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class OrdreFabricationComponent implements OnInit {
  ordres: OrdreFabrication[] = [];
  ordreForm!: FormGroup;

  private ordreService = inject(OrdreFabricationService);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.ordreForm = this.fb.group({
      id: [''],
      produit: [''],
      quantité: [0],
      date: [''],
      machine: [''],
      statut: ['']
    });

    this.loadOrdres();
  }

  loadOrdres(): void {
    this.ordreService.getAll().subscribe(data => {
      this.ordres = data;
    });
  }

  onSubmit(): void {
    const ordre: OrdreFabrication = this.ordreForm.value;

    if (ordre.id) {
      this.ordreService.update(ordre.id, ordre).subscribe(() => {
        this.loadOrdres();
        this.ordreForm.reset();
      });
    } else {
      this.ordreService.create(ordre).subscribe(() => {
        this.loadOrdres();
        this.ordreForm.reset();
      });
    }
  }

  editOrdre(ordre: OrdreFabrication): void {
    this.ordreForm.patchValue(ordre);
  }

  deleteOrdre(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet ordre de fabrication ?')) {
      this.ordreService.delete(id).subscribe(() => this.loadOrdres());
    }
  }
}
