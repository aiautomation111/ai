// components/ContactUsPage.js

// import { FiMail, FiPhone, FiMapPin, FiChevronDown } from 'react-icons/fi'; // لاستخدام الأيقونات

const ContactUsPage = () => {
  return (
    <div className="bg-black text-white py-20 px-4 sm:px-8">
      <div className="container mx-auto space-y-24">
        
        {/* === القسم الأول: العنوان === */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">لنتحدث عن مشروعك</h1>
          <p className="text-gray-400 text-lg">
            سواء كان لديك سؤال، أو فكرة مشروع، أو ترغب فقط في معرفة المزيد، نحن هنا للاستماع. املأ النموذج أدناه أو استخدم إحدى طرق الاتصال المباشرة.
          </p>
        </section>

        {/* === القسم الثاني: نموذج الاتصال والمعلومات === */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* نموذج التواصل */}
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">الاسم</label>
                  <input type="text" id="name" name="name" placeholder="اسمك الكامل" className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">البريد الإلكتروني</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">الموضوع</label>
                <input type="text" id="subject" name="subject" placeholder="بخصوص..." className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">رسالتك</label>
                <textarea id="message" name="message" rows="5" placeholder="أخبرنا المزيد عن مشروعك أو استفسارك..." className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
              </div>
              <button type="submit" className="bg-yellow-300 text-black font-semibold py-3 px-6 rounded-lg w-full sm:w-max hover:bg-yellow-400 transition-colors">
                إرسال
              </button>
            </form>
          </div>
          {/* معلومات الاتصال */}
          <div className="flex flex-col gap-8 mt-4">
            <div className="flex items-start gap-4">
              <span className="bg-[#1A1A1A] p-3 rounded-full mt-1">
                {/* <FiMail className="text-yellow-400 text-xl" /> */} @
              </span>
              <div>
                <h3 className="font-semibold text-lg">البريد الإلكتروني</h3>
                <p className="text-gray-400">تواصل معنا للاستفسارات العامة.</p>
                <a href="mailto:info@example.com" className="text-yellow-400 hover:underline">info@example.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-[#1A1A1A] p-3 rounded-full mt-1">
                {/* <FiPhone className="text-yellow-400 text-xl" /> */} 📞
              </span>
              <div>
                <h3 className="font-semibold text-lg">الهاتف</h3>
                <p className="text-gray-400">متاحون من الأحد إلى الخميس، 9 صباحًا - 5 مساءً.</p>
                <a href="tel:+123456789" className="text-yellow-400 hover:underline">+123 456 789</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-[#1A1A1A] p-3 rounded-full mt-1">
                {/* <FiMapPin className="text-yellow-400 text-xl" /> */} 📍
              </span>
              <div>
                <h3 className="font-semibold text-lg">مكتبنا</h3>
                <p className="text-gray-400">123 شارع المثال، المدينة، الدولة.</p>
                <a href="#" className="text-yellow-400 hover:underline">عرض على الخريطة</a>
              </div>
            </div>
          </div>
        </section>

        {/* === القسم الثالث: الأسئلة الشائعة === */}
        <section>
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">الأسئلة الشائعة</h2>
                <p className="text-gray-400">بعض الإجابات السريعة على الأسئلة التي نتلقاها كثيرًا.</p>
            </div>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                {/* سؤال 1 */}
                <details className="bg-[#1A1A1A] p-4 rounded-lg cursor-pointer">
                    <summary className="font-semibold flex justify-between items-center">
                        ما هي مدة إنجاز المشروع المتوسطة؟
                        {/* <FiChevronDown className="transform transition-transform" /> */}
                    </summary>
                    <p className="text-gray-400 mt-2 pt-2 border-t border-gray-700">تعتمد مدة المشروع على حجمه ومتطلباته. بشكل عام، تتراوح المشاريع الصغيرة من 4-6 أسابيع، بينما قد تحتاج المشاريع الكبيرة إلى عدة أشهر. نقدم جدولًا زمنيًا مفصلاً بعد مرحلة التخطيط.</p>
                </details>
                {/* سؤال 2 */}
                <details className="bg-[#1A1A1A] p-4 rounded-lg cursor-pointer">
                    <summary className="font-semibold flex justify-between items-center">
                        هل تقدمون خدمات الدعم بعد إطلاق المشروع؟
                    </summary>
                    <p className="text-gray-400 mt-2 pt-2 border-t border-gray-700">نعم، نقدم باقات صيانة ودعم متنوعة لضمان استمرار عمل موقعك أو تطبيقك بكفاءة وأمان بعد الإطلاق. يمكننا مناقشة الخيارات المتاحة التي تناسب احتياجاتك.</p>
                </details>
                {/* سؤال 3 */}
                <details className="bg-[#1A1A1A] p-4 rounded-lg cursor-pointer">
                    <summary className="font-semibold flex justify-between items-center">
                       كيف تبدأ عملية تحديد تكلفة المشروع؟
                    </summary>
                    <p className="text-gray-400 mt-2 pt-2 border-t border-gray-700">تبدأ العملية بجلسة استشارية مجانية لفهم متطلباتك وأهدافك. بناءً على ذلك، نقوم بإعداد عرض سعر مفصل وشفاف يوضح جميع التكاليف المتوقعة.</p>
                </details>
            </div>
        </section>

      </div>
    </div>
  );
};

export default ContactUsPage;