export interface Maintenance {
  id: number;
  machine: { id: number, nom: string };
  technicien: { id: number, nom: string };
  date: string;
  type: string;
}
