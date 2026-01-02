
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");

export const royalTeacherModel = genAI.getGenerativeModel({
  model: "gemini-pro",
});

// الوظيفة المطلوبة في صفحة التحديات
export async function processChallenge(userAnswer: string) {
  const prompt = `As the Royal Teacher, evaluate this answer for an Egyptian history challenge: ${userAnswer}. Provide feedback and award points if correct.`;
  const result = await royalTeacherModel.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

// الوظيفة المطلوبة للدردشة العامة
export async function askRoyalTeacher(prompt: string) {
  const result = await royalTeacherModel.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
