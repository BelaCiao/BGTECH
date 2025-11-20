import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTechAdvice = async (userIssue: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: userIssue,
      config: {
        systemInstruction: `You are a senior electronics technician at BGTECH. 
        Your goal is to provide a preliminary diagnosis for electronic devices based on user descriptions.
        
        1. Be professional, concise, and helpful.
        2. If the issue sounds like a common repair (e.g., TV backlight, blown fuse, broken screen), explain what might be wrong.
        3. ALWAYS conclude by recommending they bring the device to BGTECH in Rio Grande, RS for a free quote.
        4. Do not give instructions that could be dangerous (high voltage) to an untrained person.
        5. Keep responses under 100 words.
        6. Reply in Portuguese (pt-BR).`,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, não consegui processar sua solicitação no momento. Por favor, traga seu aparelho para uma avaliação gratuita.";
  } catch (error) {
    console.error("Error fetching tech advice:", error);
    return "Ocorreu um erro ao consultar o assistente técnico virtual. Entre em contato pelo WhatsApp.";
  }
};
