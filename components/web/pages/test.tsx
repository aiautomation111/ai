export default function HomePage() {
  const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-lg max-w-2xl mx-auto">{subtitle}</p>
    </section>
  );

  const FeatureCard = ({ title, desc }: { title: string; desc: string }) => (
    <div className="rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );

  const features = [
    { title: "Search Engine Optimization", desc: "Meta tags, semantic HTML, sitemap, robots.txt" },
    { title: "Performance Optimization", desc: "Image compression, code splitting, lazy-loading" },
  ];

  return (
    <div>
      <Hero
        title="Welcome to Acme Co."
        subtitle="Delivering solutions with speed, security, and style."
      />

      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <FeatureCard key={i} title={f.title} desc={f.desc} />
        ))}
      </section>
    </div>
  );
}
