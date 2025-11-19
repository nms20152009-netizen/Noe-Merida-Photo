import { GoogleGenAI } from "@google/genai";
import { ConceptStyle } from "../types";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateConceptImage = async (
  locationName: string,
  subject: string, // e.g., "Novios", "Quinceañera"
  style: ConceptStyle
): Promise<string> => {
  const ai = getClient();

  // Prompt engineering for hyper-realism
  // Added explicit instruction for "Medium-Wide shot" and "Headroom" to prevent cropping
  const prompt = `
    Wide angle professional photography of ${subject}, located at ${locationName} in Acapulco, Mexico.
    Style: ${style}.
    The image must be hyper-realistic, 8k resolution, highly detailed.
    Composition: Medium-Wide shot or Full Body shot. CRITICAL: Ensure the subject's head is completely visible with ample headroom (space above the head). Do not crop the head. Center the subject.
    If the subject is people (couple, girl), ensure natural skin textures, professional posing, and haute couture fashion appropriate for weddings or quinceañeras.
    Lighting should be cinematic, golden hour or soft professional flash depending on the style.
    The background must clearly resemble the real location: ${locationName}.
  `;

  try {
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001', // High quality model
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/jpeg',
        aspectRatio: '3:4', // Vertical portrait orientation for photos
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes = response.generatedImages[0].image.imageBytes;
      return `data:image/jpeg;base64,${base64ImageBytes}`;
    }
    
    throw new Error("No image generated");
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};