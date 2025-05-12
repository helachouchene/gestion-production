import { Machine } from '../machine/machine.model';

export interface Technicien {
  id: number;
  nom: string;
  competences: string;
  machineAssignee: Machine;
}
