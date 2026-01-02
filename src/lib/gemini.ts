import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");
export const royalTeacherModel = genAI.getGenerativeModel({ model: "gemini-pro" });

// تعديل الوظيفة لتقبل 3 مدخلات كما تطلب صفحة التحديات
export async function processChallenge(userAnswer: string, language: string, context: string) {
  const prompt = `As the Royal Teacher, evaluate this answer: "${userAnswer}". 
  Language: ${language}. Context: ${context}. 
  Provide feedback and award points if correct.`;
  
  const result = await royalTeacherModel.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

export async function askRoyalTeacher(prompt: string) {
  const result = await royalTeacherModel.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
