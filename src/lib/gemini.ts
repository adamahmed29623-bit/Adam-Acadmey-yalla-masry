import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function processChallenge(userAnswer: string, userLanguage: string, challengeType: string) {
  try {
    const prompt = `
      You are a Royal Egyptian Arabic teacher at Yalla Masry Academy.
      Student language: ${userLanguage}
      Task: ${challengeType}
      Student's Answer: "${userAnswer}"

      Instructions:
      1. Correct the answer educationally and encouragingly.
      2. Explain gender differences (Ayyez for male / Ayza for female) in ${userLanguage}.
      3. Use a royal, motivating tone.
      4. Write Egyptian words in both Arabic script and Latin transliteration.
      5. Award 50 Nile Points for the effort.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
    
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The Royal Nile is temporarily quiet. Please try again soon.";
  }
}
