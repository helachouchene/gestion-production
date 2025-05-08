import { Routes } from '@angular/router';
import { ProduitComponent } from './modules/produit/produit.component';
import { TechnicienComponent } from './modules/technicien/technicien.component';
import { MachineComponent } from './modules/machine/machine.component';
import { MaintenanceComponent } from './modules/maintenance/maintenance.component';
import { OrdreFabricationComponent } from './modules/ordre-fabrication/ordre-fabrication.component';

export const routes: Routes = [
  { path: 'produit', component: ProduitComponent },
  { path: 'technicien', component: TechnicienComponent },
  { path: 'machine', component: MachineComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'ordre-fabrication', component: OrdreFabricationComponent },
  { path: '', redirectTo: 'produit', pathMatch: 'full' }
];
