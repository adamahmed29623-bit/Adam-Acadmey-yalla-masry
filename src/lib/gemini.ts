import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

export async function chatWithRoyalTutor(message: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `You are the Royal Tutor of Yalla Masry Academy. 
  Your name is Nefertiti's Assistant. 
  Your goal is to teach Egyptian Arabic to foreigners with a royal, encouraging tone.
  Always use phrases like "برافو عليك" or "ممتاز يا ملك".
  If the student asks about history, invite them to visit our "Royal Museum" or get their "Royal Cartouche".
  
  Student says: ${message}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "عذراً يا ملك، حدث خطأ في الاتصال بالعرش. حاول ثانية!";
  }
}
