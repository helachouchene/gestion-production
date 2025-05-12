import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Technicien } from './technicien.model';
import { Machine } from '../machine/machine.model';
import { TechnicienService } from '../../services/technicien.service';
import { MachineService } from '../../services/machine.service';

@Component({
  selector: 'app-technicien',
  standalone: true,
  templateUrl: './technicien.component.html',
  styleUrls: ['./technicien.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class TechnicienComponent implements OnInit {
  techniciens: Technicien[] = [];
  machines: Machine[] = [];
  technicienForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private technicienService: TechnicienService,
    private machineService: MachineService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadTechniciens();
    this.loadMachines();
  }

  initForm(): void {
    this.technicienForm = this.fb.group({
      id: [null],
      nom: [''],
      competences: [''],
      machineAssignee: this.fb.group({
        id: ['']
      })
    });
  }

  loadTechniciens(): void {
    this.technicienService.getAll().subscribe(data => this.techniciens = data);
  }

  loadMachines(): void {
    this.machineService.getAll().subscribe(data => this.machines = data);
  }

  onSubmit(): void {
    const formValue = this.technicienForm.value;

    if (formValue.id) {
      // Mise à jour
      this.technicienService.update(formValue.id, formValue).subscribe(() => {
        this.technicienForm.reset();
        this.loadTechniciens();
      });
    } else {
      // Ajout
      this.technicienService.add(formValue).subscribe(() => {
        this.technicienForm.reset();
        this.loadTechniciens();
      });
    }
  }

  editTechnicien(technicien: Technicien): void {
    this.technicienForm.patchValue({
      id: technicien.id,
      nom: technicien.nom,
      competences: technicien.competences,
      machineAssignee: {
        id: technicien.machineAssignee?.id
      }
    });
  }

  deleteTechnicien(id: number | undefined): void {
    if (id !== undefined) {
      this.technicienService.delete(id).subscribe(() => this.loadTechniciens());
    }
  }
}
