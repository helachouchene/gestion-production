import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Maintenance } from './maintenance.model';
import { MaintenanceService } from '../../services/maintenance.service';
import { MachineService } from '../../services/machine.service';
import { TechnicienService } from '../../services/technicien.service';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class MaintenanceComponent implements OnInit {
  maintenances: Maintenance[] = [];
  machines: any[] = [];
  techniciens: any[] = [];
  maintenanceForm!: FormGroup;

  private maintenanceService = inject(MaintenanceService);
  private machineService = inject(MachineService);
  private technicienService = inject(TechnicienService);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.maintenanceForm = this.fb.group({
      id: [''],
      machine: this.fb.group({ id: [''] }),
      technicien: this.fb.group({ id: [''] }),
      date: [''],
      type: ['']
    });

    this.loadMaintenances();
    this.loadMachines();
    this.loadTechniciens();
  }

  loadMaintenances(): void {
    this.maintenanceService.getAll().subscribe(data => {
      this.maintenances = data;
    });
  }

  loadMachines(): void {
    this.machineService.getAll().subscribe(data => {
      this.machines = data;
    });
  }

  loadTechniciens(): void {
    this.technicienService.getAll().subscribe(data => {
      this.techniciens = data;
    });
  }

  onSubmit(): void {
    const maintenance: Maintenance = this.maintenanceForm.value;

    if (maintenance.id) {
      this.maintenanceService.update(maintenance.id, maintenance).subscribe(() => {
        this.loadMaintenances();
        this.maintenanceForm.reset();
      });
    } else {
      this.maintenanceService.create(maintenance).subscribe(() => {
        this.loadMaintenances();
        this.maintenanceForm.reset();
      });
    }
  }

  editMaintenance(maintenance: Maintenance): void {
    this.maintenanceForm.patchValue({
      id: maintenance.id,
      date: maintenance.date,
      type: maintenance.type,
      machine: { id: maintenance.machine.id },
      technicien: { id: maintenance.technicien.id }
    });
  }

  deleteMaintenance(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette maintenance ?')) {
      this.maintenanceService.delete(id).subscribe(() => this.loadMaintenances());
    }
  }
}
