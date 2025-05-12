export interface Machine {
  id: number;
  nom: string;
  etat: string;
  maintenanceProchaine: string; // Date au format ISO
}
