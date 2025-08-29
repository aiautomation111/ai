import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

// يمكنك إنشاء مصفوفة للروابط لجعل الكود أكثر نظافة
const strategyLinks = [
  { href: "/services", label: "Your Tech Roadmap" },
  { href: "/services", label: "Product Vision & Roadmap" },
  { href: "/services", label: "Digital Transformation & Optimization" },
  { href: "/services", label: "AI & Automation" },
  { href: "/services", label: "Tech Audit" },
  { href: "/services", label: "User Experience & Insights" },
];

const executionLinks = [
  { href: "/services", label: "Web & E-commerce Solutions" },
  { href: "/services", label: "Mobile & Cross-Platform Apps" },
  { href: "/services", label: "System Integrations & Automation" },
  { href: "/services", label: "User Experience & Insights" },
  { href: "/services", label: "Developers on Rent" },
  { href: "/services", label: "Digital Accessibility" },
];

const growthLinks = [
    { href: "/services", label: "Data & AI-Driven Insights" },
    { href: "/services", label: "Ongoing Support & Optimization" },
    { href: "/services", label: "Growth & Conversion Optimization" },
];


export default function Navbar() {
  return (
    <nav className="relative shadow-sm flex justify-center p-4">
      <ul className="flex items-center gap-x-8">
        {/* Nav Item: Home */}
        <li>
          <Link href="/" className="font-semibold text-white hover:text-yellow-500 transition-colors">
            Home
          </Link>
        </li>

        {/* Nav Item with Mega Menu: Services */}
        <li className="group relative">
          <Link href={"/services2"} className="font-semibold text-white hover:text-yellow-500 transition-colors flex items-center gap-x-1">
            Services
            <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
          </Link>

          {/* Mega Menu container */}
          <div className="
            fixed top-[90px] left-[3%] z-10
            w-[95vw] bg-white rounded-2xl shadow-lg p-6 {/* ✨ تم التعديل هنا */}
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all duration-300 ease-in-out
            mt-2
          ">
            <div className="grid grid-cols-4 gap-6">
              {/* Column 1 */}
              <div>
                <h3 className="font-bold text-yellow-500 mb-2">Strategy & Discovery</h3>
                <ul className="space-y-3">
                  {strategyLinks.map((link) => (
                     <li key={link.label}>
                        <Link href={link.href} className="text-sm font-medium text-gray-800 hover:text-yellow-500 transition-colors">
                            {link.label}
                        </Link>
                     </li>
                  ))}
                </ul>
              </div>
              {/* Column 2 */}
              <div className="border-x border-gray-100 px-6">
                <h3 className="font-bold text-yellow-500 mb-2">Execution & Delivery</h3>
                <ul className="space-y-3">
                    {executionLinks.map((link) => (
                        <li key={link.label}>
                            <Link href={link.href} className="text-sm font-medium text-gray-800 hover:text-yellow-500 transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
              </div>
              {/* Column 3 */}
              <div>
                <h3 className="font-bold text-yellow-500 mb-2">Growth & Support</h3>
                <ul className="space-y-3">
                    {growthLinks.map((link) => (
                        <li key={link.label}>
                            <Link href={link.href} className="text-sm font-medium text-gray-800 hover:text-yellow-500 transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
              </div>
              <div className="">
                <img src="Logo-light.png" className='w-full h-[50%]' alt="" />
              </div>
            </div>
          </div>
        </li>

        {/* Other Nav Items */}
        <li>
          <Link href="/f&q" className="font-semibold text-white hover:text-yellow-500 transition-colors">
            F&Q
          </Link>
        </li>
        <li>
          <Link href="/blogs" className="font-semibold text-white hover:text-yellow-500 transition-colors">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact_us" className="font-semibold text-white hover:text-yellow-500 transition-colors">
            Contact
          </Link>
        </li>
        <li>
            <Link href="#" className="px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full transition-colors">
                Get Started
            </Link>
        </li>
      </ul>
      
    </nav>
  );
}

