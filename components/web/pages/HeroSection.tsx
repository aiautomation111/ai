import Image from "next/image";
// import { FiArrowRight } from 'react-icons/fi'; //  لاستخدام الأيقونة، قم بتثبيت react-icons أولاً: npm install react-icons

const HeroSection = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* القسم الأيسر: المحتوى النصي */}
        <div className="flex flex-col gap-8 pr-0 md:pr-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
  Not Just Mobile Experts.
  Its An <span className="text-red-500">Experience!</span>
</h1>
          <p className="text-gray-400 text-lg">
Our Digital Solution Are The Defference Between You Owning a Job And Owning Your Time. 
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              {/* صور رمزية للعملاء */}
              <Image
                src="https://img.freepik.com/free-vector/technology-background-with-hexagons_23-2148431735.jpg"
                alt="Satisfied customer 1"
                width={40}
                height={40}
                className="rounded-full border-2 border-black"
              />
              <Image
                src="https://img.freepik.com/free-photo/colleagues-working-office-project_23-2149171593.jpg"
                alt="Satisfied customer 2"
                width={40}
                height={40}
                className="rounded-full border-2 border-black"
              />
              <Image
                src="https://img.freepik.com/free-vector/abstract-technology-background_23-2149211083.jpg"
                alt="Satisfied customer 3"
                width={40}
                height={40}
                className="rounded-full border-2 border-black"
              />
              <Image
                src="https://i.pravatar.cc/150?img=4"
                alt="Satisfied customer 4"
                width={40}
                height={40}
                className="rounded-full border-2 border-black"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-yellow-400">★★★★★</span>
                <span className="font-bold ml-2">5.0</span>
              </div>
              <p className="text-gray-400 text-sm">50+ Satisfied Customers</p>
            </div>
          </div>

          <button className="bg-yellow-300 text-black font-semibold py-3 px-6 rounded-lg flex items-center gap-2 w-max hover:bg-yellow-400 transition-colors">
            Get a Quote
            <div className="bg-black text-white rounded-full p-1">
              {/* <FiArrowRight /> */}
            </div>
          </button>
        </div>

        {/* القسم الأيمن: شبكة الصور */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-3">
            <div className="h-48 sm:h-64 rounded-xl overflow-hidden">
              <Image
                src="https://img.freepik.com/free-vector/abstract-technology-background_23-2149211083.jpg" // استبدل بالصورة الخاصة بك
                alt="Woman holding a tablet"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#3A3A3A] h-48 sm:h-64 rounded-xl"></div>
          </div>
          <div className="md:flex hidden flex-col gap-3">
            <div className="bg-[#3A3A3A] h-48 sm:h-64 rounded-xl"></div>
          <div className="h-48 sm:h-64 rounded-xl overflow-hidden">
            <Image
              src="https://img.freepik.com/free-photo/digital-technology-network-data-background_24070-1096.jpg" // استبدل بالصورة الخاصة بك
              alt="Woman holding a tablet"
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          </div>
          <div className="md:flex flex-col gap-3 hidden">
            <div className="h-48 sm:h-64 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887" // استبدل بالصورة الخاصة بك
              alt="Man working on a laptop"
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#3A3A3A] h-48 sm:h-64 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
