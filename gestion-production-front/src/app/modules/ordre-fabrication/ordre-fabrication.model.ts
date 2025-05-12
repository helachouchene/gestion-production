export interface OrdreFabrication {
  id: number;
  produit: {
    id: number;
    nom?: string;
  };
  machine: {
    id: number;
    nom?: string;
  };
  quantite: number;
  date: string;
  statut: string;
}
