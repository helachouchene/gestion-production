import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Technicien } from './technicien.model';
import { TechnicienService } from '../../services/technicien.service';

@Component({
  selector: 'app-technicien',
  standalone: true,
  templateUrl: './technicien.component.html',
  styleUrls: ['./technicien.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class TechnicienComponent implements OnInit {
  techniciens: Technicien[] = [];
  technicienForm!: FormGroup;

  private technicienService = inject(TechnicienService);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.technicienForm = this.fb.group({
      id: [''],
      nom: [''],
      competences: [''],
      machine_assignee: ['']
    });

    this.loadTechniciens();
  }

  loadTechniciens(): void {
    this.technicienService.getAll().subscribe(data => {
      this.techniciens = data;
    });
  }

  onSubmit(): void {
    const technicien: Technicien = this.technicienForm.value;

    if (technicien.id) {
      this.technicienService.update(technicien.id, technicien).subscribe(() => {
        this.loadTechniciens();
        this.technicienForm.reset();
      });
    } else {
      this.technicienService.create(technicien).subscribe(() => {
        this.loadTechniciens();
        this.technicienForm.reset();
      });
    }
  }

  editTechnicien(technicien: Technicien): void {
    this.technicienForm.patchValue(technicien);
  }

  deleteTechnicien(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce technicien ?')) {
      this.technicienService.delete(id).subscribe(() => this.loadTechniciens());
    }
  }
}
