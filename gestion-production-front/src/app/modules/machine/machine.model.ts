export interface Machine {
  id: number;
  nom: string;
  etat: string;
  maintenance_prochaine: string; // Date au format ISO
}
