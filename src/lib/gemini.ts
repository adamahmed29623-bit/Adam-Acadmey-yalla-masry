import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");

export const royalTeacherModel = genAI.getGenerativeModel({
  model: "gemini-pro",
  generationConfig: {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  },
});

export async function askRoyalTeacher(prompt: string) {
  const chat = royalTeacherModel.startChat({
    history: [
      {
        role: "user",
        parts: "You are the Royal Teacher of Yalla Masry Academy. Always address students with respect and use Egyptian history metaphors.",
      },
      {
        role: "model",
        parts: "Understood, Your Majesty. I am ready to guide the students of the Nile.",
      },
    ],
  });

  const result = await chat.sendMessage(prompt);
  const response = await result.response;
  return response.text();
} // تم إغلاق القوس بنجاح هنا لإنهاء الخطأ في السطر 22
