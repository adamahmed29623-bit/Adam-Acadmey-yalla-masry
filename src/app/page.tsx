'use client';
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yalla Masry Academy - Unified Royal System</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Cairo', sans-serif; background-color: #050505; color: #fff; scroll-behavior: smooth; }
        .gold-text { color: #f59e0b; }
        .gold-bg { background-color: #f59e0b; }
        .royal-border { border: 2px solid #f59e0b; }
        .glass-panel { background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(12px); border: 1px solid rgba(245, 158, 11, 0.2); }
        .nav-item { cursor: pointer; transition: 0.3s; }
        .nav-item:hover { color: #f59e0b; transform: scale(1.05); }
        .hidden-section { display: none; }
        input { background: rgba(255,255,255,0.05) !important; border: 1px solid rgba(245, 158, 11, 0.3) !important; color: white !important; }
    </style>
</head>
<body>

    <!-- 1. صفحة تسجيل الدخول (Login Page) -->
    <div id="auth-section" class="min-h-screen flex items-center justify-center p-4">
        <div class="glass-panel p-10 rounded-3xl w-full max-w-md text-center shadow-2xl royal-border">
            <h1 class="text-4xl font-black gold-text mb-2">YALLA MASRY</h1>
            <p class="text-amber-100/50 mb-8 italic">نظام الهوية الملكي المتكامل</p>
            <div class="space-y-4">
                <input type="email" placeholder="البريد الإلكتروني الملكي" class="w-full p-4 rounded-xl outline-none focus:border-amber-500 transition">
                <input type="password" placeholder="كلمة السر" class="w-full p-4 rounded-xl outline-none focus:border-amber-500 transition">
                <button onclick="navigate('goal-section')" class="w-full gold-bg text-black font-black py-4 rounded-xl shadow-lg hover:brightness-110 transition">دخول الأكاديمية</button>
            </div>
            <p class="mt-6 text-sm text-amber-200/40">بانتظار إشارتكِ يا جلالة الملكة نفرتيتي</p>
        </div>
    </div>

    <!-- 2. صفحة تحديد الهدف والمستوى (Goals & Level) -->
    <div id="goal-section" class="hidden-section min-h-screen p-8">
        <div class="max-w-4xl mx-auto text-center mt-20">
            <h2 class="text-5xl font-black gold-text mb-6">حددي هدفكِ يا ملكة</h2>
            <p class="text-xl text-amber-100 mb-12">كل رحلة تبدأ بخطوة نحو الهوية</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div onclick="selectGoal('فصاحة')" class="glass-panel p-8 rounded-2xl cursor-pointer hover:border-amber-500 transition">
                    <div class="text-4xl mb-4">📜</div>
                    <h3 class="text-2xl font-bold">الفصاحة</h3>
                    <p class="text-sm text-gray-400 mt-2">إتقان اللغة بأسلوب راقٍ</p>
                </div>
                <div onclick="selectGoal('إتيكيت')" class="glass-panel p-8 rounded-2xl cursor-pointer hover:border-amber-500 transition">
                    <div class="text-4xl mb-4">👑</div>
                    <h3 class="text-2xl font-bold">الإتيكيت</h3>
                    <p class="text-sm text-gray-400 mt-2">سلوكيات الملوك والملكات</p>
                </div>
                <div onclick="selectGoal('تاريخ')" class="glass-panel p-8 rounded-2xl cursor-pointer hover:border-amber-500 transition">
                    <div class="text-4xl mb-4">🏺</div>
                    <h3 class="text-2xl font-bold">التاريخ</h3>
                    <p class="text-sm text-gray-400 mt-2">جذور الهوية المصرية</p>
                </div>
            </div>
            <button onclick="navigate('dashboard-student')" class="mt-12 text-amber-500 font-bold underline">الانتقال للوحة التحكم</button>
        </div>
    </div>

    <!-- 3. لوحة التحكم الموحدة (Dashboard) -->
    <div id="dashboard-student" class="hidden-section min-h-screen flex">
        <!-- Sidebar -->
        <aside class="w-64 glass-panel h-screen p-6 flex flex-col gap-8 fixed right-0 border-l-2 border-amber-900">
            <div class="text-2xl font-black gold-text">YALLA MASRY</div>
            <nav class="flex flex-col gap-6 text-lg">
                <div onclick="showTab('main-dash')" class="nav-item gold-text">📊 الرئيسية</div>
                <div onclick="showTab('lessons')" class="nav-item">📚 الدروس</div>
                <div onclick="showTab('challenges')" class="nav-item">⚔️ التحديات</div>
                <div onclick="showTab('teachers')" class="nav-item">👩‍🏫 المعلمات</div>
                <div onclick="showTab('shop')" class="nav-item">🛍️ المتجر</div>
                <div onclick="showTab('admin')" class="nav-item text-red-400">⚙️ الإدارة</div>
            </nav>
            <div class="mt-auto pt-6 border-t border-amber-900/50">
                <p class="text-xs text-amber-500">الطالبة: نفرتيتي</p>
                <button onclick="navigate('auth-section')" class="text-xs text-gray-500 underline">خروج</button>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 mr-64 p-10">
            
            <!-- Tab: Main Dashboard -->
            <div id="main-dash" class="tab-content">
                <header class="flex justify-between items-center mb-10">
                    <h1 class="text-4xl font-black">أهلاً بكِ، <span class="gold-text">نفرتيتي</span></h1>
                    <div class="flex gap-4">
                        <div class="glass-panel px-6 py-2 rounded-full font-bold">المستوى: محترف</div>
                        <div class="glass-panel px-6 py-2 rounded-full font-bold gold-text">💰 1,250 نقطة</div>
                    </div>
                </header>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div class="glass-panel p-6 rounded-2xl">
                        <h4 class="text-gray-400 mb-2">التقدم الحالي</h4>
                        <div class="text-3xl font-black">75%</div>
                        <div class="w-full bg-gray-800 h-2 mt-4 rounded-full">
                            <div class="gold-bg h-full w-3/4 rounded-full"></div>
                        </div>
                    </div>
                    <div class="glass-panel p-6 rounded-2xl">
                        <h4 class="text-gray-400 mb-2">التحديات المكتملة</h4>
                        <div class="text-3xl font-black">12/15</div>
                    </div>
                    <div class="glass-panel p-6 rounded-2xl">
                        <h4 class="text-gray-400 mb-2">رتبة المملكة</h4>
                        <div class="text-3xl font-black">ملكة فضية</div>
                    </div>
                </div>

                <h3 class="text-2xl font-black mb-6">آخر الدروس</h3>
                <div class="space-y-4">
                    <div class="glass-panel p-4 rounded-xl flex justify-between items-center hover:bg-amber-900/10 transition">
                        <div>
                            <p class="font-bold">مقدمة في الإتيكيت الملكي</p>
                            <p class="text-xs text-gray-500">المعلمة: أماني المصري</p>
                        </div>
                        <button class="gold-text font-bold">متابعة ⮕</button>
                    </div>
                </div>
            </div>

            <!-- Tab: Lessons -->
            <div id="lessons" class="tab-content hidden">
                <h2 class="text-3xl font-black mb-8">مكتبة الدروس الملكية</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="glass-panel p-6 rounded-2xl">
                        <div class="h-40 bg-gray-800 rounded-xl mb-4 overflow-hidden">
                            <div class="w-full h-full flex items-center justify-center text-4xl">🎬</div>
                        </div>
                        <h3 class="text-xl font-bold">فن الحديث والخطابة</h3>
                        <p class="text-sm text-gray-500 mt-2">كيف تتحدثين كملكة في المحافل الرسمية.</p>
                        <button class="mt-4 gold-bg text-black px-6 py-2 rounded-lg font-bold">ابدئي الآن</button>
                    </div>
                    <!-- تكرار للدروس -->
                </div>
            </div>

            <!-- Tab: Challenges -->
            <div id="challenges" class="tab-content hidden">
                <h2 class="text-3xl font-black mb-8">ساحة التحديات</h2>
                <div class="glass-panel p-8 rounded-3xl border-dashed border-2 border-amber-500 text-center">
                    <p class="text-2xl font-bold text-amber-500 mb-4">تحدي اليوم: المناظرة الملكية</p>
                    <p class="text-gray-400 mb-6">سجلي فيديو لمدة دقيقة تتحدثين فيها عن الهوية المصرية.</p>
                    <button class="gold-bg text-black px-10 py-3 rounded-full font-black">رفع التحدي</button>
                </div>
            </div>

            <!-- Tab: Teachers -->
            <div id="teachers" class="tab-content hidden">
                <h2 class="text-3xl font-black mb-8">نخبة المعلمات</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="glass-panel p-6 rounded-2xl text-center">
                        <div class="w-20 h-20 bg-amber-500 mx-auto rounded-full mb-4"></div>
                        <h3 class="text-xl font-bold">أ. سارة أحمد</h3>
                        <p class="text-xs text-amber-500 mb-4">خيرة الإتيكيت</p>
                        <button class="border border-amber-500 text-amber-500 px-4 py-1 rounded-full text-xs">حجز استشارة</button>
                    </div>
                </div>
            </div>

            <!-- Tab: Shop -->
            <div id="shop" class="tab-content hidden">
                <h2 class="text-3xl font-black mb-8">المتجر الملكي</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="glass-panel p-6 rounded-2xl">
                        <div class="h-32 bg-amber-900/20 rounded-xl mb-4 flex items-center justify-center text-3xl">🏺</div>
                        <h3 class="font-bold">كتاب الهوية المفقودة</h3>
                        <div class="flex justify-between items-center mt-4">
                            <span class="gold-text">500 نقطة</span>
                            <button class="gold-bg text-black px-3 py-1 rounded-md text-sm font-bold">شراء</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tab: Admin (لوحة تحكم المعلمة والإدارة) -->
            <div id="admin" class="tab-content hidden">
                <h2 class="text-3xl font-black text-red-500 mb-8">مركز الإدارة والتحكم</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="glass-panel p-6 rounded-2xl border-red-900/50">
                        <h3 class="text-xl font-bold mb-4">إدارة الطالبات</h3>
                        <table class="w-full text-sm">
                            <thead><tr class="text-gray-500 border-b border-gray-800 text-right"><th class="pb-2">الاسم</th><th class="pb-2">الحالة</th><th class="pb-2">الإجراء</th></tr></thead>
                            <tbody>
                                <tr><td class="py-3">نفرتيتي</td><td class="text-green-500">نشط</td><td><button class="text-xs gold-text">تعديل</button></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="glass-panel p-6 rounded-2xl">
                        <h3 class="text-xl font-bold mb-4">إضافة درس جديد</h3>
                        <input type="text" placeholder="عنوان الدرس" class="w-full p-3 rounded-lg mb-4">
                        <textarea placeholder="وصف الدرس" class="w-full p-3 rounded-lg bg-transparent border border-amber-900 mb-4 h-24"></textarea>
                        <button class="w-full bg-red-600 text-white py-3 rounded-lg font-bold">نشر الدرس للملكات</button>
                    </div>
                </div>
            </div>

        </main>
    </div>

    <script>
        function navigate(sectionId) {
            // إخفاء كل الأقسام الرئيسية
            document.querySelectorAll('body > div').forEach(div => {
                div.classList.add('hidden-section');
            });
            // إظهار القسم المطلوب
            document.getElementById(sectionId).classList.remove('hidden-section');
        }

        function showTab(tabId) {
            // إخفاء كل التبويبات في لوحة التحكم
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.add('hidden');
            });
            // إظهار التبويب المطلوب
            document.getElementById(tabId).classList.remove('hidden');

            // تحديث حالة القائمة الجانبية (Sidebar)
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('gold-text');
            });
            // العثور على العنصر المقابل في القائمة الجانبية وتغيير لونه
            event.currentTarget.classList.add('gold-text');
        }

        function selectGoal(goal) {
            console.log("الهدف المختار: " + goal);
            navigate('dashboard-student');
        }

        // بدء المحادثة الصوتية عند الدخول (اختياري)
        function welcome() {
            // منطق الصوت هنا
        }
    </script>
</body>
</html>
