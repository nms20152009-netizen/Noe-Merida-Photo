export enum PhotoCategory {
  WEDDING = 'Bodas',
  XV = 'XV Años',
  BEACH = 'Playa',
  ACAPULCO = 'Paisajes Acapulco'
}

export interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
  category: PhotoCategory;
}

export interface AcapulcoLocation {
  id: string;
  name: string;
  description: string;
}

export enum ConceptStyle {
  CINEMATIC = 'Cinemático',
  NATURAL = 'Luz Natural',
  DRAMATIC = 'Dramático',
  VINTAGE = 'Vintage'
}