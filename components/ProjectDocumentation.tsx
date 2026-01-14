
import React from 'react';

export const ProjectDocumentation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-12 space-y-10 animate-in fade-in slide-in-from-top-4 duration-500">
      
      {/* Title Section */}
      <header className="border-b border-slate-100 pb-8 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Password Strength Analyzer</h1>
        <p className="text-lg text-slate-500">Project Documentation & Report #32</p>
      </header>

      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center">
          <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mr-3 text-sm">01</span>
          مقدمة (Introduction)
        </h2>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-right" dir="rtl">
          في عصر التحول الرقمي الحالي، أصبحت حماية الهوية الرقمية والبيانات الشخصية حجر الزاوية في الأمن السيبراني. تعتبر كلمات المرور هي خط الدفاع الأول ضد الهجمات السيبرانية. يهدف هذا المشروع إلى معالجة الضعف البشري في اختيار كلمات مرور سهلة التخمين من خلال بناء أداة تحليل تقنية متطورة تقيم مدى قوة هذه الرموز باستخدام معايير رياضية ومنطقية دقيقة.
        </div>
      </section>

      {/* 2. Description & Goals */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center">
          <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mr-3 text-sm">02</span>
          وصف المشروع والأهداف (Project Description & Goals)
        </h2>
        <div className="space-y-6 text-right" dir="rtl">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">ما الذي يفعله المشروع؟</h3>
            <p className="text-slate-600">
              المشروع عبارة عن تطبيق ويب تفاعلي يقوم بتحليل كلمات المرور لحظياً باستخدام تعبيرات برمجية (Regular Expressions) لتقييم مدى تعقيدها. لا يكتفي التطبيق بالتحقق من القواعد البسيطة، بل يقوم بحساب "الاعتلاج" (Entropy) لقياس المقاومة الرياضية لهجمات القوة الغاشمة (Brute Force).
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900">الأهداف الرئيسية:</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-1 mr-4">
              <li>توفير تقييم فوري ودقيق لقوة كلمات المرور بناءً على معايير OWASP.</li>
              <li>زيادة الوعي الأمني لدى المستخدمين من خلال شرح مفهوم تعقيد كلمات المرور.</li>
              <li>تحسين الأداء البرمجي باستخدام تقنيات الـ Regex الفعالة لضمان التحقق اللحظي.</li>
              <li>توفير مقياس رياضي (Entropy) يعكس القوة الفعلية لكلمة المرور ضد الهجمات الآلية.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center">
          <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mr-3 text-sm">03</span>
          خطوات التنفيذ (Implementation Steps)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right" dir="rtl">
          <div className="border border-slate-200 p-4 rounded-xl">
            <h4 className="font-bold text-indigo-600 mb-1">المرحلة الأولى: التحليل</h4>
            <p className="text-sm text-slate-500">تحديد معايير القوة الدولية (الطول، الأحرف الكبيرة والصغيرة، الأرقام، الرموز).</p>
          </div>
          <div className="border border-slate-200 p-4 rounded-xl">
            <h4 className="font-bold text-indigo-600 mb-1">المرحلة الثانية: التطوير المنطقي</h4>
            <p className="text-sm text-slate-500">كتابة أنماط Regex متقدمة وبرمجة محرك حساب Entropy الرياضي.</p>
          </div>
          <div className="border border-slate-200 p-4 rounded-xl">
            <h4 className="font-bold text-indigo-600 mb-1">المرحلة الثالثة: الواجهات</h4>
            <p className="text-sm text-slate-500">تصميم واجهة مستخدم تفاعلية باستخدام React لضمان استجابة فورية لمدخلات المستخدم.</p>
          </div>
          <div className="border border-slate-200 p-4 rounded-xl">
            <h4 className="font-bold text-indigo-600 mb-1">المرحلة الرابعة: الاختبار</h4>
            <p className="text-sm text-slate-500">التأكد من دقة النتائج عبر اختبار مجموعة متنوعة من كلمات المرور الشائعة والمعقدة.</p>
          </div>
        </div>
      </section>

      {/* 4. Results */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center">
          <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mr-3 text-sm">04</span>
          النتائج والاستنتاجات (Results & Conclusions)
        </h2>
        <div className="bg-indigo-900 text-white p-8 rounded-2xl space-y-4 text-right" dir="rtl">
          <p className="leading-relaxed opacity-90">
            تم التوصل إلى أن الجمع بين التحليل النمطي (Regex) والتحليل الرياضي (Entropy) يوفر صورة متكاملة عن جودة كلمة المرور. النتائج أظهرت أن كلمات المرور الطويلة هي الأكثر أماناً حتى لو كانت بسيطة التركيب، وهو ما يعكسه مقياس Entropy بدقة عالية.
          </p>
          <div className="pt-4 border-t border-indigo-800">
            <h4 className="font-bold text-indigo-300">الاستنتاج العام:</h4>
            <p className="text-sm italic">
              الأدوات الأمنية التي تعتمد على المنطق البرمجي والرياضيات الصرفة توفر وسيلة موثوقة وسريعة لحماية المستخدمين. مشروع Password Strength Analyzer يثبت أن الالتزام بمعايير التعقيد يقلل بشكل كبير من احتمالية نجاح هجمات التخمين الآلية.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
