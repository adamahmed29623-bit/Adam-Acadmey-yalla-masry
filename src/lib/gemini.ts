import { GoogleGenerativeAI } from "@google/generative-ai";

// إعداد المفتاح والنموذج بشكل مباشر وبسيط
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

/**
 * وظيفة المعلم الملكي لتصحيح التحديات
 */
export async function processChallenge(userAnswer: string, userLanguage: string, challengeType: string) {
  try {
    const prompt = `
      You are an Egyptian Arabic teacher. 
      Student language: ${userLanguage}
      Challenge: ${challengeType}
      Student answer: "${userAnswer}"
      
      Tasks:
      1. Correct the answer.
      2. Explain gender differences (Ayyez/Ayza) in ${userLanguage}.
      3. Use a royal encouraging tone.
      4. Write Egyptian
