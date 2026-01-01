import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function processChallenge(userAnswer: string, userLanguage: string, challengeType: string) {
  try {
    const prompt = `
      You are an Egyptian Arabic teacher. 
      Student language: ${userLanguage}
      Challenge: ${challengeType}
      Student answer: "${userAnswer}"
      
      Tasks:
      1. Correct the answer educationally.
      2. Explain gender differences (Ayyez/Ayza) in ${userLanguage}.
      3. Use a royal encouraging tone.
      4. Write Egyptian words in Arabic and Latin letters.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
    
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to the system. Please try again.";
  }
}
