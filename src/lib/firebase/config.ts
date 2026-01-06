import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// الإعدادات التي أرسلتِها
const firebaseConfig = {
  projectId: "yalla-masry-academy",
  appId: "1:652841336422:web:2d18c35b9a456a5c13936c",
  storageBucket: "yalla-masry-academy.appspot.com",
  apiKey: "AIzaSyC1sCq2O1O7n4Yd5n2f3g6hJk9l1mNn2o",
  authDomain: "yalla-masry-academy.firebaseapp.com",
  messagingSenderId: "652841336422"
};

// تهيئة التطبيق (بشكل يمنع التكرار في Next.js)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// تصدير الأدوات الملكية لاستخدامها في الأكواد الأخرى
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
