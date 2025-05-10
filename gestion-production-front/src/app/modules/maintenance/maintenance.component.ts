import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Maintenance } from './maintenance.model';
import { MaintenanceService } from '../../services/maintenance.service';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class MaintenanceComponent implements OnInit {
  maintenances: Maintenance[] = [];
  maintenanceForm!: FormGroup;

  private maintenanceService = inject(MaintenanceService);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.maintenanceForm = this.fb.group({
      id: [''],
      machine: [''],
      technicien: [''],
      date: [''],
      type: ['']
    });

    this.loadMaintenances();
  }

  loadMaintenances(): void {
    this.maintenanceService.getAll().subscribe(data => {
      this.maintenances = data;
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
    this.maintenanceForm.patchValue(maintenance);
  }

  deleteMaintenance(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette maintenance ?')) {
      this.maintenanceService.delete(id).subscribe(() => this.loadMaintenances());
    }
  }
}
