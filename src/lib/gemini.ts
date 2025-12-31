import { GoogleGenerativeAI } from "@google/generative-ai";

// تأكدي أن هذا المفتاح مضاف في إعدادات Vercel كما فعلنا
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export const royalTutorModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

/**
 * دالة معالجة التحديات وتصحيحها تربوياً للأجانب
 */
export async function processChallenge(userAnswer: string, userLanguage: string, challengeType: string) {
  try {
    // التحقق من وجود المفتاح لتجنب تعليق الموقع
    if (!apiKey) {
      return "System Error: API Key missing. Please check Vercel settings.";
    }

    const prompt = `
      You are the "Royal Tutor" at Yalla Masry Academy. 
      Your mission: Teach Egyptian Arabic to foreigners.
      Student Language: ${userLanguage} (Translate your feedback to this language).
      Challenge: ${challengeType}
      Student Answer: "${userAnswer}"
      
      Instructions:
