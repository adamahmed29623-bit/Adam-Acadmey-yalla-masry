// --- بداية الجزء المصحح (من السطر 30) ---
    const result = await royalTutorModel.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text;
  } catch (error: any) {
    console.error("Royal Tutor Error:", error);
    return "Error: Could not connect to the Royal Nile.";
  }
}
// --- نهاية الجزء المصحح ---
