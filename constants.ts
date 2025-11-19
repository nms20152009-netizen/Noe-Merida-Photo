import { AcapulcoLocation, PhotoCategory, PortfolioItem } from "./types";

export const ACAPULCO_LOCATIONS: AcapulcoLocation[] = [
  { id: 'quebrada', name: 'La Quebrada', description: 'Iconico acantilado con vistas dramáticas al atardecer.' },
  { id: 'pie_de_la_cuesta', name: 'Pie de la Cuesta', description: 'Atardeceres dorados interminables en mar abierto.' },
  { id: 'jardin_botanico', name: 'Jardín Botánico de Acapulco', description: 'Vegetación tropical exuberante y selva.' },
  { id: 'sinfonia', name: 'Sinfonía del Mar', description: 'Anfiteatro al aire libre con vista panorámica al océano.' },
  { id: 'punta_diamante', name: 'Punta Diamante', description: 'Playas exclusivas y modernas con arena suave.' },
  { id: 'fuerte_san_diego', name: 'Fuerte de San Diego', description: 'Arquitectura histórica colonial con textura.' },
];

// Preview images for the loading state of the generator
export const LOCATION_PREVIEWS: Record<string, string> = {
  'quebrada': "https://images.unsplash.com/photo-1518144591331-17a5dd71c477?auto=format&fit=crop&w=800&q=10", // Low quality/blur intent
  'pie_de_la_cuesta': "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=10",
  'jardin_botanico': "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=800&q=10",
  'sinfonia': "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=10",
  'punta_diamante': "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=10",
  'fuerte_san_diego': "https://images.unsplash.com/photo-1585505677477-40d57402c649?auto=format&fit=crop&w=800&q=10",
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // --- BODAS (5 Sesiones Diferentes) ---
  { 
    id: 101, 
    category: PhotoCategory.WEDDING, 
    title: "Eternidad en Pie de la Cuesta", 
    // Sunset, silhouette vibe, warm tones, beach
    imageUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 102, 
    category: PhotoCategory.WEDDING, 
    title: "Votos en Punta Diamante", 
    // Bright, airy, modern beach wedding style
    imageUrl: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 103, 
    category: PhotoCategory.WEDDING, 
    title: "Intimidad Tropical", 
    // Couple surrounded by palm trees/greenery
    imageUrl: "https://images.unsplash.com/photo-1596386461350-32625669414d?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 104, 
    category: PhotoCategory.WEDDING, 
    title: "Caminata Nupcial", 
    // Walking on sand, movement
    imageUrl: "https://images.unsplash.com/photo-1546193430-c2d207739ed7?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 105, 
    category: PhotoCategory.WEDDING, 
    title: "El Brindis Perfecto", 
    // Celebration, champagne, bokeh
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80" 
  },

  // --- XV AÑOS (5 Sesiones Diferentes) ---
  { 
    id: 201, 
    category: PhotoCategory.XV, 
    title: "Princesa del Pacífico", 
    // Girl in dress, wide shot, ocean background
    imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 202, 
    category: PhotoCategory.XV, 
    title: "Sesión Golden Hour", 
    // Warm light, close up/portrait
    imageUrl: "https://images.unsplash.com/photo-1532716377055-032a9a9370dc?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 203, 
    category: PhotoCategory.XV, 
    title: "Elegancia en La Quebrada", 
    // Rocky coast, cliffs, dramatic dress (Visual match for cliffs)
    imageUrl: "https://images.unsplash.com/photo-1518144591331-17a5dd71c477?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 204, 
    category: PhotoCategory.XV, 
    title: "Silueta al Atardecer", 
    // Strong silhouette against sunset
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 205, 
    category: PhotoCategory.XV, 
    title: "Jardín Tropical", 
    // Dense greenery, jungle vibe, flowers
    imageUrl: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=800&q=80" 
  },
];