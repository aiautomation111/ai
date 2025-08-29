import Link from "next/link";

// بيانات الصفحة، منظمة في مصفوفة لتسهيل التعديل والإضافة
const servicesData = [
  {
    title: "Defining your product vision with insight and innovation",
    description:
      "Any great product starts with a vision, followed by the strategy to deliver it. Our multi-disciplinary teams can bring innovative thinking to existing challenges, collaboratively help to define the best mobile experiences to unlock latent value, and outline the technology capable of delivering it.",
    tags: [
        {
            tag:"Technology strategy",
            link:"/services"
        },
        {
            tag:"Product strategy",
            link:"/services"
        },
        {
            tag:"Digital transformation",
            link:"/services"
        },
        {
            tag:"TInnovation",
            link:"/services"
        },
        {
            tag:"App audit",
            link:"/services"
        },
        {
            tag:"User research",
            link:"/services"
        },
    ],
  },
  {
    title: "Designing and engineering transformational products",
    description:
      "Experience designers and software engineers combine to create digital products and solutions focused on results. With your users front and centre, we’ll research, design, code and test our way through even the most complex problems to deliver exceptional mobile experiences.",
    tags: [
        {
            tag:"Mobile app development",
            link:"/services"
        },
        {
            tag:"Complex system integrations",
            link:"/services"
        },
        {
            tag:"Website development",
            link:"/services"
        },
        {
            tag:"UX and UI design",
            link:"/services"
        },
        {
            tag:"Team augmentation",
            link:"/services"
        },
        {
            tag:"Accessibility",
            link:"/services"
        },
    ],
  },
  {
    title: "Performance through support, optimisation and analytics",
    description:
      "We support and optimise our clients' digital products to help them reach their full potential. We do this by ensuring the technology is always available, and maximising the users who can discover, onboard and have the experience they expect, using data alongside real user engagement to help drive our decisions.",
    tags: [
        {
            tag:"Data & AI-Driven Insights",
            link:"/services"
        },
        {
            tag:"Ongoing Support & Optimization",
            link:"/services"
        },
        {
            tag:"Growth & Conversion Optimization",
            link:"/services"
        },
    ], // يمكن إضافة tags هنا في المستقبل
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <div className="">
        {/* Section: Hero */}
        <div className="text-center h-[88vh] flex flex-col justify-center gap-11 px-14 bg-black">
          <h1 className="text-6xl font-bold text-yellow-500 tracking-wide uppercase">
            Services
          </h1>
          <p className="mt-2  font-mono text-gray-500 tracking-tight text-xl">
            We engineer custom software solutions to give your business a competitive edge.
          </p>
        </div>

        {/* Sections: Services Details */}
        <div className="mt-20 space-y-16 max-w-[95%] md:max-w-[90%] mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          {servicesData.map((service, index) => (
            <section key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow rounded-2xl p-4 text-left items-center">
              <div className="">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="">
                {/* Tags section, only shows if tags exist */}
                {service.tags.length > 0 && (
                  <>
                    <div className="mt-4 flex flex-col gap-3">
                      {service.tags.map((tag) => (
                        <Link href={tag.link}
                          key={tag.tag}
                          className="bg-yellow-100 text-yellow-800 w-[97%] hover:w-[100%] h-[60px] flex items-center duration-300 text-sm font-medium px-4 py-2 rounded-full"
                        >
                          {tag.tag}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
