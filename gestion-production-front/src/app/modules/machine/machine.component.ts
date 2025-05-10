import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Machine } from './machine.model';
import { MachineService } from '../../services/machine.service';

@Component({
  selector: 'app-machine',
  standalone: true,
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class MachineComponent implements OnInit {
  machines: Machine[] = [];
  machineForm!: FormGroup;

  private machineService = inject(MachineService);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.machineForm = this.fb.group({
      id: [''],
      nom: [''],
      etat: [''],
      maintenance_prochaine: ['']
    });

    this.loadMachines();
  }

  loadMachines(): void {
    this.machineService.getAll().subscribe(data => {
      this.machines = data;
    });
  }

  onSubmit(): void {
    const machine: Machine = this.machineForm.value;
    if (machine.id) {
      this.machineService.update(machine.id, machine).subscribe(() => {
        this.loadMachines();
        this.machineForm.reset();
      });
    } else {
      this.machineService.create(machine).subscribe(() => {
        this.loadMachines();
        this.machineForm.reset();
      });
    }
  }

  editMachine(machine: Machine): void {
    this.machineForm.patchValue(machine);
  }

  deleteMachine(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette machine ?')) {
      this.machineService.delete(id).subscribe(() => this.loadMachines());
    }
  }
}
