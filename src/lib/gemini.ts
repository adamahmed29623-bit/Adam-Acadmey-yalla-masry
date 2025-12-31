// استدعاء مكتبة Google Generative AI
import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. إعداد مفتاح السر (تأكدي من وضعه في إعدادات Vercel كـ Environment Variable)
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");

export const royalTutorModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // النسخة السريعة لضمان استجابة فورية للطلاب
});

// 2. البرومبت الملكي (التعليمات الأساسية)
const ROYAL_INSTRUCTIONS = `
أنت "المعلم الملكي" في أكاديمية Yalla Masry. مهمتك هي تعليم العامية المصرية للأجانب.
قواعدك:
- إذا أجاب الطالب، حلل إجابته وصححها تربوياً.
- اشرح الفرق بين المذكر والمؤنث (مثل عايز وعايزة).
- رد بلغة الطالب الأم (الصينية، الأردية، الإنجليزية، إلخ).
- شجع الطالب دائماً بذكر "نقاط النيل" التي حصل عليها.
`;

// 3. دالة معالجة التحديات
export async function processChallenge(userAnswer: string, userLanguage: string, challengeType: string) {
  try {
    const prompt = `${ROYAL_INSTRUCTIONS}
    لغة الطالب: ${userLanguage}
    نوع التحدي: ${challengeType}
    إجابة الطالب: "${userAnswer}"
    قم بالرد باللغة ${userLanguage} مع كتابة الكلمات المصرية بالعربي وبالنطق اللاتيني.`;

    const result = await royalTutorModel.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error in Royal Tutor:", error);
    return "عذراً يا صديقي، هناك عطل في النيل، حاول ثانية! (Sorry, please try again)";
  }
}
