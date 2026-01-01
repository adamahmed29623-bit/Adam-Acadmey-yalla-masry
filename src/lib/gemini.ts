import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function processChallenge(userAnswer: string, userLanguage: string, challengeType: string) {
  try {
    const prompt = `You are a Royal Egyptian Teacher. Correct this for a ${userLanguage} student. Task: ${challengeType}. Answer: ${userAnswer}. Explain gender (Ayyez/Ayza) and award 50 Nile points.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    return "Error connecting to the Royal Tutor.";
  }
}
